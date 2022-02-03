import { Button } from "@mui/material";

export const AddCity = (props) => {
  return (
    <div className="add-city">
      <input
        className="city-name"
        placeholder="City Name"
        type="text"
        name="city"
        value={props.value}
        onChange={props.onChange}
      />
      <Button className="city-btn" onClick={props.onClick}>
        Click
      </Button>
    </div>
  );
};
