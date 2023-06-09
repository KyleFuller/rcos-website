import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, {useState} from 'react';

function AlertButton(props) {
	const text = props.text;
	const alrt = props.alert;
	return <button onClick={() => alert(alrt)}>{text}</button>;
}

function makeAlertButtons(propses) {
	return propses.map((obj) => <div> <AlertButton text={obj.text} alert={obj.alert} /> </div>);
}

function ButtonIncrementCount(props) {
	return <button onClick={() => props.incrementCount()}>Increment Count</button>;
}

function ButtonAddButton(props) {
	return <button onClick={() => props.addButton()}>Add Button</button>;
}

function App(props) {

	const [count, setCount] = useState(0);
	const [buttons, setButtons] = useState([]);

	function incrementCount() {
		setCount(count + 1);
//		alert("count incremented.");
	}

	function addButton() {
		setButtons(buttons.concat([<div><button onClick={() => alert("grr")}>Button</button></div>]));
	}

	return (
		<div>
			<body>
				{makeAlertButtons([
					{text:"hi", alert:"hello!"},
					{text:"bye", alert:"byebye!"},
					{text:"argh", alert:"arggghhh!"}])}
				<div>
					<ButtonAddButton addButton={addButton} />
				</div>
				{buttons}
				<div>
					<ButtonIncrementCount incrementCount={incrementCount} />
				</div>
			</body>
			<p> The current count is {count}. </p>
		</div>
	);
}

export default App;
