const CurrentSearchTerm = ({searchKey}) => {
  return (
    <>
      <p>Showing results for: <span className='emphasis'>{searchKey}</span></p>
    </>
  );
}

export default CurrentSearchTerm;