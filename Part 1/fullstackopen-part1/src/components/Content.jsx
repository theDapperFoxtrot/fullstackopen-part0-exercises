import Part from './Part';

const Content = ({ course }) => {
	return (
		<>
			<Part part={course.parts[0].name} exercises={course.parts[0].exercises} />
			<Part part={course.parts[1].name} exercises={course.parts[1].exercises} />
			<Part part={course.parts[2].name} exercises={course.parts[2].exercises} />
		</>
	);
};

export default Content;
