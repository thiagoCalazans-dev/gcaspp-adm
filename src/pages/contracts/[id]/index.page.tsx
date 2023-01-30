import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Box } from "../../../components/Box";
import { Heading } from "../../../components/Heading";
import { Text } from "../../../components/Text";
import { api } from "../../../lib/axios";

export default function Contract() {
  const router = useRouter();

  const params = String(router.query.id);

  const [contract, setContract] = useState({});

  async function getContract() {
    const data = await api(`contracts/${params}`).then((result) => result.data);
    setContract(data);
  }

  useEffect(() => {
    getContract();
  }, []);

  return (
    <div>
      <Heading>Contrato</Heading>
      <div>
        <Text>Cliente: </Text>
        <Text>{contract.name}</Text>
      </div>
    </div>
  );
}
