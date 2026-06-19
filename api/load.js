import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export default async function handler(req, res) {
    const daten = await redis.get("erlebnisDaten");
    res.status(200).json(daten || {});
}
