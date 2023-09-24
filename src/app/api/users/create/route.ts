import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/prisma/prisma";

// Define API route handler
export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { name } = req.body;
    console.log('POST API', name);
    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }

    const newUser = await prisma.user.create({
      data: {
        name,
      },
    });


    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}