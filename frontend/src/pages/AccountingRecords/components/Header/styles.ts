import styled from "styled-components";
import theme from "../../../../styles/theme";
export const Container = styled.div`
    position: fixed;
    align-items: flex-start;
    justify-content: center;
    width: 100vw;
    height: 5rem;
    background-color:${theme.COLORS.GREEN};
`
export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    min-width: 300px;
    padding-top: 0.5rem;
    padding-left: 2rem;
`
export const Title = styled.text`
    padding-bottom: 0.5rem;
    color: ${theme.COLORS.WHITE};
    font-size:${theme.FONT_SIZE.LG};
`

export const Text = styled.text`
    color: ${theme.COLORS.WHITE};
    font-size:${theme.FONT_SIZE.MD};
`