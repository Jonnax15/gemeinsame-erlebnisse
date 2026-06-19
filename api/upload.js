import { put } from "@vercel/blob";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Nur POST erlaubt" });
    }

    const filename = req.headers["x-filename"] || "bild.jpg";

    const blob = await put(filename, req, {
        access: "public",
        addRandomSuffix: true
    });

    res.status(200).json({ url: blob.url });
}
