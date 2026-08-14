import type { APIRoute } from 'astro';
import Redis from 'ioredis';

const redisUrl = import.meta.env.REDIS_URL || process.env.REDIS_URL;
let redis: Redis | null = null;

if (redisUrl) {
  redis = new Redis(redisUrl);
}

export const GET: APIRoute = async () => {
  if (!redis) {
    return new Response(JSON.stringify({ error: 'Redis not configured' }), { status: 500 });
  }

  try {
    // Get all keys starting with 'zd-*'
    const keys = await redis.keys('zd-*');
    const stats: Record<string, string | null> = {};
    
    if (keys.length > 0) {
      const values = await redis.mget(keys);
      keys.forEach((key, i) => {
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
