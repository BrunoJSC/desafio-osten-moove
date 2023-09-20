import { useState } from "react";

interface CardProps {
  id: number;
  name: string;
  description: string;
  status: string;
  collectionDate: string;
  returnDate: string;
  mechanic: string;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
  onReserve: (id: number) => void;
}

export function Card({
  id,
  name,
  description,
  status,
  collectionDate,
  returnDate,
  mechanic,
  onDelete,
  onEdit,
  onReserve,
}: CardProps) {
  const [reserveButtonText, setReserveButtonText] = useState<string>(
    status === "Disponível" ? "Reservado" : "Disponível"
  );

  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-4 text-white">
      <div className="mb-4">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-300">{description}</p>
      </div>
      <div className="text-gray-200">
        <p>Coleta: {collectionDate}</p>
        <p>Devolução: {returnDate}</p>
        <p>Mecânico: {mechanic}</p>
      </div>
      <div className="mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={() => onEdit(id)}
        >
          Editar
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={() => onDelete(id)}
        >
          Excluir
        </button>
        <button
          className={`${
            status === "Disponível" ? "bg-green-500" : "bg-red-900"
          } text-white font-bold py-2 px-4 rounded`}
          onClick={() => {
            onReserve(id);

            setReserveButtonText((prevText) =>
              prevText === "Disponível" ? "Reservado" : "Disponível"
            );
          }}
        >
          {reserveButtonText}
        </button>
      </div>
    </div>
  );
}
