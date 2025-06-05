import styled from "styled-components";
import theme from "../../styles/theme";
import * as Dialog from "@radix-ui/react-dialog";

export const AddButton = styled.button`
    background-color: ${theme.COLORS.GREEN};
    border: 1px solid transparent;
    color: ${theme.COLORS.WHITE};
    padding: 1rem;
    font-size: 14px;
    font-weight: 200;
    border-radius: 5px;
    cursor: pointer;

    &:hover{
        background-color: ${theme.COLORS.LIGHT_GREEN};
    }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
`

export const Content = styled(Dialog.Content)`
    background-color: white;
    width: 40%;
    min-width: 400px;
    padding: 3rem;
    border-radius: 8px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
`

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;   
`
export const SelectTypeContainer = styled.div`
    margin-top: 15px;
    width: 70%;
 
`

export const Label = styled.label`
    display: block;
    margin-bottom: 0.2rem;
    font-weight: 100;
  color: ${theme.COLORS.LIGHT_GRAY};
  font-size: 0.7rem;
`


export const SelectType = styled.select`
    padding: 8px;
    border: 1px solid ${theme.COLORS.VERY_LIGHT_GRAY};
    border-radius: 2px;
    width: 100%;
    text-align: start;
    color: ${theme.COLORS.DARK_GRAY};
    cursor: pointer;
  &:focus {
    outline: none;
  }
`

