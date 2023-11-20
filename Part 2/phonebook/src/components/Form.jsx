const Form = (props) => {
	return (
		<>
			<h2>Add a contact</h2>
			<form onSubmit={props.addPerson}>
				<div>
					Name:
					<input
						value={props.newName}
						onChange={props.handleName}
					/>
					Number:
					<input
						value={props.newNumber}
						onChange={props.handleNumber}
					/>
				</div>
				<div>
					<button type="submit">Add</button>
				</div>
			</form>
		</>
	);
};

export default Form;
