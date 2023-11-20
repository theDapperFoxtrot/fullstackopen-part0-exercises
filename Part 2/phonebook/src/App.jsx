import { useState, useEffect } from "react";
// libraries
import axios from "axios";
// Components
import Contacts from "./components/Contacts";
import Search from "./components/Search";
import Form from "./components/Form";
// Services
import contactsService from "./services/contacts";

import "./App.css";

function App() {
	const [persons, setPersons] = useState([]);
	// Fetching from data.json
	useEffect(() => {
		axios.get("http://localhost:3001/contacts").then((response) => {
			setPersons(response.data);
		});
	}, [persons]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [filter, setFilter] = useState("");

	const addPerson = (event) => {
		event.preventDefault();
		if (persons.some((person) => person.name.toUpperCase() === newName.toUpperCase())) {
			alert(`${newName} is in the phonebook already!`);
		} else {
			const newPerson = { name: newName, number: newNumber };
			axios.post("http://localhost:3001/contacts", newPerson).then(setNewName("")).then(setNewNumber(""));
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
				newName={newName}
				newNumber={newNumber}
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
