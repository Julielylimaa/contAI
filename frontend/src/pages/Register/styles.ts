import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: ${theme.COLORS.VERY_LIGHT_GRAY};
`

export const RegisterForms = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    
`
export const Title = styled.text`
    color: ${theme.COLORS.DARK_GRAY};
    font-size: ${theme.FONT_SIZE.LG};
`

export const Text = styled.text`
    margin-top: 1rem;
    color: ${theme.COLORS.GRAY};
    font-size: ${theme.FONT_SIZE.MD};
`

export const BtnLogin = styled.button`
    color: ${theme.COLORS.DARK_GRAY};
    font-size: ${theme.FONT_SIZE.MD};
    background: transparent;
    border:transparent;
    cursor: pointer;

    &:hover{
        color: ${theme.COLORS.LIGHT_GRAY};
    }
    
`