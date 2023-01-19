import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import { prisma } from "../../../lib/prisma";

// const newContractSchema = z.object({
//   name: z.string().transform((name) => name.toLowerCase()),
//   number: z.string(),
//   modalityId: z.string(),
//   initialDate: z.string().datetime(),
//   dueDate: z.string().datetime(),
//   firstInvoiceDate: z.string().datetime(),
// });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }
  console.log(req.body);

  res.status(201).json(req.body);
}
