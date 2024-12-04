import PropTypes from "prop-types";

function PlayerSection({ tableSection, title }) {
  return (
    <section className="flex justify-between gap-2 w-full">
      <h2>{title}</h2>
      <div className="flex gap-2">
        {
          tableSection.map((name, index) => {
            return (
              <div key={index}>
                <input className="size-7 rounded-sm text-black" type="text" />
              </div>
            );
          })
        }
      </div>
    </section>
  );
}

PlayerSection.propTypes = {
  tableSection: PropTypes.array.isRequired,
  title: PropTypes.string
};

export default PlayerSection;