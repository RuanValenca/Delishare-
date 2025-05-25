import { createContext } from "react";

// Definindo o tipo do contexto
export interface FieldContextProps {
  values: Record<string, unknown>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// Criando o contexto para o FieldContext
export const FieldContext = createContext<FieldContextProps | undefined>(
  undefined
);
