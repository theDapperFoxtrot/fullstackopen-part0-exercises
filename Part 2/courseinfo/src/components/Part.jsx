const Part = ({ part }) => {
	const partMap = part.map((eachPart, i) => (
		<p key={eachPart[i].id}>
			{eachPart[i].name} {eachPart[i].exercises}
		</p>
	));

	return <>{partMap}</>;
};

export default Part;
