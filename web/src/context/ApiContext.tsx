import axios from "axios";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export interface Tool {
  id?: number;
  name: string;
  description: string;
  status: string;
  isReserved: boolean;
  collectionDate: string;
  returnDate: string;
  mechanic: string;
}

interface ApiContextType {
  tools: Tool[];
  loading: boolean;
  fetchTools: () => Promise<void>;
  createTool: (toolData: Tool) => Promise<void>;
  updateTool: (toolId: number, toolData: Tool) => Promise<void>;
  deleteTool: (toolId: number) => Promise<void>;
}

const ApiContext = createContext<ApiContextType | null>(null);

export function useApi() {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error("useApi must be used within an ApiProvider");
  }
  return context;
}

export function ApiProvider({ children }: { children: ReactNode }) {
  const [tools, setTools] = useState<Tool[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const API_BASE_URL = "http://localhost:3333";

  async function fetchTools() {
    setLoading(true);

    try {
      const response = await axios.get<Tool[]>(`${API_BASE_URL}/tools`);
      setTools(response.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  const createTool = async (toolData: Tool) => {
    try {
      await axios.post(`${API_BASE_URL}/create`, toolData);
      await fetchTools();
      console.log(toolData);
    } catch (error) {
      console.log(error);
    }
  };

  const updateTool = async (toolId: number, toolData: Tool) => {
    try {
      const updatedToolData = {
        ...toolData,
        status: toolData.isReserved ? "Reservado" : "Disponível",
      };

      await axios.put(`${API_BASE_URL}/tools/${toolId}`, updatedToolData);
      await fetchTools();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTool = async (toolId: number) => {
    try {
      await axios.delete(`${API_BASE_URL}/delete/${toolId}`);
      await fetchTools();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTools();
  }, []);

  return (
    <ApiContext.Provider
      value={{ tools, loading, fetchTools, createTool, updateTool, deleteTool }}
    >
      {children}
    </ApiContext.Provider>
  );
}
