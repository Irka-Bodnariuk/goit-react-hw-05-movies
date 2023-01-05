import styled from 'styled-components';
import { HiArrowLeft } from 'react-icons/hi';
import { Link, NavLink } from 'react-router-dom';

export const StyleLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 700;
  margin-bottom: 12px;
  margin-top: 12px;
  margin-right: 12px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  &:hover {
    box-shadow: 0px 5px 1px 0px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  }
  &.active {
    color: white;
    background-color: orangered;
  }
`;
export const Icon = styled(HiArrowLeft)`
  color: black;
  text-align: center;
  margin-right: 5px;
`;

export const Container = styled.div`
  display: flex;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
`;
export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
  font-weight: 400;
  font-size: 20px;
`;
export const MovieName = styled.h2`
  font-size: 36px;
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
`;
export const GoBackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 700;
  margin-bottom: 12px;
  margin-top: 12px;
  margin-right: 12px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  &:hover {
    box-shadow: 0px 5px 1px 0px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  }
`;
export const Title = styled.h1`
  text-align: center;
`;
