import { ToastContainer } from "react-toastify";

import styles from "./Toast.module.css";
import { useTheme } from "../../../hooks/useTheme/useTheme";

function Toast(): JSX.Element | null {
  const { theme } = useTheme();

  return (
    <ToastContainer
      className={styles.toast}
      autoClose={3000}
      position="bottom-center"
      theme={theme}
    />
  );
}

export default Toast;
