import { useContext, useEffect, useState } from 'react';
import './App.css';
import {
  Grid, // our UI Component to display the results
  SearchBar, // the search bar the user will type into
  SearchContext, // the context that wraps and connects our components
  SearchContextManager, // the context manager, includes the Context.Provider
} from '@giphy/react-components';
import PreviousSearches from './PreviousSearches';
import ShowingResults from './ShowingResults';

const WEB_SDK_KEY = process.env.REACT_APP_WEB_SDK_KEY;

const App = () => {
  const SearchExperience = () => (
    <SearchContextManager 
      apiKey={WEB_SDK_KEY}
      shouldDefaultToTrending={true}
      theme={{ searchbarHeight: 52 }}
    >
      <Components />
    </SearchContextManager>
  )

  // do some math here and also useEffect to update when window is resized
  // const windowWidth = window.innerWidth;
  // const breakpoint = 1040;
  // const width = windowWidth < breakpoint ? windowWidth - 100 : breakpoint

  const Components = () => {
    const {fetchGifs, searchKey, setSearch} = useContext(SearchContext);

    const [ previousSearches, setPreviousSearches ] = useState([]);
    const [ previousSearchKey, setPreviousSearchKey ] = useState('init');
    useEffect(()=> {
        if (previousSearchKey !== searchKey) {
          // TODO: do something fancier here? if term is already in list, remove it from current location and stick it on the end?
          // limit number of previous searches being retained?
          setPreviousSearches([...previousSearches, searchKey||'trending']);
          setPreviousSearchKey(searchKey);
        }
    }, [searchKey, previousSearches, setPreviousSearches, previousSearchKey, setPreviousSearchKey]);

    return (
      <>
        <SearchBar 
          placeholder='Search...'/>

        <PreviousSearches previousSearches={previousSearches} setSearch={setSearch}/>
        <ShowingResults searchKey={searchKey||'trending'}/>
        <Grid key={searchKey} columns={4} width={1366} fetchGifs={fetchGifs} />
      </>
    )
  }

  
  return (
    <div className="app">
      <h1><span className='giphy-logo'/>GIPHY GRABBER</h1>
      <SearchExperience/> 
    </div>
  );
}

export default App;