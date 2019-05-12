import React from 'react';
import Reader from './Components/Reader/Reader';
import MoviePage from './Components/MoviePages/MoviePage/MoviePage';

import Dachbord from './Components/Bank/Dashboard/Dashboard';
import publications from './publications.json';
import movies from './movies.json';
import history from './history.json';

function App() {
  return (
    <div>
      <Reader initialPage={0} pages={publications} />
      <MoviePage movies={movies} />
      <Dachbord history={history} balance={2800} />
    </div>
  );
}

export default App;
