import styled from 'styled-components';

export const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 225px);
  gap: 10px;
  margin: 0;
  padding: 0;
`;

export const CardWrapper = styled.li`
  border: 1px solid black;
  border-radius: 4px;
  list-style: none;
  &:hover {
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  }

  > a {
    text-decoration: none;
  }
`;

export const MovieName = styled.h2`
  text-align: center;
  margin: 0 auto;
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
`;
