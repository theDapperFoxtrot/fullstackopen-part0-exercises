const Header = ({ course }) => {
	const courseName = course.map((eachCourse) => <h2 key={eachCourse.id}>{eachCourse.name}</h2>);

	return <>{courseName}</>;
};
export default Header;
