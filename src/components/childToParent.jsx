import { useState } from "react";

function Child(props) {
	const { incCount, decCount, count } = props;

	return (
		<div>
			<h2>Count : {count} </h2>
			<button disabled={count <= 0} onClick={decCount}>
				-
			</button>
			<button disabled={count >= 20} onClick={incCount}>
				+
			</button>
		</div>
	);
}

function ChildToParent() {
	const [count, setCount] = useState(0);

	const increase = () => {
		console.log("Add Button Clicked");
		setCount(count + 1);
	};
	const decrease = () => {
		console.log("Remove Button Clicked");
		setCount(count - 1);
	};

	return (
		<div>
			<Child incCount={increase} decCount={decrease} count={count} />
		</div>
	);
}

export default ChildToParent;
