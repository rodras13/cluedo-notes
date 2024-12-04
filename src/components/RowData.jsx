import PropTypes from "prop-types";

function RowData({ tableSection, title }) {
  return (
    <section className="flex flex-row justify-between gap-2 text-wrap">
      <h2 className="text-sm">{title}</h2>
      <div className="flex flex-row gap-2">
        {
          tableSection.map((name, index) => {
            return (
              <div key={index} className="size-7 bg-white flex justify-center items-center">
                {name}
              </div>
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