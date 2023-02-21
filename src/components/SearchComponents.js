import { useContext, useEffect, useState } from 'react';
import {
  Grid, // our UI Component to display the results
  SearchBar, // the search bar the user will type into
  SearchContext, // the context that wraps and connects our components
} from '@giphy/react-components';
import PreviousSearches from './PreviousSearches';
import CurrentSearchTerm from './CurrentSearchTerm';

const MAX_WIDTH = 1920;
const MAX_COLUMNS = 4;
const DESKTOP_BREAKPOINT = 1200;
const TABLET_BREAKPOINT = 768;
const PHONE_BREAKPOINT = 600;

const calculateGridWidth = () => {
  return window.innerWidth > MAX_WIDTH ? MAX_WIDTH : window.innerWidth - 30;
}

const calculateColumns = () => {
  const windowWidth = window.innerWidth;
  if (windowWidth > DESKTOP_BREAKPOINT) {
    return MAX_COLUMNS; 
  } else if (windowWidth > TABLET_BREAKPOINT) {
    return 3;
  } else if (windowWidth > PHONE_BREAKPOINT) {
    return 2;
  } else {
    return 1;
  }
}

const SearchComponents = () => {
  // handle resizing grid (width, number of columns) when window is resized
  const [ gridWidth, setGridWidth] = useState(calculateGridWidth());
  const [ columns, setColumns ] = useState(calculateColumns());
  useEffect(() => {
    const handleResize = () => {
      setGridWidth(calculateGridWidth());
      setColumns(calculateColumns());
    }
    window.addEventListener('resize', handleResize);
    
    return () => {
     window.removeEventListener('resize', handleResize);
    };
    
  }, [gridWidth, setGridWidth, columns, setColumns]);
  
  const {fetchGifs, searchKey, setSearch} = useContext(SearchContext);
  // keep track of previous searches
  const [ previousSearches, setPreviousSearches ] = useState([]);
  const [ previousSearchKey, setPreviousSearchKey ] = useState('init');
  useEffect(() => {
      if (previousSearchKey !== searchKey) {
        setPreviousSearches([...previousSearches, searchKey||'trending']);
        setPreviousSearchKey(searchKey);
      }
  }, [searchKey, previousSearches, setPreviousSearches, previousSearchKey, setPreviousSearchKey]);

  return (
    <>
      <SearchBar 
        placeholder='Search...'/>

      <PreviousSearches previousSearches={previousSearches} setSearch={setSearch}/>
      <CurrentSearchTerm searchKey={searchKey||'trending'}/>
      <Grid key={searchKey} columns={columns} width={gridWidth} fetchGifs={fetchGifs} />
    </>
  )
}

export default SearchComponents;
