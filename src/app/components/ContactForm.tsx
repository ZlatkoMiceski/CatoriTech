"use client";
import { Button, Grid, TextareaAutosize, Typography } from "@mui/material";
import TextInputCustom from "./TextInputCustom";

const ContactForm = () => {
  const handleSubmit = () => {};
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "10px 50px",
        gap: "15px",
      }}
    >
      <Typography variant="h3">Contact Us</Typography>
      <form
        onSubmit={handleSubmit}
        style={{ width: "70%" }}
      >
        <Grid container direction="column" gap={3}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <TextInputCustom labelText="Name" />
            </Grid>
            <Grid item xs={6}>
              <TextInputCustom labelText="Email Address" />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <TextInputCustom labelText="Address" />
            </Grid>
          </Grid>
          <TextInputCustom labelText="Message" />
          <Button  type="submit" variant="contained">
          Submit
        </Button>
        </Grid>

        
      </form>
    </div>
  );
};

export default ContactForm;
