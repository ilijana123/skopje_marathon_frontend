import { CheckStatusTab } from "../components/CheckStatusTab";
import { useContestants } from "../hooks/useContestants";

export const CheckStatusContainer = () => {
  const c = useContestants();

  return (
    <CheckStatusTab
      checkEmail={c.checkEmail}
      setCheckEmail={c.setCheckEmail}
      checkResult={c.checkResult}
      onCheck={c.handleCheck}
    />
  );
};
