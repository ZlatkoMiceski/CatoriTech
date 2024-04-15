import { TextField } from "@mui/material";

type TextInputCustomProps = {
  labelText: string;
};

const TextInputCustom = ({ labelText }: TextInputCustomProps) => {
  return (
    <TextField
      fullWidth
      id="outlined-basic"
      label={labelText}
      variant="outlined"
      InputLabelProps={{
        style: { color: "#fff" },
      }}
      sx={{
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "white",
          },
          "&:hover fieldset": {
            borderColor: "white",
          },
          "&.Mui-focused fieldset": {
            borderColor: "white",
          },
        },
      }}
    />
  );
};

export default TextInputCustom;
