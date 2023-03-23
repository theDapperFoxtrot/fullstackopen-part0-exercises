import Rating from "./Rating";

const Ratings = ({ name, score }) => {
	return (
		<>
			<Rating name={name} score={score} />
			<Rating name={name} score={score} />
			<Rating name={name} score={score} />
		</>
	);
};

export default Ratings;
