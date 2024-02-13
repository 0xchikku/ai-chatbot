import { TextField } from "@mui/material";

type Props = {
  label: string,
  name: string,
  type: string
}

function CustomizedInput(props: Props) {
  const { label, name, type } = props;

  return (
    <TextField margin="normal" name={name} label={label} type={type} InputLabelProps={{ style: { color: "black" } }} inputProps={{ style: { width: "400px", borderRadius: 10, fontSize: 20 } }} />
  )
}

export default CustomizedInput;