import type { APIRoute } from 'astro';

let redisInstance: any = null;

async function getRedis() {
  if (redisInstance) return redisInstance;
  
  const redisUrl = import.meta.env.REDIS_URL || process.env.REDIS_URL;
  if (!redisUrl) return null;

  try {
    const ioredis = await import('ioredis');
    const Redis = ioredis.default || (ioredis as any).Redis;
    redisInstance = new Redis(redisUrl);
    return redisInstance;
  } catch (e) {
    console.error('Failed to initialize ioredis:', e);
    return null;
  }
}

export const GET: APIRoute = async () => {
  const redis = await getRedis();
  if (!redis) {
    return new Response(JSON.stringify({ error: 'Redis not configured' }), { status: 500 });
  }

  try {
    // Get all keys starting with 'zd-*'
    const keys = await redis.keys('zd-*');
    const stats: Record<string, string | null> = {};
    
    if (keys.length > 0) {
      const values = await redis.mget(keys);
      keys.forEach((key: string, i: number) => {
        stats[key] = values[i];
      });
    }
    
    return new Response(JSON.stringify(stats), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Failed to fetch stats' }), { status: 500 });
  }
};

export const POST: APIRoute = async ({ request }) => {
  const redis = await getRedis();
  if (!redis) {
    return new Response(JSON.stringify({ error: 'Redis not configured' }), { status: 500 });
  }

  try {
    const { type, edition } = await request.json();
    
    if (!['views', 'downloads'].includes(type) || !edition) {
      return new Response(JSON.stringify({ error: 'Invalid payload' }), { status: 400 });
    }

    const key = `zd-${type}-${edition}`;
    const newValue = await redis.incr(key);

    return new Response(JSON.stringify({ value: newValue }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Failed to update stats' }), { status: 500 });
  }
};
