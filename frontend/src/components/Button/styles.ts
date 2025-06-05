import styled from "styled-components";
import theme from "../../styles/theme";

export const BtnContainer = styled.div`
    margin-top: 20px;
    width: 70%;
`

export const Btn = styled.button`
    height: 40px;
    width: 100%;
    padding: 8px;
    color: ${theme.COLORS.WHITE};
    background-color: ${theme.COLORS.PURPLE};
    border: 1px solid transparent ;
    border-radius: 2px; 
    font-size: ${theme.FONT_SIZE.MD};
    cursor: pointer;
    &:hover{
        background-color: ${theme.COLORS.LIGHT_PURPLE};
    }
`