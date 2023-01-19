import React from "react";
import { useForm } from "react-hook-form";
import { Text } from "../../../components/Text";
import { TextInput } from "../../../components/TextInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../../components/Button";
import { inputDateValidation } from "../../../utils/preprocessFormValidations";
import { api } from "../../../lib/axios";
import { AxiosError } from "axios";

const contractSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Insira um nome." })
    .transform((name) => name.toLowerCase()),
  number: z.preprocess(
    (a) => parseInt(a as string, 10),
    z.number().positive().max(100),
    z.number().positive({ message: "o numero deve ser maior que zero" })
  ),
  initialDate: z.preprocess(inputDateValidation, z.date()),
  modalityId: z.string(),
  dueDate: z.preprocess(inputDateValidation, z.date()),
  firstInvoiceDate: z.preprocess(inputDateValidation, z.date()),
});

type ContractFormData = z.infer<typeof contractSchema>;

export function NewContractForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<ContractFormData>({
    resolver: zodResolver(contractSchema),
  });

  async function createContractSubmit(data: ContractFormData) {
    try {
      await api.post("/api/contract/create", {
        name: data.name,
        number: data.number,
        initialDate: data.initialDate,
        modalityId: data.modalityId,
        dueDate: data.dueDate,
        firstInvoiceDate: data.firstInvoiceDate,
      });
    } catch (err) {
      if (err instanceof AxiosError && err?.response?.data?.message) {
        alert(err.response.data.message);
        return;
      }
    }
  }

  return (
    <form className="mt-3" onSubmit={handleSubmit(createContractSubmit)}>
      <label htmlFor="name" className="flex flex-col">
        <Text size="sm">Nome :</Text>
        <TextInput.Root>
          <input type="text" id="name" placeholder="" {...register("name")} />
        </TextInput.Root>
        {errors.name && (
          <Text variant="error" size="sm">
            {errors.name.message}
          </Text>
        )}
      </label>
      <div className="flex items-end gap-2">
        <label htmlFor="number" className="flex flex-col flex-1">
          <Text size="sm">Número :</Text>
          <TextInput.Root>
            <input
              type="number"
              id="number"
              placeholder=""
              {...register("number")}
            />
          </TextInput.Root>
        </label>
        <label htmlFor="initialDate" className="flex flex-col">
          <Text size="sm">Data Inicial :</Text>
          <TextInput.Root>
            <input
              className="filter"
              type="date"
              id="initialDate"
              placeholder=""
              {...register("initialDate")}
            />
          </TextInput.Root>
        </label>
        <select
          className="bg-gray-700 py-3 rounded-md w-auto  text-center text-gray-100 outline-none uppercase focus:ring-2 focus:ring-blue-600"
          {...register("modalityId")}
        >
          <Text asChild>
            <option value="1">dispensa</option>
          </Text>
          <Text asChild>
            <option value="2">convite</option>
          </Text>
          <Text asChild>
            <option value="3">pregão</option>
          </Text>
        </select>
      </div>
      <ul>
        {errors.number && (
          <Text asChild variant="error" size="sm">
            <li>{errors.number.message}</li>
          </Text>
        )}
        {errors.initialDate && (
          <Text asChild variant="error" size="sm">
            <li>{errors.initialDate.message}</li>
          </Text>
        )}
      </ul>
      <div className="flex gap-2">
        <label htmlFor="dueDate" className="flex flex-col flex-1">
          <Text size="sm">Vencimento :</Text>
          <TextInput.Root>
            <input
              type="date"
              id="dueDate"
              placeholder=""
              {...register("dueDate")}
            />
          </TextInput.Root>
        </label>
        <label htmlFor="firstInvoiceDate" className="flex flex-col flex-1">
          <Text size="sm">Primeira Fatura :</Text>
          <TextInput.Root>
            <input
              type="date"
              id="firstInvoiceDate"
              placeholder=""
              {...register("firstInvoiceDate")}
            />
          </TextInput.Root>
        </label>
      </div>
      <ul>
        {errors.dueDate && (
          <Text asChild variant="error" size="sm">
            <li>{errors.dueDate.message}</li>
          </Text>
        )}
        {errors.firstInvoiceDate && (
          <Text asChild variant="error" size="sm">
            <li>{errors.firstInvoiceDate.message}</li>
          </Text>
        )}
      </ul>
      <Button type="submit" disabled={isSubmitting} className="w-full mt-2">
        Cadastrar
      </Button>
    </form>
  );
}
