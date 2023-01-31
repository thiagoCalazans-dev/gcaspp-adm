export interface Contract {
  name: string;
  modality: Modality;
  due_date: string;
  firstInvoiceDate: string;
  id: number;
  initialDate: string;
  invoices: Invoice[];
  number: number;
  renewals: Renewal[];
}

export interface Renewal {
  contractID: number;
  dueDate: string;
  id: number;
  initialate: string;
  number: number;
}
export interface Modality {
  id: number;
  name: string;
}
export interface Invoice {
  contractId: number;
  description: string;
  id: number;
  nextValue: string;
  nextInvoice: string;
  number: number;
  paymentDate: string;
  referenceDate: string;
  taxes: "number";
  value: "number";
}
