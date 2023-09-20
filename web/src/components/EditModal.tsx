import { FormEvent, useState, useEffect } from "react";
import { Input } from "./Input";
import { useApi } from "../context/ApiContext";
import { Button } from "./Button";
import { Tool } from "../context/ApiContext"; // Certifique-se de importar corretamente o tipo Tool
import { Textarea } from "./Textarea.";

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  toolToEdit: Tool | null;
}

export function EditModal({ isOpen, onClose, toolToEdit }: EditModalProps) {
  const { updateTool } = useApi();
  const [editedTool, setEditedTool] = useState<Tool | null>(null);

  useEffect(() => {
    // Quando a ferramenta a ser editada muda, atualizamos o estado
    setEditedTool(toolToEdit);
  }, [toolToEdit]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (editedTool) {
      await updateTool(Number(editedTool.id), editedTool);
      onClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 overflow-y-auto ${isOpen ? "block" : "hidden"}`}
    >
      <div className="modal-backdrop fixed inset-0 -z-40 bg-gray-500 bg-opacity-75 transition-opacity" />
      <div className="modal-container bg-gray-900 w-96 mx-auto rounded shadow-lg z-50 p-4 mt-5">
        <header className="flex items-center justify-between p-4 border-b">
          <h3 className="text-xl font-bold text-white">Editar ferramenta</h3>
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
          {editedTool && (
            <>
              <Input
                type="text"
                label="Nome"
                value={editedTool.name}
                onChange={(event) =>
                  setEditedTool({
                    ...editedTool,
                    name: event.target.value,
                  })
                }
              />

              <Textarea
                label="Descrição"
                value={editedTool.description}
                onChange={(event) =>
                  setEditedTool({
                    ...editedTool,
                    description: event.target.value,
                  })
                }
              />
            </>
          )}

          <Button
            type="submit"
            className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            Salvar
          </Button>
        </form>
      </div>
    </div>
  );
}
