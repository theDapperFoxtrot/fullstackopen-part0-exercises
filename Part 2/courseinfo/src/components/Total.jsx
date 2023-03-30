const Total = ({ course }) => {
	const exerciseTotal = course.parts.reduce((sum, part) => sum + part.exercises, 0);

	return (
		<p>
			<strong>Total of {exerciseTotal} exercises</strong>
		</p>
	);
};

export default Total;
