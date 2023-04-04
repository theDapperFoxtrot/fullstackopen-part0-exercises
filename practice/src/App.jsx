import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Note from "./components/Note";

const App = (props) => {
	const [notes, setNotes] = useState(props.notes);
	const [newNote, setNewNote] = useState("a new note...");

	const addNote = (event) => {
		event.preventDefault();
		console.log("button clicked", event.target);
	};

	return (
		<div className="App">
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://reactjs.org" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>This is my practice area to follow along before the exercises!</h1>
			<h2>Notes</h2>
			<ul>
				{notes.map((note) => (
					<Note key={note.id} note={note} />
				))}
			</ul>
			<form onSubmit={addNote}>
				<input value={newNote} />
				<button type="submit">save</button>
			</form>
		</div>
	);
};

export default App;
