import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import { prisma } from "../../../lib/prisma";

const newContractSchema = z.object({
  name: z.string().transform((name) => name.toLowerCase()),
  number: z.string(),
  modalityId: z.number(),
  initialDate: z.string().datetime(),
  dueDate: z.string().datetime(),
  firstInvoiceDate: z.string().datetime(),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { name, number, modalityId, dueDate, firstInvoiceDate, initialDate } =
    newContractSchema.parse(req.body);

  console.log(name, number, modalityId, dueDate, firstInvoiceDate, initialDate);

  // try {
  //   await prisma.contract.create({
  //     data: {
  //       name,
  //       number,
  //       modality_id: modalityId,
  //       due_date: new Date(dueDate),
  //       first_invoice_date: new Date(firstInvoiceDate),
  //       initial_date: new Date(initialDate),
  //     },
  //   });
  // } catch (error) {
  //   console.log(error);
  // }

  res.status(201).json("to aqui");
}
