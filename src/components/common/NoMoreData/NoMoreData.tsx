import { useKeyedTranslation } from "../../../hooks/useKeyedTranslation/useKeyedTranslation";
import DialogueBox from "../DialogueBox/DialogueBox";

type NoMoreDataProps = {
  isMore: boolean;
  isFetched: boolean;
};

function NoMoreData({
  isFetched,
  isMore,
}: NoMoreDataProps): JSX.Element | null {
  const { t } = useKeyedTranslation("components.common.NoMoreData");

  if (!isFetched || isMore) return <></>;

  return <DialogueBox type="alert" message={t("noMoreData")} />;
}

export default NoMoreData;
