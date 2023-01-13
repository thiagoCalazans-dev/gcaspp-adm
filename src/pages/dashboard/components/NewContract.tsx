import React from "react";
import { useForm } from "react-hook-form";
import { Box } from "../../../components/Box";
import { Heading } from "../../../components/Heading";
import { Text } from "../../../components/Text";
import { TextInput } from "../../../components/TextInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../../components/Button";

const contractSchema = z.object({
  name: z
    .string()
    .min(3, { message: "O usuário precisa ter pelo menos 3 letras." })
    .transform((name) => name.toLowerCase()),
  number: z.string().min(1, { message: "o numero deve ser maior que 0" }),
  modalityId: z.string(),
  initialDate: z.string(),
  dueDate: z.string(),
  firstInvoiceDate: z.string(),
});

type ContractFormData = z.infer<typeof contractSchema>;

export function NewContract() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<ContractFormData>({
    resolver: zodResolver(contractSchema),
  });

  function createContractSubmit(data: ContractFormData) {
    console.log(data);
  }

  return (
    <main className="flex flex-col justify-center items-center">
      <Box>
        <Heading size="md" className="uppercase text-center">
          novo contrato
        </Heading>
        <form className="mt-3" onSubmit={handleSubmit(createContractSubmit)}>
          <label htmlFor="name" className="flex flex-col">
            <Text size="sm">Nome :</Text>
            <TextInput.Root>
              <input
                type="text"
                id="name"
                placeholder=""
                {...register("name")}
              />
            </TextInput.Root>
          </label>
          <label htmlFor="number" className="flex flex-col">
            <Text size="sm">Número :</Text>
            <TextInput.Root>
              <input
                type="text"
                id="number"
                placeholder=""
                {...register("number")}
              />
            </TextInput.Root>
          </label>
          <label htmlFor="modalityId" className="flex flex-col">
            <Text size="sm">Modalidade :</Text>
            <TextInput.Root>
              <input
                type="text"
                id="modalityId"
                placeholder=""
                {...register("modalityId")}
              />
            </TextInput.Root>
          </label>
          <label htmlFor="initialDate" className="flex flex-col">
            <Text size="sm">Data Inicial :</Text>
            <TextInput.Root>
              <input
                type="text"
                id="initialDate"
                placeholder=""
                {...register("initialDate")}
              />
            </TextInput.Root>
          </label>
          <label htmlFor="dueDate" className="flex flex-col">
            <Text size="sm">Vencimento :</Text>
            <TextInput.Root>
              <input
                type="text"
                id="dueDate"
                placeholder=""
                {...register("dueDate")}
              />
            </TextInput.Root>
          </label>
          <label htmlFor="firstInvoiceDate" className="flex flex-col">
            <Text size="sm">Primeira Fatura :</Text>
            <TextInput.Root>
              <input
                type="text"
                id="firstInvoiceDate"
                placeholder=""
                {...register("firstInvoiceDate")}
              />
            </TextInput.Root>
          </label>
          <Button type="submit" disabled={isSubmitting} className="w-full mt-2">
            Cadastrar
          </Button>
        </form>
      </Box>
    </main>
  );
}
