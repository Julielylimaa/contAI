import { TotalBox } from "../../../../components/TotalBox/TotalBox";
import { CreditIcon, DebitIcon, DollarIcon, TotalBoxContainer } from "./styles";
interface AccountTotalsProps {
  totalCredit: number;
  totalDebit: number;
  totalBalance: number;
}

export const AccountTotals = ({
  totalCredit,
  totalDebit,
  totalBalance,
}: AccountTotalsProps) => {
  return (
    <TotalBoxContainer>
      <TotalBox title="Crédito" total={totalCredit || 0}>
        <CreditIcon />
      </TotalBox>
      <TotalBox title="Débito" total={totalDebit || 0}>
        <DebitIcon />
      </TotalBox>
      <TotalBox title="Saldo" total={totalBalance || 0}>
        <DollarIcon />
      </TotalBox>
    </TotalBoxContainer>
  );
};
