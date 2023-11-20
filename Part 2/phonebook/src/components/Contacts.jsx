const Contacts = (props) => {
	return (
		<>
			<h2>Numbers</h2>
			<ul>
				{props.filteredList.map((person) => (
					<li key={person.name}>
						{person.name} - {person.number}
					</li>
				))}
			</ul>
		</>
	);
};

export default Contacts;
