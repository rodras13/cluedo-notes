import PropTypes from "prop-types";
import { SYMBOLS } from "../assets/constants";
import { useState, useRef } from "react";
import Box from "./Box";

function RowData({ tableSection, title }) {
  // Guardamos el valor que corresponda al click 
  let count = useRef(0);
  const [emoji, setEmoji] = useState(SYMBOLS[count.current]);

  // Es muy importante guardar la prop en un estado para no mutarla
  const [arraySymbol, setArraySymbol] = useState(tableSection);

  // Función que asigna distintos valores a los div
  const updateSymbol = (index) => {
    // Hay que guardar el array en otro para actualizarlo salvando la asincronía del useState
    const newArraySymbol = [...arraySymbol];
    newArraySymbol[index] = "🐶";
    setArraySymbol(newArraySymbol);
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