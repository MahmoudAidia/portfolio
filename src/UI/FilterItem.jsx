import "./FilterItem.scss";

function FilterItem({ text, setFilter, filter }) {
  return (
    <span
      className="filterItem"
      onClick={() => {
        setFilter(text);
      }}
      style={
        filter === text
          ? {
              backgroundColor: `hsl(var(--accent-color))`,
              color: "#fff",
            }
          : {}
      }
    >
      {text}
    </span>
  );
}

export default FilterItem;
