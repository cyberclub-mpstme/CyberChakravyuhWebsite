import type { APIRoute } from 'astro';

// Using native fetch to Upstash/KV REST API avoids ALL bundler/dependency crash issues on Vercel
function getRedisConfig() {
  const url = import.meta.env.UPSTASH_REDIS_REST_URL || import.meta.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
  const token = import.meta.env.UPSTASH_REDIS_REST_TOKEN || import.meta.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;
  
  if (!url || !token) return null;
  return { url, token };
}

async function redisFetch(config: { url: string; token: string }, command: string, ...args: any[]) {
  const body = JSON.stringify([command, ...args]);
  const res = await fetch(config.url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${config.token}`,
      'Content-Type': 'application/json',
    },
    body,
  });
  if (!res.ok) throw new Error(`Upstash error: ${res.statusText}`);
  const data = await res.json();
  if (data.error) throw new Error(data.error);
  return data.result;
}

export const GET: APIRoute = async () => {
  const config = getRedisConfig();
  if (!config) return new Response(JSON.stringify({ error: 'Redis REST not configured' }), { status: 500 });

  try {
    const keys = await redisFetch(config, 'KEYS', 'zd-*');
    const stats: Record<string, string | null> = {};
    
    if (keys && keys.length > 0) {
      const values = await redisFetch(config, 'MGET', ...keys);
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
  const config = getRedisConfig();
  if (!config) return new Response(JSON.stringify({ error: 'Redis REST not configured' }), { status: 500 });

  try {
    const { type, edition } = await request.json();
    
    if (!['views', 'downloads'].includes(type) || !edition) {
      return new Response(JSON.stringify({ error: 'Invalid payload' }), { status: 400 });
    }

    const key = `zd-${type}-${edition}`;
    const newValue = await redisFetch(config, 'INCR', key);

    return new Response(JSON.stringify({ value: newValue }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Failed to update stats' }), { status: 500 });
  }
};
