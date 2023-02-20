const PreviousSearches = ({previousSearches, setSearch}) => {

  const handleClick = (previousSearch) => {
    setSearch(previousSearch === 'trending' ? '' : previousSearch)
  }

  const listItems = previousSearches?.map( (prev, index) =>
    <li key={index}><button className="link" onClick={() => handleClick(prev)}>{prev}</button></li>
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