import { useState } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Total from './components/Total';
import Button from './components/Button';
import Display from './components/Display';

const App = () => {
	const [counter, setCounter] = useState(0);

	const increment = () => setCounter(counter + 1);
	const decrement = () => setCounter(counter - 1);
	const reset = () => setCounter(0);

	const course = {
		name: 'Half Stack application development',
		parts: [
			{
				name: 'Fundamentals of React',
				exercises: 10,
			},
			{
				name: 'Using props to pass data',
				exercises: 7,
			},
			{
				name: 'State of a component',
				exercises: 14,
			},
		],
	};

	return (
		<>
			<Header course={course} />
			<Content course={course} />
			<Total course={course} />
			<Display counter={counter} />
			<Button handleClick={decrement} text='-' />
			<Button handleClick={reset} text='Reset' />
			<Button handleClick={increment} text='+' />
		</>
	);
};

export default App;
