import styled from 'styled-components';

export const Container = styled.ul`
  padding: 0;
`;

export const CardWrapper = styled.li`
  border-radius: 4px;
  list-style: none;
  padding: 16px;

  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  > a {
    text-decoration: none;
  }
`;

export const ReviewsInformation = styled.p`
  padding: 4px;
  margin-bottom: 0;
  font-weight: 700;
  color: black;
`;
