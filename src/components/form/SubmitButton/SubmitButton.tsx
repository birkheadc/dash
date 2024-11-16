import { LoaderCircleIcon } from "lucide-react";
import { useKeyedTranslation } from "../../../hooks/useKeyedTranslation/useKeyedTranslation";
import PrimaryButton from "../../common/PrimaryButton/PrimaryButton";

import styles from "./SubmitButton.module.css";

type SubmitButtonProps = {
  isWorking: boolean;
  submitText?: string;
  type?: "submit" | "button";
  onClick?: () => void;
};

function SubmitButton({
  isWorking,
  submitText,
  type = "submit",
  onClick,
}: SubmitButtonProps): JSX.Element | null {
  const { t } = useKeyedTranslation("components.form.SubmitButton");

  return (
    <PrimaryButton
      className={styles.submitButton}
      disabled={isWorking}
      type={type}
      onClick={onClick}
    >
      <div
        className={`m-auto w-fit h-fit animate-spin ${isWorking ? "" : "opacity-0"}`}
      >
        <LoaderCircleIcon />
      </div>
      <div className={isWorking ? "opacity-0" : ""}>
        {submitText ?? t("submit")}
      </div>
    </PrimaryButton>
  );
}

export default SubmitButton;
