import { useState } from "react";
import { Modal } from "./components/Modal";
import { Button } from "./components/Button";
import { Tool, useApi } from "./context/ApiContext";
import { Card } from "./components/Card";
import { EditModal } from "./components/EditModal";

export function App() {
  const { tools, deleteTool, updateTool } = useApi();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState<boolean>(false);
  const [editingTool, setEditingTool] = useState<Tool | null>(null);

  const openEditModal = (tool: Tool) => {
    setEditingTool(tool);
    setIsOpenEditModal(true);
    setIsOpenModal(false);
  };

  const handleReservation = async (toolId: number) => {
    console.log("Reservando ferramenta com ID:", toolId);

    const toolToReserve = tools.find((tool) => tool.id === toolId);

    if (toolToReserve) {
      if (toolToReserve.status === "Disponível") {
        toolToReserve.status = "Reservado";
        await updateTool(toolId, toolToReserve);
        console.log("Ferramenta reservada com sucesso!");
      } else {
        console.log("A ferramenta já está reservada.");
      }
    } else {
      console.log("Ferramenta não encontrada.");
    }
  };

  return (
    <div className="min-h-screen bg-zinc-900 p-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white">Lista de ferramentas</h1>

        <Button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={() => setIsOpenModal(true)}
        >
          Adicionar ferramenta
        </Button>
      </div>

      <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} />
      <EditModal
        toolToEdit={editingTool}
        isOpen={isOpenEditModal}
        onClose={() => setIsOpenEditModal(false)}
      />
      <div className="mt-4 max-w-7xl mx-auto grid grid-cols-3 gap-4">
        {tools.map((tool) => (
          <Card
            key={tool.id}
            id={Number(tool.id)}
            name={tool.name}
            description={tool.description}
            status={tool.status}
            collectionDate={new Date(tool.collectionDate).toLocaleDateString(
              "pt-BR"
            )}
            returnDate={new Date(tool.returnDate).toLocaleDateString("pt-BR")}
            mechanic={tool.mechanic}
            onDelete={() => deleteTool(Number(tool.id))}
            onEdit={() => openEditModal(tool)}
            onReserve={() => handleReservation(Number(tool.id))}
          />
        ))}
      </div>
    </div>
  );
}
