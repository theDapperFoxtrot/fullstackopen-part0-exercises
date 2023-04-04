import Content from "./Content";

const Course = ({ course }) => {
	return (
		<>
			{course.map((eachCourse) => (
				<Content eachCourse={eachCourse} />
			))}
		</>
	);
};

export default Course;
