import {
  Search,
  SearchForm,
  SearchButton,
  SearchInput,
  Icon,
} from './SearchMovie.styled';

export const SearchMovie = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(event.target.query.value);

    event.target.reset();
  };
  return (
    <Search>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
        />
        <SearchButton type="submit">
          <Icon />
        </SearchButton>
      </SearchForm>
    </Search>
  );
};
