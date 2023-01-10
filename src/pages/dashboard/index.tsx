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
      <div className="max-w-7xl m-auto mt-10 px-2">
        <div className="flex gap-2">
          <label htmlFor="search" className="flex-1">
            <Text>Selecione um contrato:</Text>
            <div className="flex gap-2">
              <TextInput.Root>
                <TextInput.Icon>
                  <MagnifyingGlass />
                </TextInput.Icon>
                <TextInput.Input id="search" placeholder="Procurar contrato" />
              </TextInput.Root>
              <Button className="w-48">Novo Contrato</Button>
            </div>
          </label>
        </div>
        <main className="py-4">
          <div className="flex min-w-full shadow rounded-lg overflow-hidden overflow-x-auto">
            <table className="min-w-full leading-normal ">
              <thead>
                <tr>
                  <th className="px-2 py-3 border-b-2 border-gray-600 bg-gray-800 text-left font-semibold  uppercase tracking-wider">
                    <Text size="sm">Municipio</Text>
                  </th>
                  <th className="px-2 py-3 border-b-2 border-gray-600 bg-gray-800 text-left font-semibold  uppercase tracking-wider">
                    <Text size="sm">Contrato</Text>
                  </th>
                  <th className="px-2 py-3 border-b-2 border-gray-600 bg-gray-800 text-left font-semibold  uppercase tracking-wider">
                    <Text size="sm">Pregão</Text>
                  </th>
                  <th className="px-2 py-3 border-b-2 border-gray-600 bg-gray-800 text-left font-semibold  uppercase tracking-wider">
                    <Text size="sm">Processo</Text>
                  </th>
                  <th className="px-2 py-3 border-b-2 border-gray-600 bg-gray-800 text-left font-semibold  uppercase tracking-wider">
                    <Text size="sm">Data inicial</Text>
                  </th>
                  <th className="px-2 py-3 border-b-2 border-gray-600 bg-gray-800 text-left font-semibold  uppercase tracking-wider">
                    <Text size="sm">Aditivo nº</Text>
                  </th>
                  <th className="px-2 py-3 border-b-2 border-gray-600 bg-gray-800 text-left font-semibold  uppercase tracking-wider">
                    <Text size="sm">Data inicial</Text>
                  </th>
                  <th className="px-2 py-3 border-b-2 border-gray-600 bg-gray-800 text-left font-semibold  uppercase tracking-wider">
                    <Text size="sm">Vencimento</Text>
                  </th>
                  <th className="px-2 py-3 border-b-2 border-gray-600 bg-gray-800 text-left font-semibold  uppercase tracking-wider">
                    <Text size="sm">Proxima Fatura</Text>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-2 py-2 border-b border-gray-600 bg-gray-700">
                    <Text size="sm">Campinas</Text>
                  </td>
                  <td className="px-2 py-2 border-b border-gray-600 bg-gray-700">
                    <Text size="sm">09/2019</Text>
                  </td>
                  <td className="px-2 py-2 border-b border-gray-600 bg-gray-700">
                    <Text size="sm">0002/2019</Text>
                  </td>
                  <td className="px-2 py-2 border-b border-gray-600 bg-gray-700">
                    <Text size="sm">CAMPREV.2018.00000932-07</Text>
                  </td>
                  <td className="px-2 py-2 border-b border-gray-600 bg-gray-700">
                    <Text size="sm">02/05/2019</Text>
                  </td>
                  <td className="px-2 py-2 border-b border-gray-600 bg-gray-700 text-center">
                    <Text size="sm">11°</Text>
                  </td>
                  <td className="px-2 py-2 border-b border-gray-600 bg-gray-700">
                    <Text size="sm">02/05/2022</Text>
                  </td>
                  <td className="px-2 py-2 border-b border-gray-600 bg-gray-700">
                    <Text size="sm">02/05/2023</Text>
                  </td>
                  <td className="px-2 py-2 border-b border-gray-600 bg-gray-700">
                    <Text size="sm">02/02/2022</Text>
                  </td>
                </tr>
                <tr>
                  <td className="px-2 py-2 border-b border-gray-600 bg-gray-700">
                    <Text size="sm">Campinas</Text>
                  </td>
                  <td className="px-2 py-2 border-b border-gray-600 bg-gray-700">
                    <Text size="sm">09/2019</Text>
                  </td>
                  <td className="px-2 py-2 border-b border-gray-600 bg-gray-700">
                    <Text size="sm">0002/2019</Text>
                  </td>
                  <td className="px-2 py-2 border-b border-gray-600 bg-gray-700">
                    <Text size="sm">CAMPREV.2018.00000932-07</Text>
                  </td>
                  <td className="px-2 py-2 border-b border-gray-600 bg-gray-700">
                    <Text size="sm">02/05/2019</Text>
                  </td>
                  <td className="px-2 py-2 border-b border-gray-600 bg-gray-700  text-center">
                    <Text size="sm">11°</Text>
                  </td>
                  <td className="px-2 py-2 border-b border-gray-600 bg-gray-700">
                    <Text size="sm">02/05/2022</Text>
                  </td>
                  <td className="px-2 py-2 border-b border-gray-600 bg-gray-700">
                    <Text size="sm">02/05/2023</Text>
                  </td>
                  <td className="px-2 py-2 border-b border-gray-600 bg-gray-700">
                    <Text size="sm">02/02/2022</Text>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </>
  );
}
