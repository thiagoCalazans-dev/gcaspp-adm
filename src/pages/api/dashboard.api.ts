import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";
import { dateFormatter } from "../../utils/formatter";

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
    return new Date(contract.due_date);
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
    return new Date(contract.first_invoice_date);
  }

  const result = contracts.map((item) => {
    return {
      id: item.id,
      name: item.name,
      number: item.number,
      modality: item.Modality.name,
      initialDate: dateFormatter.format(item.initial_date),
      dueDate: dateFormatter.format(getDueDate(item)),
      nextInvoice: dateFormatter.format(getNextInvoiceDate(item)),
    };
  });

  res.status(200).json(result);
}
