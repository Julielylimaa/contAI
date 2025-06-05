import styled from "styled-components";
import theme from "../../styles/theme";
import { FaFilter } from "react-icons/fa";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

`
export const MonthYearInput = styled.select`
    padding: 8px;
    border: 1px solid ${theme.COLORS.GREEN};
    border-radius: 4px;
    width: 100px;
    text-align: end;
    color: ${theme.COLORS.GREEN};
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  &:focus {
    outline: none;
  }
`

export const Icon = styled(FaFilter)`
  position: absolute;
  width: 20px;
  padding-left: 0.4rem;
  pointer-events: none;
  
`;
