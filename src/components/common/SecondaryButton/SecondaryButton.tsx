import React from "react";
import KeyboardActiveButton from "../KeyboardActiveButton/KeyboardActiveButton";

type SecondaryButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

function SecondaryButton(props: SecondaryButtonProps): JSX.Element | null {
  return (
    <KeyboardActiveButton
      variant={"secondary"}
      type="button"
      {...props}
    ></KeyboardActiveButton>
  );
}

export default SecondaryButton;
