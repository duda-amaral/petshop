import React, { useState } from "react";
import axios from "axios";
import { format } from "date-fns";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "./ui/label";

interface ResponseData {
  nomeDoPetshop: string;
  precoTotal: string;
}

const FormSection: React.FC = () => {
  const [data, setData] = useState<string>("");
  const [quantidadeCaesPequenos, setQuantCaesPequenos] = useState<number>(0);
  const [quantidadeCaesGrandes, setQuantCaesGrandes] = useState<number>(0);
  const [response, setResponse] = useState<ResponseData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const selectedDate = new Date(data);
    const adjustedDate = new Date(
      selectedDate.getTime() + selectedDate.getTimezoneOffset() * 60000,
    );
    const formattedDate = format(adjustedDate, "dd/MM/yyyy");
    console.log("Enviando dados:", {
      formattedDate,
      quantidadeCaesPequenos,
      quantidadeCaesGrandes,
    });

    try {
      const res = await axios.get<ResponseData>(
        "https://melhor-petshop.onrender.com/api/melhor-petshop",
        {
          params: {
            data: formattedDate,
            quantidadeCaesPequenos,
            quantidadeCaesGrandes,
          },
        },
      );
      setResponse(res.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(
          error.message ||
            "Ocorreu um erro ao buscar o melhor petshop. Tente novamente mais tarde.",
        );
      } else {
        setError(
          "Ocorreu um erro ao buscar o melhor petshop. Tente novamente mais tarde.",
        );
      }
      console.error("Erro ao buscar melhor petshop:", error);
    }
  };

  return (
    <section className="w-full bg-muted py-12 md:py-24 lg:py-32">
      <div className="container flex flex-col items-center justify-center gap-8 px-4 md:px-6">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Descubra o melhor Pet Shop!
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            Insira os dados necessários para que o cálculo seja realizado.
          </p>
        </div>
        <form
          className="w-full max-w-md p-8 rounded-lg shadow-md"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label>Data:</Label>
              <Input
                type="date"
                value={data}
                onChange={(e) => setData(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Quantidade de cães grandes:</Label>
              <Input
                type="number"
                value={quantidadeCaesGrandes}
                onChange={(e) => setQuantCaesGrandes(Number(e.target.value))}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Quantidade de cães pequenos:</Label>
              <Input
                type="number"
                value={quantidadeCaesPequenos}
                onChange={(e) => setQuantCaesPequenos(Number(e.target.value))}
                required
              />
            </div>
            <Button type="submit" className="self-start">
              Enviar
            </Button>
          </div>
        </form>
        {response && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold">Melhor Petshop</h3>
            <p>
              <strong>Nome:</strong> {response.nomeDoPetshop}
            </p>
            <p>
              <strong>Preço Total:</strong> {response.precoTotal}
            </p>
          </div>
        )}
        {error && (
          <div className="mt-8 text-red-600">
            <p>{error}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FormSection;
