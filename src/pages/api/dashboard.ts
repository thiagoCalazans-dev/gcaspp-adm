import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  const contracts = await prisma.contract.findMany({
    include: {
      renewals: true,
      Modality: true,
      invoices: true,
    },
  });

  function getDueDate(contract: any) {
    if (contract.renewals > 0) {
      new Date(
        Math.max.apply(
          null,
          contract.renewals.map((item: any) => {
            return new Date(item.due_date);
          })
        )
      );
    }
    return contract.due_date;
  }

  function getNextInvoiceDate(contract: any) {
    if (contract.invoices > 0) {
      new Date(
        Math.max.apply(
          null,
          contract.renewals.map((item: any) => {
            return new Date(item.next_invoice);
          })
        )
      );
    }
    return contract.first_invoice_date;
  }

  const result = contracts.map((item) => {
    return {
      id: item.id,
      name: item.name,
      number: item.name,
      modality: item.Modality.name,
      initialDate: item.initial_date,
      dueDate: getDueDate(item),
      nextInvoice: getNextInvoiceDate(item),
    };
  });

  res.status(200).json(result);
}
