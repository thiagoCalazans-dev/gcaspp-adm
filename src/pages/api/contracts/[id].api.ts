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

  const result = {
    id: contract.id,
    name: contract.name,
    number: contract.number,
    modality: {
      id: contract.Modality.id,
      name: contract.Modality.name,
    },
    initialDate: getInitialDate(contract.initial_date),
    dueDate: getNextInvoiceDate(contract),
    nextInvoice: getDueDate(contract),
    renewals: contract.renewals.map((renewal) => {
      return {
        id: renewal.id,
        contractId: renewal.contract_id,
        dueDate: renewal.due_date,
        initialDate: renewal.initial_date,
        number: renewal.number,
      };
    }),
    invoices: contract.invoices.map((invoice) => {
      return {
        id: invoice.id,
        contractId: invoice.contractId,
        description: invoice.description,
        nextValue: invoice.net_value,
        nextInvoice: invoice.next_invoice,
        number: invoice.number,
        paymentDate: invoice.payment_date,
        referenceDate: invoice.reference_date,
        taxes: invoice.taxes,
        value: invoice.value,
      };
    }),
  };

  res.status(200).json(result);
}
