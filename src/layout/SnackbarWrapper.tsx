import { SnackbarProvider } from "notistack";
import { SnackbarOrigin } from "@mui/material";

const MAX_SNACK = 3;
const AUTO_HIDE_DURATION = 3000;
const POSITION: SnackbarOrigin = {
  vertical: "top",
  horizontal: "center"
};

export const SnackbarWrapper = ({ children }: any) => {
  return (
    <SnackbarProvider
      maxSnack={MAX_SNACK}
      autoHideDuration={AUTO_HIDE_DURATION}
      anchorOrigin={POSITION}
    >
      {children}
    </SnackbarProvider>
  );
}
