export const AddCity = (props) => {
  return (
    <div>
      <input
        className="city-name"
        placeholder="City Name"
        type="text"
        name="city"
        value={props.value}
        onChange={props.onChange}
      />
      <button className="city-btn" onClick={props.onClick}>
        Click
      </button>
    </div>
  );
};
