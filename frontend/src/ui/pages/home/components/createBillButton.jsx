import React, {useState} from "react";
import { Button, Typography } from "@mui/material";
import NoteStackAdd from "../../../assets/note-stack-add.svg";
import CircularProgress from "@mui/material/CircularProgress";

function CreateBill() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      window.location.href = "/splitting-bill";
    }, 1000);
  };

  return (
    <Button
      onClick={handleClick}
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
      <Typography variant="h4">Create bill</Typography>
      {isLoading ? (
        <CircularProgress size={45} style={{ color: "#FFB53B"  }} />
      ) : (
        <img src={NoteStackAdd} alt="note-stack-add" />
      )}
    </Button>
  );
}

export default CreateBill;
