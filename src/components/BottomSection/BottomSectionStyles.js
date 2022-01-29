import styled from 'styled-components';

export const MinMax = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MinMaxItem = styled.div`
  &:nth-child(1) {
    h3 {
      background-color: #faf4d1;
      color: #e0c464;
    }
  }
  &:nth-child(2) {
    h3 {
      background-color: #ecf8ff;
      color: #afd0e6;
    }
  }
  &:nth-child(3) {
    h3 {
      background-color: #e3e6ea;
      color: #9daab8;
    }
  }
  h3 {
    background-color: green;
    padding: 0.2rem 1.4rem;
    border-radius: 18px;
    font-size: 1rem;
    font-weight: 600;
  }

  p {
    text-align: center;
    font-size: 0.8rem;
    margin-top: 0.4rem;
    color: ${({ theme }) => theme.color.baseColor};
    font-weight: 500;
  }
`;