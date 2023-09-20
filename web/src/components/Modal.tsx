import { FormEvent, useState } from "react";
import { Input } from "./Input";
import { useApi } from "../context/ApiContext";
import { Button } from "./Button";
import { Textarea } from "./Textarea.";

interface ModalProps {
  onClose: () => void;
  isOpen: boolean;
}

export function Modal({ isOpen, onClose }: ModalProps) {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [collectionDate, setCollectionDate] = useState<string>("");
  const [returnDate, setReturnDate] = useState<string>("");
  const [mechanic, setMechanic] = useState<string>("");

  const { createTool } = useApi();
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await createTool({
      name,
      description,
      status,
      isReserved: false,
      collectionDate,
      returnDate,
      mechanic,
    });

    setName("");
    setDescription("");
    setStatus("");
    setCollectionDate("");
    setReturnDate("");
    setMechanic("");
  };

  return (
    <div
      className={`fixed inset-0 overflow-y-auto ${isOpen ? "block" : "hidden"}`}
    >
      <div className="modal-backdrop fixed inset-0 -z-40 bg-gray-500 bg-opacity-75 transition-opacity" />
      <div className="modal-container bg-gray-900 w-96 mx-auto rounded shadow-lg z-50 p-4 mt-5">
        <header className="flex items-center justify-between p-4 border-b">
          <h3 className="text-xl font-bold text-white">Nova Ferramenta</h3>
          <button
            className="text-gray-500 hover:text-gray-600"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </header>

        <form className="mt-5" onSubmit={handleSubmit}>
          <Input
            type="text"
            label="Nome da Ferramenta"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />

          <Textarea
            label="Descrição"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            required
          />

          <Input
            label="Data de Coleta"
            type="date"
            name="collectionDate"
            onChange={(event) => setCollectionDate(event.target.value)}
          />

          <Input
            label="Data de Devolução"
            type="date"
            value={returnDate}
            onChange={(event) => setReturnDate(event.target.value)}
            name="returnDate"
          />

          <Button
            type="submit"
            className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            Adicionar Ferramenta
          </Button>
        </form>
      </div>
    </div>
  );
}
