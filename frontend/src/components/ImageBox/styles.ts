import styled from "styled-components";
import theme from "../../styles/theme";


export const Container = styled.div`
    display: flex;
    width: 70vw;
    height: 90vh;
    min-width: 800px;
    min-height: 700px;
    background-color: ${theme.COLORS.WHITE};
    border-radius: 1rem;
`

export const ImageContainer = styled.img`
    flex: 1;
    border-radius: 1rem 0 0 1rem ;
    opacity: 0.6;
`
export const Forms = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    
`