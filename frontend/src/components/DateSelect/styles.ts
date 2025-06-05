import styled from "styled-components";
import theme from "../../styles/theme";
import { Funnel } from "lucide-react";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

`
export const MonthYearInput = styled.select`
    padding: 8px;
    border: 1px solid ${theme.COLORS.PURPLE};
    border-radius: 4px;
    width: 100px;
    text-align: end;
    color: ${theme.COLORS.PURPLE};
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  &:focus {
    outline: none;
  }
`

export const FunnelIcon = styled(Funnel)`
  position: absolute;
  color: ${theme.COLORS.PURPLE};
  width: 20px;
  padding-left: 0.4rem;
  
`;
