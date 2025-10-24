import dbConnect from "../../../lib/mongodb";
import Content from "../../../lib/models/Content";

export default async function handler(req, res) {
  await dbConnect();

  const { id } = req.query;

  if (req.method === "GET") {
    try {
      const content = await Content.findById(id);
      if (!content) {
        return res.status(404).json({ error: "Content not found" });
      }
      res.status(200).json(content);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch content" });
    }
  } else if (req.method === "PUT") {
    try {
      const content = await Content.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (!content) {
        return res.status(404).json({ error: "Content not found" });
      }
      res.status(200).json(content);
    } catch (error) {
      res.status(500).json({ error: "Failed to update content" });
    }
  } else if (req.method === "DELETE") {
    try {
      const content = await Content.findByIdAndDelete(id);
      if (!content) {
        return res.status(404).json({ error: "Content not found" });
      }
      res.status(200).json({ message: "Content deleted" });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete content" });
    }
  } else {
    res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
