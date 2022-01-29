import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  align-items: center;
  gap: 1rem;
  position: relative;
  z-index: 33;
  height: 30px;

  input {
    flex-grow: 2;
    border: 3px solid;
    border-color: ${({ theme }) => theme.color.baseColor};
    border-radius: 15px;
    padding: 0.5rem 1rem;
    background-color: transparent;

    &:focus {
      outline: none;
      box-shadow: 0px 0px 24px -6px rgba(7, 12, 12, 0.85);
    }
  }
  p {
    display: block;
  }
`;

export const SearchIcon = styled(FiSearch)`
  margin-left: auto;
  color: ${({ theme }) => theme.color.baseColor};
  font-size: 1.3rem;
  cursor: pointer;
`;
