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
  number: z.number().min(1, { message: "o numero deve ser maior que 0" }),
  modalityID: z.number(),
  initialDate: z.date(),
  due_date: z.date(),
  first_invoice_date: z.date(),
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

  async function createContractSubmit(data: ContractFormData) {
    console.log(data);
    // try {
    //   await api.post('/users', {
    //     name: data.name,
    //     username: data.username,
    //   })

    //   await router.push('/register/connect-calendar')
    // } catch (err) {
    //   if (err instanceof AxiosError && err?.response?.data?.message) {
    //     alert(err.response.data.message)
    //     return
    //   }

    //   console.error(err)
    // }
  }

  return (
    <main className="flex flex-col justify-center items-center">
      <Box>
        <Heading size="md" className="uppercase">
          novo contrato
        </Heading>
        <form className="mt-3" onSubmit={handleSubmit(createContractSubmit)}>
          <label htmlFor="name" className="flex flex-col">
            <Text size="sm">Nome :</Text>
            <TextInput.Root>
              <TextInput.Input
                type="text"
                id="name"
                placeholder=""
                {...register("name")}
              />
            </TextInput.Root>
          </label>
          <label htmlFor="name" className="flex flex-col">
            <Text size="sm">Nome :</Text>
            <TextInput.Root>
              <TextInput.Input type="text" id="name" placeholder="" />
            </TextInput.Root>
          </label>
          <label htmlFor="name" className="flex flex-col">
            <Text size="sm">Nome :</Text>
            <TextInput.Root>
              <TextInput.Input type="text" id="name" placeholder="" />
            </TextInput.Root>
          </label>
          <label htmlFor="name" className="flex flex-col">
            <Text size="sm">Nome :</Text>
            <TextInput.Root>
              <TextInput.Input type="text" id="name" placeholder="" />
            </TextInput.Root>
          </label>
          <label htmlFor="name" className="flex flex-col">
            <Text size="sm">Nome :</Text>
            <TextInput.Root>
              <TextInput.Input type="text" id="name" placeholder="" />
            </TextInput.Root>
          </label>
          <label htmlFor="name" className="flex flex-col">
            <Text size="sm">Nome :</Text>
            <TextInput.Root>
              <TextInput.Input type="text" id="name" placeholder="" />
            </TextInput.Root>
          </label>
          <Button>Cadastrar</Button>
        </form>
      </Box>
    </main>
  );
}
