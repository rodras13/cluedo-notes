import PropTypes from "prop-types";
import { SYMBOLS } from "../assets/constants";
import { useState } from "react";
import Box from "./Box";
import { TABLE_DATA } from "../assets/cluedo-note";

function RowData({ tableSection, title }) {
  // Es muy importante guardar la prop en un estado para no mutarla
  const [arraySymbol, setArraySymbol] = useState(tableSection);
  // Creamos otro estado para guardar los datos iniciales
  const updatedTableData = TABLE_DATA;

  // Creamos una función que vaya cambiando los emojis
  const switchEmoji = (emoji) => {
    // Guardamos el emoji en cuestión y su correspondencia con la constante
    const emojiIndex = SYMBOLS.indexOf(emoji);

    // Si es el último, pasa al primero
    if (emojiIndex === (SYMBOLS.length - 1)) {
      return SYMBOLS[0];
    }
    return SYMBOLS[emojiIndex + 1];
  };

  // Función para actualizar el dato en la tabla
  const updateNotes = (newArraySymbol, title, index) => {
    for (const section in updatedTableData) {
      updatedTableData[section].forEach((element) => {
        if (element.name === title) {
          element.data[index] = newArraySymbol[index];
        }
      });
    }
    localStorage.setItem("table", updatedTableData);
    console.log(updatedTableData);
    console.log(TABLE_DATA);
  };

  // Función que asigna distintos valores a los div
  const updateSymbol = (index) => {
    // Hay que guardar el array en otro para actualizarlo salvando la asincronía del useState
    const newArraySymbol = [...arraySymbol];
    newArraySymbol[index] = switchEmoji(newArraySymbol[index]);
    setArraySymbol(newArraySymbol);
    updateNotes(newArraySymbol, title, index);
  };

  return (
    <section className="flex flex-row justify-between gap-2 text-wrap">
      <h2 className="text-sm">{title}</h2>
      <div className="flex flex-row gap-2">
        {
          arraySymbol.map((name, index) => {
            return (
              <Box key={index} index={index} updateSymbol={updateSymbol} >
                {name}
              </Box>
            );
          })
        }
      </div>
    </section>
  );
}

RowData.propTypes = {
  tableSection: PropTypes.array.isRequired,
  title: PropTypes.string
};

export default RowData;