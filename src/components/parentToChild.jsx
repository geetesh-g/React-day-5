import React from "react";

function Child({ count, decCount, incCount }) {
	return (
		<div>
			<h1>Count : {count}</h1>
			<button disabled={count <= 0} onClick={decCount}>
				-
			</button>
			<button disabled={count >= 20} onClick={incCount}>
				+
			</button>
		</div>
	);
}

function ParentToChild() {
	const [count, setCount] = React.useState(0);

	function incCount() {
		console.log(count);
		setCount(count + 1);
	}
	function decCount() {
		console.log(count);
		setCount(count - 1);
	}

	return (
		<div>
			<Child count={count} incCount={incCount} decCount={decCount} />
		</div>
	);
}

export default ParentToChild;
