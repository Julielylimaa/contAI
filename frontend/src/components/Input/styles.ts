import styled from "styled-components";
import theme from "../../styles/theme";

export const InputContainer = styled.div`
   margin-top: 15px;
  width: 70%;
 
`
export const InputStyle = styled.input`
    height: 40px;
    width: 100%;
    padding: 8px;
    border: 1px solid ${theme.COLORS.VERY_LIGHT_GRAY} ;
    border-radius: 2px;
    &::placeholder {
        color: ${theme.COLORS.LIGHT_GRAY};
    }
`
export const Label = styled.label`
    display: block;
    margin-bottom: 0.2rem;
    font-weight: 100;
  color: ${theme.COLORS.LIGHT_GRAY};
  font-size: 0.7rem;
`