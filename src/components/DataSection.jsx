import PropTypes from "prop-types";
import RowData from "./RowData";

function DataSection({ dataObject, title }) {
  return (
    <section className="flex flex-col items-baseline gap-2">
      <h2>{title}</h2>
      {
        dataObject.map((dataRow, index) => {
          return (
            <RowData
              key={index}
              tableSection={dataRow.data}
              title={dataRow.name}
            />
          );
        })
      }
    </section>
  );
}

DataSection.propTypes = {
  dataObject: PropTypes.array,
  title: PropTypes.string
};

export default DataSection;