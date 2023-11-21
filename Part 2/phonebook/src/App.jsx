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
		contactsService.getAll().then((response) => setPersons(response));
	}, [persons]);

	// States
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [filter, setFilter] = useState("");

	const addPerson = (event) => {
		event.preventDefault();
		const newPerson = { name: newName, number: newNumber };
		const match = persons.find((person) => person.name.toUpperCase() === newName.toUpperCase());
		if (match) {
			const updateConfirmation = window.confirm(`You're about to overwrite ${newName}. Do you wish to continue?`);
			if (updateConfirmation) {
				contactsService.update(match.id, newPerson);
			} else {
				return;
			}
		} else {
			contactsService.create(newPerson);
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

	const handleDelete = (id, name) => {
		const deleteConfirmation = window.confirm(`Are you sure you want to delete ${name}?`);
		if (deleteConfirmation) {
			contactsService.deleteContact(id);
		}
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
			<Contacts
				filteredList={filteredList}
				handleDelete={handleDelete}
			/>
		</>
	);
}

export default App;
