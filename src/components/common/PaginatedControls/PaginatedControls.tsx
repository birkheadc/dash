import {
  ArrowLeftIcon,
  ArrowLeftToLineIcon,
  ArrowRightIcon,
} from "lucide-react";
import SecondaryButton from "../SecondaryButton/SecondaryButton";
import { useKeyedTranslation } from "../../../hooks/useKeyedTranslation/useKeyedTranslation";

export type PaginatedControlsProps = {
  currentPage: number;
  goToFirstPage: () => void;
  goToPrevPage: () => void;
  goToNextPage: () => void;
  canGoToPrev: boolean;
  canGoToNext: boolean;
};

function PaginatedControls({
  currentPage,
  goToFirstPage,
  goToPrevPage,
  goToNextPage,
  canGoToPrev,
  canGoToNext,
}: PaginatedControlsProps): JSX.Element | null {
  const { t } = useKeyedTranslation("components.common.PaginatedControls");

  return (
    <div className="grid max-w-full grid-cols-3 m-auto w-fit">
      <div className="flex flex-row justify-between gap-4">
        <SecondaryButton
          className="flex-grow"
          aria-label={t("goToFirstPage")}
          disabled={!canGoToPrev}
          onClick={goToFirstPage}
        >
          <ArrowLeftToLineIcon />
        </SecondaryButton>
        <SecondaryButton
          className="flex-grow"
          aria-label={t("goToPrevPage")}
          disabled={!canGoToPrev}
          onClick={goToPrevPage}
        >
          <ArrowLeftIcon />
        </SecondaryButton>
      </div>
      <div className="flex items-center justify-center">{currentPage}</div>
      <div className="flex flex-row">
        <SecondaryButton
          className="flex-grow"
          aria-label={t("goToNextPage")}
          disabled={!canGoToNext}
          onClick={goToNextPage}
        >
          <ArrowRightIcon />
        </SecondaryButton>
      </div>
    </div>
  );
}

export default PaginatedControls;
