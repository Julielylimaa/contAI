import styled from "styled-components";
import theme from "../../styles/theme";

export const TotalContainer = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    min-width: 300px;
    padding: 1rem;
    border: 1px solid transparent;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    &:hover {
            cursor: pointer;
            box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.3);
        }

`
export const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;   
    `
export const Title = styled.text`
    color: ${theme.COLORS.GRANITE_GRAY};
    font-size: 15px;
`

export const Total = styled.text`
    margin-top: 0.5rem;
    color: ${theme.COLORS.DARK_GRAY};
    font-size: 25px;
`