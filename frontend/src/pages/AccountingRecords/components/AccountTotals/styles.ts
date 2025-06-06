import styled from "styled-components";
import { DollarSign, TrendingDown, TrendingUp } from "lucide-react";
import theme from "../../../../styles/theme";

export const TotalBoxContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem; 
`

export const CreditIcon = styled(TrendingUp)`
  width: 50px;
  color: #22c55e; 
`;
export const DebitIcon = styled(TrendingDown)`
  width: 50px;
  color: #ff0000; 
`;

export const DollarIcon = styled(DollarSign)`
  width: 50px;
  color: ${theme.COLORS.DARK_PURPLE};
`
