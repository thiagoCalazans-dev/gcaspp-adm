import Link from "next/link";
import { useRouter } from "next/router";
import { ArrowBendUpLeft } from "phosphor-react";
import { useEffect, useState } from "react";
import { Contract } from "../../../@types/contracts";
import { Box } from "../../../components/Box";
import { Button } from "../../../components/Button";
import { Heading } from "../../../components/Heading";
import { Text } from "../../../components/Text";
import { api } from "../../../lib/axios";
import { NewContractForm } from "../components/NewContractForm";

export default function ContractDetails() {
  const router = useRouter();

  const params = String(router.query.id);

  const [contract, setContract] = useState<Contract>({} as Contract);

  async function getContract() {
    const data = await api(`contracts/${params}`).then((result) => result.data);
    setContract(data);
  }

  console.log(contract);

  useEffect(() => {
    getContract();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Box className="flex flex-col max-w-[50rem]">
        <Link href="/contracts">
          <Button variant="secondary" size="small">
            <ArrowBendUpLeft />
          </Button>
        </Link>
        <Heading size="xl" className="self-center">
          Contrato nº{contract.number} - {contract.name}
        </Heading>
      </Box>
    </div>
  );
}
