/* This was just for fun */
// import { useState } from "react";
// import Button from "./components/Button";
// import Display from "./components/Display";
/* This was just for fun */
import Course from "./components/Course";

const App = () => {
	/* This was just for fun */
	// const [counter, setCounter] = useState(0);

	// const increment = () => setCounter(counter + 1);
	// const decrement = () => setCounter(counter - 1);
	// const reset = () => setCounter(0);
	/* This was just for fun */

	const course = [
		{
			name: "Half Stack application development",
			id: 1,
			parts: [
				{
					name: "Fundamentals of React",
					exercises: 10,
					id: 1,
				},
				{
					name: "Using props to pass data",
					exercises: 7,
					id: 2,
				},
				{
					name: "State of a component",
					exercises: 14,
					id: 3,
				},
				{
					name: "Redux",
					exercises: 11,
					id: 4,
				},
			],
		},
		{
			name: "Node.js",
			id: 2,
			parts: [
				{
					name: "Routing",
					exercises: 3,
					id: 1,
				},
				{
					name: "Middlewares",
					exercises: 7,
					id: 2,
				},
			],
		},
	];

	return (
		<>
			<h1>Web Development Curriculum</h1>
			<Course course={course} />
			{/* This was just for fun */}
			{/* <Display counter={counter} />
			<Button handleClick={decrement} text="-" />
			<Button handleClick={reset} text="Reset" />
			<Button handleClick={increment} text="+" /> */}
			{/* This was just for fun */}
		</>
	);
};

export default App;