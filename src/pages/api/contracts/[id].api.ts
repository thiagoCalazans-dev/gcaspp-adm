import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";
import { formatDateStringToBrDate } from "../../../utils/formatter";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  const id = Number(req.query.id);

  const contract = await prisma.contract.findUniqueOrThrow({
    where: {
      id,
    },
    include: {
      invoices: true,
      Modality: true,
      renewals: true,
    },
  });

  function getDueDate(contract: any) {
    if (contract.renewals > 0) {
      new Date(
        Math.max.apply(
          null,
          contract.renewals.map((item: any) => {
            return formatDateStringToBrDate(item.due_date);
          })
        )
      );
    }
    return formatDateStringToBrDate(contract.due_date);
  }

  function getNextInvoiceDate(contract: any) {
    if (contract.invoices > 0) {
      new Date(
        Math.max.apply(
          null,
          contract.renewals.map((item: any) => {
            return formatDateStringToBrDate(item.next_invoice);
          })
        )
      );
    }
    return formatDateStringToBrDate(contract.first_invoice_date);
  }

  function getInitialDate(date: string | Date) {
    return formatDateStringToBrDate(date);
  }

  res.status(200).json(contract);
}
