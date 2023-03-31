import Part from "./Part";
import Header from "./Header";
import Total from "./Total";

const Content = ({ course }) => {
	const coursePart = course.map((eachPart) => eachPart.parts);

	return (
		<>
			<Header course={course} />
			<Part part={coursePart} />
			<Total course={course} />
		</>
	);
};

export default Content;
