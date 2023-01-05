import styled from 'styled-components';
import { HiSearch } from 'react-icons/hi';

export const Search = styled.div`
  display: flex;
  align-items: center;
`;
export const SearchForm = styled.form`
  display: flex;
  align-items: center;

  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 16px;
`;

export const SearchButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 4px;
`;
export const Icon = styled(HiSearch)`
  width: 20px;
  height: 20px;
`;
export const SearchInput = styled.input`
  display: inline-block;

  width: 300px;
  height: 40px;
  font: inherit;
  font-size: 20px;

  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
