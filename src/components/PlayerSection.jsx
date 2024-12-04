import PropTypes from "prop-types";

function PlayerSection({ tableSection, title }) {
  return (
    <section className="flex justify-between gap-2">
      <h2>{title}</h2>
      {
        tableSection.map((name, index) => {
          return (
            <div key={index}>
              <input className="size-7 rounded-sm text-black" type="text" />
            </div>
          );
        })
      }
    </section>
  );
}

PlayerSection.propTypes = {
  tableSection: PropTypes.array.isRequired,
  title: PropTypes.string
};

export default PlayerSection;