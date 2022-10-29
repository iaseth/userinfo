import React from 'react';

import {getPropsSorted} from './ObjectUtils';



function getValue (v) {
	const t = typeof v;
	switch (t) {
	case 'number':
		return <span className="bg-blue-100 text-blue-800">{isNaN(v) ? 'NaN' : v}</span>;
	case 'boolean':
		return <span className="bg-green-200 text-green-800">{v ? 'true' : 'false'}</span>;
	case 'string':
		return <span className="bg-red-200 text-red-800">"{v}"</span>;
	case 'object':
		return <span className="bg-violet-200 text-violet-700">Object</span>;
	case 'function':
		return <span className="bg-fuchsia-200 text-rose-800">Function</span>;
	default:
		return <span>Unknown</span>;
	}
}

function ShowMoreButton ({maxrows, setMaxRows, length, jump=10}) {
	const handleClick = () => {
		if (maxrows < length) setMaxRows(maxrows + jump);
	};

	return (
		<button onClick={handleClick} className="bg-blue-500 text-white px-4 py-2 font-bold border-y-2 border-blue-700 shadow cursor-pointer">Show more</button>
	);
}

export function ObjectTable ({object, name, title="All", props=null}) {
	const [maxrows, setMaxRows] = React.useState(10);

	if (props === null) {
		props = getPropsSorted(object);
	}

	const navigatorItems = props.filter((p, k) => k < maxrows).map((p, k) => {
		return (
			<tr key={k}>
				<td>{k+1}</td>
				<td>{p}</td>
				<td className="ch:px-2 ch:py-1 ch:rounded">{getValue(object[p])}</td>
			</tr>
		);
	});

	const currentRowCount = maxrows > props.length ? props.length : maxrows;

	return (
		<div className="DebugInfo py-6">
			<div className="TableContainer">
				<div className="TableHeader">
					<div className="grow basis-0">{title}</div>
					<div className="w-24 bg-blue-700">{currentRowCount} / {props.length}</div>
					<div className="grow basis-0">{name}</div>
				</div>
				<table className="w-full">
					<thead>
						<tr>
							<td></td>
							<td>Name</td>
							<td>Value</td>
						</tr>
					</thead>
					<tbody>{navigatorItems}</tbody>
				</table>
			</div>

			{(maxrows < props.length) && <div className="max-w-lg mx-auto px-4 py-4">
				<ShowMoreButton length={props.length} {...{maxrows, setMaxRows}} />
			</div>}
		</div>
	);
}


