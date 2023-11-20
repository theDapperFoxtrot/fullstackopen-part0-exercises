import { useState } from "react";
import "./App.css";

function App() {
	const [persons, setPersons] = useState([
		{ name: "Arto Hellas", number: "0123456789" },
		{ name: "Jimbo Jambo", number: "1234567890" },
		{ name: "Ilmo ", number: "2345678901" },
		{ name: "Jaakko", number: "3456789012" },
	]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [filter, setFilter] = useState("");

	// const peeps = persons.map((person) => (
	// 	<li key={person.name}>
	// 		{person.name} - {person.number}
	// 	</li>
	// ));

	const addPerson = (event) => {
		event.preventDefault();
		if (persons.some((person) => person.name.toUpperCase() === newName.toUpperCase())) {
			alert(`${newName} is in the phonebook already!`);
		} else {
			const newPerson = { name: newName, number: newNumber };
			setPersons(persons.concat(newPerson));
			setNewNumber("");
			setNewName("");
		}
	};

	const handleName = (event) => {
		setNewName(event.target.value);
	};

	const handleNumber = (event) => {
		setNewNumber(event.target.value);
	};

	const handleSearch = (event) => {
		setFilter(event.target.value);
	};

	const filteredList = persons.filter((person) => person.name.toUpperCase().includes(filter.toUpperCase()));

	return (
		<>
			<h1>Phonebook</h1>
			<h2>Add a contact</h2>
			<form onSubmit={addPerson}>
				<div>
					Name:
					<input
						value={newName}
						onChange={handleName}
					/>
					Number:
					<input
						value={newNumber}
						onChange={handleNumber}
					/>
				</div>
				<div>
					<button type="submit">Add</button>
				</div>
			</form>
			<h2>Search contacts</h2>
			<input onChange={handleSearch} />
			<h2>Numbers</h2>
			<ul>
				{filteredList.map((person) => (
					<li key={person.name}>
						{person.name} - {person.number}
					</li>
				))}
			</ul>
		</>
	);
}

export default App;
