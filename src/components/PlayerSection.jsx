import PropTypes from "prop-types";

function PlayerSection({ tableSection }) {
  return (
    <section>
      <h2>Jugadores</h2>
      {
        tableSection.map((name, index) => {
          return (
            <div key={index}>
              <input type="text" />
            </div>
          );
        })
      }
    </section>
  );
}

PlayerSection.propTypes = {
  tableSection: PropTypes.array.isRequired
};

export default PlayerSection;