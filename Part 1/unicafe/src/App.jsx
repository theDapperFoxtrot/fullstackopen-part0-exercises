import { useState } from "react";
import Heading from "./components/Heading";
import Button from "./components/Button";
import Display from "./components/Display";
import Statistics from "./components/Statistics";

function App() {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	let content = {
		heading1: "Unicafe Feedback:",
		heading2: "Ratings:",
		cafe: [
			{ name: "Good:", score: good },
			{ name: "Neutral:", score: neutral },
			{ name: "Bad:", score: bad },
		],
	};

	const voteGood = () => {
		setGood(good + 1);
	};

	const voteNeutral = () => {
		setNeutral(neutral + 1);
	};

	const voteBad = () => {
		setBad(bad - 1);
	};

	return (
		<div className="App">
			<Heading content={content} />
			<Button handleClick={voteGood} text="Good" />
			<Button handleClick={voteNeutral} text="Neutral" />
			<Button handleClick={voteBad} text="Bad" />
			<Display content={content} />
			<Statistics content={content} />
		</div>
	);
}

export default App;
