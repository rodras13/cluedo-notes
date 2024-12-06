import { createContext } from "react";
import { TABLE_DATA } from "../assets/cluedo-note";

// Creamos el contexto, que es un valor por defecto, es decir,
// que son los datos vacíos de la tabla
const TableDataContext = createContext(TABLE_DATA);

// Creamos el provider de ese contexto
export function TableDataProvider({ children }) {
  return (
    <TableDataContext.Provider value={{}} />
  );
}