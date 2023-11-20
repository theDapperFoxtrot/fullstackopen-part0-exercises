import { useState } from "react";
// Components
import Contacts from "./components/Contacts";
import Search from "./components/Search";
import Form from "./components/Form";

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
			<Form
				handleNumber={handleNumber}
				handleName={handleName}
				addPerson={addPerson}
			/>
			<Search handleSearch={handleSearch} />
			<Contacts filteredList={filteredList} />
		</>
	);
}

export default App;
