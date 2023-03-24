import StatisticLine from "./StatisticLine";

const Statistics = ({ content }) => {
	let good = content.cafe[0].score;
	let neutral = content.cafe[1].score;
	let bad = content.cafe[2].score;
	let total = good + neutral + Math.abs(bad);
	let average = (good + bad) / total;
	let positive = (good / total) * 100;

	const stats = (
		<div>
			<StatisticLine text="Total:" value={total} />
			<StatisticLine text="Average:" value={average} />
			<StatisticLine text="Positive:" value={positive} percent="%" />
		</div>
	);

	let show = total ? stats : "No feedback yet! Click a button to vote! 👆";

	return <>{show}</>;
};

export default Statistics;
