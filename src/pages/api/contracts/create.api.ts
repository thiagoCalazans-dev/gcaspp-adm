import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import { prisma } from "../../../lib/prisma";

const newContractSchema = z.object({
  name: z.string().transform((name) => name.toLowerCase()),
  number: z.number(),
  modalityId: z.number(),
  initialDate: z.string().datetime(),
  dueDate: z.string().datetime(),
  firstInvoiceDate: z.string().datetime(),
});

type newContractSchema = z.infer<typeof newContractSchema>;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  try {
    const { name, dueDate, firstInvoiceDate, initialDate, modalityId, number } =
      newContractSchema.parse(req.body);

    const newContract = await prisma.contract.create({
      data: {
        name: name,
        number: number,
        modality_id: modalityId,
        initial_date: initialDate,
        first_invoice_date: firstInvoiceDate,
        due_date: dueDate,
      },
    });
    res.status(201).json(newContract);
  } catch (error) {
    console.log(error);
  }
}
