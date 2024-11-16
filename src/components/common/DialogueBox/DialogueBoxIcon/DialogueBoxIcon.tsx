import { InfoIcon, TriangleAlertIcon } from "lucide-react";
import { MessageType } from "../../../../types/messageType/messageType";

type DialogueBoxIconProps = {
  type: MessageType;
};

function DialogueBoxIcon({ type }: DialogueBoxIconProps): JSX.Element | null {
  switch (type) {
    case "error":
      return <InfoIcon />;
    case "alert":
      return <TriangleAlertIcon />;
    case "info":
      return <InfoIcon />;
  }
}

export default DialogueBoxIcon;
