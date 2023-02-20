
const PreviousSearches = ({previousSearches, setSearch}) => {
  const listItems = previousSearches?.map( (prev, index) =>
    <li key={index}><button className="link" onClick={() => setSearch(prev === 'trending' ? '' : prev)}>{prev}</button></li>
  );
  return (
    <div className='previous-searches'>
      <p>Previous <br/>Searches:</p>
      <ul>
        {listItems}
      </ul>
    </div>
  );
}

export default PreviousSearches;