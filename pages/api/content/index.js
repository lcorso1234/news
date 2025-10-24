import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import dbConnect from "../../../lib/mongodb";
import Content from "../../../lib/models/Content";

export default async function handler(req, res) {
  const authDisabled = process.env.ADMIN_AUTH_DISABLED === "true";
  const session = authDisabled
    ? null
    : await getServerSession(req, res, authOptions);

  if (!authDisabled && !session) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  await dbConnect();

  if (req.method === "GET") {
    try {
      const { type, published } = req.query;
      let query = {};

      if (type) {
        query.type = type;
      }

      if (published === "true") {
        query.published = true;
      }

      const contents = await Content.find(query).sort({ createdAt: -1 });
      res.status(200).json(contents);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch contents" });
    }
  } else if (req.method === "POST") {
    try {
      const content = new Content(req.body);
      await content.save();
      res.status(201).json(content);
    } catch (error) {
      res.status(500).json({ error: "Failed to create content" });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
