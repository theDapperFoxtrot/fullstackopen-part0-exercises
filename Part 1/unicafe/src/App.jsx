import { useState } from "react";
import Button from "./components/Button";
import Ratings from "./components/Ratings";

function App() {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	let cafe = [
		{ name: "good", score: good },
		{ name: "neutral", score: neutral },
		{ name: "bad", score: bad },
	];

	return (
		<div className="App">
			<h2>Unicafe Feedback:</h2>
			<Button handleClick={setGood} text="Good" />
			<Button handleClick={setNeutral} text="Neutral" />
			<Button handleClick={setBad} text="Bad" />
			<h2>Ratings:</h2>
			<Ratings cafe={cafe[0]} />
			<Ratings cafe={cafe[1]} />
			<Ratings cafe={cafe[2]} />
		</div>
	);
}

export default App;
