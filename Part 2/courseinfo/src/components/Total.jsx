const Total = ({ course }) => {
	// const totalMap = course.map((eachTotal, i) => {
	// 	eachTotal[i].parts.reduce((sum, part) => sum + part.exercises, 0);
	// });

	// console.log(totalMap);
	const exerciseTotal = course[0].parts.reduce((sum, part) => sum + part.exercises, 0);

	return (
		<p>
			<strong>Total of {exerciseTotal} exercises</strong>
		</p>
	);
};

export default Total;
