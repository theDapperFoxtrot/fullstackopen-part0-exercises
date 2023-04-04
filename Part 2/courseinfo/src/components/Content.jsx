import Part from "./Part";
import Header from "./Header";
import Total from "./Total";

const Content = ({ eachCourse }) => {
	return (
		<>
			<Header title={eachCourse.name} />
			{eachCourse.parts.map((part) => (
				<Part part={part} />
			))}
			<Total part={eachCourse.parts} />
		</>
	);
};

export default Content;
