import type { NextApiRequest, NextApiResponse } from "next";

import { collection, getDocs } from "firebase/firestore";
import { db } from "@/utils/firebase";
import { Blog } from "@/interfaces/api/blogs";
import { ApiError } from "@/interfaces/api/api-error";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Blog[] | ApiError>
) {
  if (req.method === "GET") {
    try {
      const querySnapshot = await getDocs(collection(db, "blogs"));
      const blogs = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      
      res.status(200).json(blogs as Blog[]);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      return {
        props: {
          posts: [],
        },
      };
    }
  } else res.status(405).json({ message: "Method not allowed" });
}
