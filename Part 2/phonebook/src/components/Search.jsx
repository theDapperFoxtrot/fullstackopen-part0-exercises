const Search = (props) => {
	return (
		<>
			<h2>Search contacts</h2>
			<input onChange={props.handleSearch} />{" "}
		</>
	);
};

export default Search;
