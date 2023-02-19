import { useContext } from 'react';
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

  /* TODO:
    x center display
    x put SDK key in env variable
    - current search terms
    - list of previous searches
    - search bar
      x giphy logo
      x font
      - font color / size?
    - viewport layout
    - good default large width?
      x 1040?
    - readme
    - put code in the right files
    - aria tags
    - tests
  */
  const SearchExperience = () => (
    <SearchContextManager 
      apiKey={WEB_SDK_KEY}
      shouldDefaultToTrending={true}
      theme={{ searchbarHeight: 52 }}
    >
      <Components />
    </SearchContextManager>
  )

  const Components =() => {
    const {fetchGifs, searchKey} = useContext(SearchContext);
    return (
      <>
        <SearchBar 
          placeholder='Search...'/>

        <PreviousSearches/>
        <ShowingResults/>
        {/** 
            key will recreate the component, 
            this is important for when you change fetchGifs 
            e.g. changing from search term dogs to cats or type gifs to stickers
            you want to restart the gifs from the beginning and changing a component's key does that 
        **/}
        <Grid key={searchKey} columns={4} width={1040} fetchGifs={fetchGifs} />
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