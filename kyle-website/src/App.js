import "./App.css"

function AlertButton(props) {
	const text = props.text
	const alrt = props.alert
	return <button onClick={() => alert(alrt)}>{text}</button>
}

function makeAlertButtons(propses) {
	return propses.map((obj) => <div> <AlertButton text={obj.text} alert={obj.alert} /> </div>)
}

function App(props) {
	return (
		<div>
			<body>
				{makeAlertButtons([
					{text:"hi", alert:"hello!"},
					{text:"bye", alert:"byebye!"},
					{text:"argh", alert:"arggghhh!"}])}
			</body>
		</div>
	);
}

export default App;
