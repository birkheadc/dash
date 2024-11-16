import { MessageType } from "../../../types/messageType/messageType";
import DialogueBoxIcon from "./DialogueBoxIcon/DialogueBoxIcon";

type DialogueBoxProps = {
  type: MessageType;
  message: string;
};

function DialogueBox({ type, message }: DialogueBoxProps): JSX.Element | null {
  return (
    <div className="flex flex-row items-center gap-6 p-4 px-6 m-auto text-lg font-bold border-2 w-fit">
      <DialogueBoxIcon type={type} />
      <span>{message}</span>
    </div>
  );
}

export default DialogueBox;
