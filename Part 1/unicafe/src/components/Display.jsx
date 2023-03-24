import Rating from "./Rating";

const Display = ({ content }) => {
	return (
		<>
			<h2>{content.heading2}</h2>
			<Rating name={content.cafe[0].name} score={content.cafe[0].score} />
			<Rating name={content.cafe[1].name} score={content.cafe[1].score} />
			<Rating name={content.cafe[2].name} score={Math.abs(content.cafe[2].score)} />
		</>
	);
};

export default Display;
