import Head from "next/head";
import { Box } from "../components/Box";
import { Heading } from "../components/Heading";
import { Text } from "../components/Text";
import { TextInput } from "../components/TextInput";
import { Envelope, Lock } from "phosphor-react";
import { Button } from "../components/Button";

export default function Home() {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div
        className="
        w-screen
        h-screen
        bg-gray-900
        flex       
        items-center
        justify-center   
        text-gray-100"
      >
        <aside className="flex flex-col gap-8 max-w-md">
          <Heading size="xl">GCASPP ADMIN</Heading>
          <Text size="xxl">Faça seu login na plataforma</Text>
        </aside>
        <Box>
          <form className="flex flex-col gap-4 items-stretch w-96">
            <label htmlFor="email" className="flex flex-col gap-3">
              <Text className="font-semibold">Endereço de e-mail</Text>
              <TextInput.Root>
                <TextInput.Icon>
                  <Envelope />
                </TextInput.Icon>
                <TextInput.Input
                  type="email"
                  id="email"
                  placeholder="Digite seu e-mail"
                />
              </TextInput.Root>
            </label>
            <label htmlFor="password" className="flex flex-col gap-3">
              <Text className="font-semibold">Sua senha</Text>
              <TextInput.Root>
                <TextInput.Icon>
                  <Lock />
                </TextInput.Icon>
                <TextInput.Input
                  type="password"
                  id="password"
                  placeholder="******"
                />
              </TextInput.Root>
            </label>
            <Button>Entrar</Button>
          </form>
        </Box>
      </div>
    </>
  );
}
