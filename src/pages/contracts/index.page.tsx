import Head from "next/head";
import { MagnifyingGlass, Medal, PencilSimpleLine, X } from "phosphor-react";
import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { Text } from "../../components/Text";
import { TextInput } from "../../components/TextInput";
import { api } from "../../lib/axios";
import { NewContractForm } from "./components/NewContractForm";
import { Heading } from "../../components/Heading";
import { Modal } from "../../components/Modal";
import Link from "next/link";

interface ContractsTable {
  id: number;
  name: string;
  number: number;
  modality: string;
  initialDate: string;
  dueDate: string;
  nextInvoice: string;
}

export default function Contracts() {
  async function getContractsData() {
    const data = await api("contracts").then((result) => result.data);
    setTableDAta(data);
  }

  const [tableData, setTableDAta] = useState<ContractsTable[]>([]);

  useEffect(() => {
    getContractsData();
  }, []);

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
                <input
                  id="search"
                  name="search"
                  placeholder="Procurar contrato"
                />
              </TextInput.Root>
              <Modal.Root>
                <Button asChild className="w-48">
                  <Modal.Trigger type="button">Novo Contrato</Modal.Trigger>
                </Button>
                <Modal.Content>
                  <Heading size="md" className="uppercase text-center">
                    novo contrato
                  </Heading>
                  <NewContractForm />
                </Modal.Content>
              </Modal.Root>
            </div>
          </label>
        </div>

        <main className="py-4">
          <div className="flex min-w-full shadow rounded-lg overflow-hidden overflow-x-auto">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-2 py-3 border-b-2 border-gray-600 bg-gray-800 text-left font-semibold  uppercase tracking-wider">
                    <Text size="sm">Cliente</Text>
                  </th>
                  <th className="px-2 py-3 border-b-2 border-gray-600 bg-gray-800 text-left font-semibold  uppercase tracking-wider">
                    <Text size="sm">Numero</Text>
                  </th>
                  <th className="px-2 py-3 border-b-2 border-gray-600 bg-gray-800 text-left font-semibold  uppercase tracking-wider">
                    <Text size="sm">Modalidade</Text>
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
                  <th className="px-2 py-3 border-b-2 border-gray-600 bg-gray-800 text-center font-semibold  uppercase tracking-wider ">
                    <Text size="sm">Detalhes</Text>
                  </th>
                </tr>
              </thead>
              <tbody>
                {!tableData ? (
                  <p>loading...</p>
                ) : (
                  tableData.map((contract) => {
                    return (
                      <tr key={contract.id}>
                        <td className="px-2 py-2 border-b border-gray-600 bg-gray-700">
                          <Text size="sm">{contract.name}</Text>
                        </td>
                        <td className="px-2 py-2 border-b border-gray-600 bg-gray-700">
                          <Text size="sm">{contract.number}</Text>
                        </td>
                        <td className="px-2 py-2 border-b border-gray-600 bg-gray-700">
                          <Text size="sm">{contract.modality}</Text>
                        </td>
                        <td className="px-2 py-2 border-b border-gray-600 bg-gray-700">
                          <Text size="sm">{contract.initialDate}</Text>
                        </td>
                        <td className="px-2 py-2 border-b border-gray-600 bg-gray-700">
                          <Text size="sm">{contract.dueDate}</Text>
                        </td>
                        <td className="px-2 py-2 border-b border-gray-600 bg-gray-700">
                          <Text size="sm">{contract.nextInvoice}</Text>
                        </td>
                        <td className="px-2 py-2 border-b border-gray-600 bg-gray-700 text-center">
                          <Link href={`/contracts/${contract.id}`}>
                            <Button size="small">
                              <PencilSimpleLine />
                            </Button>
                          </Link>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </>
  );
}

// export async function getServerSideProps() {
//   const dashboardData = await api("dashboard").then((result) => result.data);

//   console.log(dashboardData);

//   return {
//     props: { dashboardData },
//   };
// }
