import { Button, TextField } from "@mui/material";

export const AddCity = (props) => {
  return (
    <div className="add-city">
      <TextField
        id="outlined-basic"
        label="City"
        variant="outlined"
        value={props.value}
        onChange={props.onChange}
      />
      <Button className="city-btn" onClick={props.onClick}>
        Click
      </Button>
    </div>
  );
};
