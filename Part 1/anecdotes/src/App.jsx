import { useState } from "react";
import Button from "./components/Button";

function App() {
	const anecdotes = ["If it hurts, do it more often.", "Adding manpower to a late software project makes it later!", "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.", "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", "Premature optimization is the root of all evil.", "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.", "Programming without an extremely heavy use of .log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.", "The only way to go fast, is to go well."];

	const [selected, setSelected] = useState(0);
	const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0, 0]);

	const votesCopy = [...votes];

	const randomAnecdote = () => {
		setSelected(() => {
			const number = Math.floor(Math.random() * anecdotes.length);
			return number;
		});
	};

	const vote = () => {
		votesCopy[selected] += 1;
		setVotes(votesCopy);
	};

	const topVote = votesCopy.reduce((acc, curr) => Math.max(acc, curr));
	const indexOfTopVote = votesCopy.indexOf(topVote);

	return (
		<div className="App">
			<h2>Anecdote Randomizer</h2>
			<Button text="Random Anecdote" handleClick={randomAnecdote} />
			<p>{anecdotes[selected]}</p>
			<Button text="Vote for this" handleClick={vote} />
			<p>This anecdote has {votes[selected]} votes</p>
			<h2>Top Anecdote</h2>
			<p>{topVote ? anecdotes[indexOfTopVote] : "No anecdote has been voted for. Please vote!"}</p>
		</div>
	);
}

export default App;
