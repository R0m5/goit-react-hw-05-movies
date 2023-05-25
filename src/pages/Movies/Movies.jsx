import { useState } from 'react';
import { fetchMoviesBySearch } from 'Services/Api';
import { Box } from 'components/Box';
import { IconMovieSearch } from './MoviesSearchIcon';
import {
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
  MovieCard,
  MovieList,
  TitleLink,
  MovieDesc,
  Title,
} from './Movies.styled';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchMovie, setSearchMovie] = useState([]);

  const handleQueryChange = e => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      alert('Enter a name of the movie');
      return;
    }

    setSearchQuery('');
    setSearchMovie([]);
    fetchMoviesBySearch(searchQuery).then(movie => {
      const newData = movie.results;
      setSearchMovie(searchMovie => {
        return [...searchMovie, ...newData];
      });
    });
  };

  return (
    <Box as="main">
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormInput
          type="text"
          autocomplete="off"
          placeholder="Search movies"
          onChange={handleQueryChange}
        />
        <SearchFormBtn type="submit">
          <IconMovieSearch />
        </SearchFormBtn>
      </SearchForm>

      <MovieList>
        {searchMovie.map(({ title, id, poster_path, release_date }, index) => (
          <MovieCard key={index}>
            <TitleLink to={`${id}`} id={id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                width={270}
                alt=""
              />
              <Title>{title}</Title>
            </TitleLink>
            <MovieDesc>
              Release date: {new Date(release_date).toLocaleDateString()}
            </MovieDesc>
          </MovieCard>
        ))}
      </MovieList>
    </Box>
  );
};
export default Movies;
