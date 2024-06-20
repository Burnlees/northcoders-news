import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/material";

export const ArticleErrorNotification = ({ articleError, setArticleError }) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setArticleError({ open: false, msg: "" });
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Snackbar
        open={articleError.open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={articleError.msg}
        action={action}
      />
    </div>
  );
};
