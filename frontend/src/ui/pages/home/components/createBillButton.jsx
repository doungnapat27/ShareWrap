import React from "react";
import { Button, Typography } from "@mui/material";

import NoteStackAdd from "../../../assets/note-stack-add.svg";
import { Link } from "react-router-dom";

function CreateBill() {
  return (
    <Button
      component={Link}
      to={'/splitting-bill'}
      variant="contained"
      fullWidth
      sx={{
        justifyContent: "space-between",
        padding: "33px 20px",
        borderRadius: "10px",
        marginBottom: "30px",
        backgroundColor: "rgba(152, 30, 37, 0.80)",
        "&:hover": {
          backgroundColor: "rgba(152, 30, 37, 0.75)",
        },
      }}
    >
      <Typography
        variant='h4'
      >
        Create bill
      </Typography>
      <img src={NoteStackAdd} alt="note-stack-add" />
    </Button>
  );
}

export default CreateBill;
