import SubmitButton from "../../form/SubmitButton/SubmitButton";
import CloseableModal from "../CloseableModal/CloseableModal";
import SecondaryButton from "../SecondaryButton/SecondaryButton";

type ConfirmationModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  message: string;
  cancelButtonText?: string;
  confirmButtonText?: string;
  isWorking?: boolean;
};

function ConfirmationModal({
  isOpen,
  onClose,
  message,
  cancelButtonText,
  confirmButtonText,
  isWorking = false,
  onConfirm,
}: ConfirmationModalProps): JSX.Element {
  return (
    <CloseableModal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col gap-4">
        <p className="p-2">{message}</p>
        <div className="flex gap-2 justify-end">
          <SecondaryButton onClick={onClose}>
            {cancelButtonText}
          </SecondaryButton>
          <SubmitButton
            type="button"
            submitText={confirmButtonText}
            isWorking={isWorking}
            onClick={onConfirm}
          />
        </div>
      </div>
    </CloseableModal>
  );
}

export default ConfirmationModal;
