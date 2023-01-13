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
  // number: z.number().min(1, { message: "o numero deve ser maior que 0" }),
  // modalityID: z.number(),
  // initialDate: z.date(),
  // due_date: z.date(),
  // first_invoice_date: z.date(),
});

type ContractFormData = z.infer<typeof contractSchema>;

export function NewContract() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
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
          <Button type="submit" disabled={isSubmitting} className="w-full mt-2">
            Cadastrar
          </Button>
        </form>
      </Box>
    </main>
  );
}
