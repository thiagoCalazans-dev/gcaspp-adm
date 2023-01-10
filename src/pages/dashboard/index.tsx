import Head from "next/head";
import { MagnifyingGlass } from "phosphor-react";
import { Button } from "../../components/Button";
import { Text } from "../../components/Text";
import { TextInput } from "../../components/TextInput";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="max-w-6xl m-auto">
        <div className="flex gap-2">
          <label htmlFor="search" className="flex flex-1 flex-col gap-1">
            <Text>Selecione um contrato:</Text>
            <TextInput.Root>
              <TextInput.Icon>
                <MagnifyingGlass />
              </TextInput.Icon>
              <TextInput.Input id="search" placeholder="Procurar contrato" />
            </TextInput.Root>
          </label>
          <Button>Novo Contrato</Button>
        </div>
      </div>
    </>
  );
}
