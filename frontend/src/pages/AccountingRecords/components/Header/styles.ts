import styled from "styled-components";
import theme from "../../../../styles/theme";
import { LogOut } from "lucide-react";


export const HeaderContainer = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 6rem;
    background-color: ${({ theme }) => theme.COLORS.PURPLE};
    display: flex;
    align-items: center;
    padding: 0 2rem;
    gap: 1rem;
`


export const SuricatoImage = styled.img`
    height: 6rem;
    width: auto;
`


export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const Title = styled.text`

    color: ${theme.COLORS.WHITE};
    font-size:${theme.FONT_SIZE.LG};
    font-weight:700;
    `

export const Text = styled.text`
    color: ${theme.COLORS.DARK_PURPLE};
    font-size:${theme.FONT_SIZE.MD};
`

export const LogOutButton = styled(LogOut)`
    display: flex;
    width: 2rem;
    height: 2rem;
    margin-left: auto;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;    
    color: ${theme.COLORS.DARK_PURPLE};

    &:hover {
        cursor: pointer;
        color: ${theme.COLORS.LIGHT_PURPLE};
    }

    
`