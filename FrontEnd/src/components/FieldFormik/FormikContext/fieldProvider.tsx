import React, { useState } from "react";
import type { ReactNode } from "react";
import { FieldContext } from "./fieldContext";

// Definindo o tipo do provider
interface FieldProviderProps {
  children: ReactNode;
}

// Provider para envolver os componentes que precisam acessar o contexto
export const FieldProvider: React.FC<FieldProviderProps> = ({ children }) => {
  const [values, setValues] = useState<Record<string, unknown>>({});

  // Função para atualizar os valores
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  return (
    <FieldContext.Provider value={{ values, handleChange }}>
      {children}
    </FieldContext.Provider>
  );
};
