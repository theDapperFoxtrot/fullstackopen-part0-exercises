const Contacts = (props) => {
	return (
		<>
			<h2>Numbers</h2>
			<ul>
				{props.filteredList.map((person) => (
					<li key={person.id}>
						<p>ID#:{person.id}</p>
						{person.name} - {person.number}{" "}
						<button
							onClick={() => {
								props.handleDelete(person.id, person.name);
							}}
						>
							Delete
						</button>
					</li>
				))}
			</ul>
		</>
	);
};

export default Contacts;
