import styled from 'styled-components'
import theme from '../../styles/theme';


export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
  padding-bottom: 1rem;
`;

export const PageNumber = styled.span<{ isActive: boolean }>`
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 50%;
  color: ${({ isActive }) => (isActive ? `${theme.COLORS.GREEN}` : `${theme.COLORS.GREEN}`)};
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
 
`;

export const ArrowButton = styled.button<{ disabled: boolean }>`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${({ disabled }) => (disabled ? `${theme.COLORS.LIGHT_GRAY}` : `${theme.COLORS.GREEN}`)};
  font-size: 16px;
  display: flex;
  align-items: center;
  
  &:disabled {
    cursor: not-allowed;
  }
`;
