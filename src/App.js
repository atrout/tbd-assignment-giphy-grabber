
import './styles.css';
import { SearchContextManager } from '@giphy/react-components';
import SearchComponents from './components/SearchComponents';

const WEB_SDK_KEY = process.env.REACT_APP_WEB_SDK_KEY;

const App = () => {

  const SearchExperience = () => (
    <SearchContextManager 
      apiKey={WEB_SDK_KEY}
      shouldDefaultToTrending={true}
      theme={{ searchbarHeight: 52 }}
    >
      <SearchComponents />
    </SearchContextManager>
  )

  return (
    <div className="app">
      <h1><span className='giphy-logo'/>GIPHY GRABBER</h1>
      <SearchExperience/> 
    </div>
  );
}

export default App;