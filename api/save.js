import { Redis } from "@upstash/redis";

const redis = new Redis({
    url: process.env.UPSTASH_REDIS_KV_REST_API_URL,
    token: process.env.UPSTASH_REDIS_KV_REST_API_TOKEN
});

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Nur POST erlaubt" });
    }

    try {
        await redis.set("erlebnisDaten", req.body);
        res.status(200).json({ success: true });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
