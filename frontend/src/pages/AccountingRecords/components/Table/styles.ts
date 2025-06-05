import styled from "styled-components";
import theme from "../../../../styles/theme";

export const Container = styled.div`
    width: 70%;
    margin: 4rem auto 0;
    padding-top: 5rem;
`
export const TotalBoxContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
`
export const DateBtnContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`


export const SelectDateContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 0.2rem;
    gap: 0.6rem;
    width: 30%;
`

export const MessageContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem;
`
export const Message = styled.text`
    font-size: ${theme.FONT_SIZE.LG};
    color: ${theme.COLORS.LIGHT_GRAY};
    font-weight: 400;
`
export const Table = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;
    padding-top: 1.5rem;

`

export const TBody = styled.tbody`
    
`

export const Tr = styled.tr`
    
`
export const Th = styled.th`
    font-weight: 100;
    padding: 1rem 1.5rem;
    border-bottom: 1px solid ${theme.COLORS.VERY_LIGHT_GRAY};
    border-top:1px solid ${theme.COLORS.VERY_LIGHT_GRAY} ;
    background-color: #f2f2f2;
    &:first-child{
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
        border-left: 1px solid ${theme.COLORS.VERY_LIGHT_GRAY};
    }
    &:last-child{
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
        border-right: 1px solid ${theme.COLORS.VERY_LIGHT_GRAY};
    }
    `




export const Td = styled.td`
    padding: 1rem 1.5rem;
    border-bottom: 1px solid ${theme.COLORS.VERY_LIGHT_GRAY};
    border-top:1px solid ${theme.COLORS.VERY_LIGHT_GRAY} ;
    background-color: ${theme.COLORS.WHITE};
    

    &:first-child{
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
        border-left: 1px solid ${theme.COLORS.VERY_LIGHT_GRAY};
    }
    &:last-child{
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
        border-right: 1px solid ${theme.COLORS.VERY_LIGHT_GRAY};
    }
`


export const THead = styled.thead`
    color: ${theme.COLORS.GRAY};
    text-align: left;

`


interface ValueHighLightProps {
    variant: "Credit" | "Debit"
}

export const ValueHighLight = styled.span<ValueHighLightProps>`
    color: ${props => props.variant === 'Credit' ? props.theme.COLORS.LIGHT_GREEN : props.theme.COLORS.RED}
`