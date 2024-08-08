import type { NextApiRequest, NextApiResponse } from "next";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/utils/firebase";
import { Blog } from "@/interfaces/api/blogs";
import { ApiError } from "@/interfaces/api/api-error";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Blog | ApiError>
) {
  if (req.method === "GET") {
    const { id } = req.query;

    try {
      if (typeof id === "string") {
        const blogDoc = doc(db, "blogs", id);
        const blogSnapshot = await getDoc(blogDoc);

        if (blogSnapshot.exists()) {
          let blog = { id: blogSnapshot.id, ...blogSnapshot.data() } as Blog
          res.status(200).json(blog);
        } else {
          res.status(404).json({ message: "Blog not found" });
        }
      }
    } catch (error) {
      console.error("Error fetching blog post:", error);
      res.status(500).json({ message: "Error fetching blog post" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
