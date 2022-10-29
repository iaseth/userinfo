


function getProperties (object) {
	const p = [];

	while (Object.getPrototypeOf(object) !== null) {
		const ops = Object.getOwnPropertyNames(object);
		for (const op of ops) {
			if (p.indexOf(op) === -1) p.push(op);
		}
		object = Object.getPrototypeOf(object);
	}

	return p;
}

const getPropertiesSorted = object => getProperties(object).sort();

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

export function ObjectTable ({object, keys=null}) {
	if (keys === null) {
		keys = getPropertiesSorted(object);
	}

	const navigatorItems = keys.map((k, i) => {
		return (
			<tr key={i} className="odd:bg-slate-100 ch:px-3 ch:py-3 ch:border-t-2 ch:border-slate-200">
				<td className="text-right">{i+1}</td>
				<td className="">{k}</td>
				<td className="ch:px-2 ch:py-1 ch:rounded">{getValue(object[k])}</td>
			</tr>
		);
	});

	return (
		<div className="DebugInfo">
			<table className="bg-slate-50 max-w-lg w-full mx-auto shadow my-4 text-sm font-bold">
				<thead>
					<tr className="ch:px-3 ch:py-2">
						<td></td>
						<td>Name</td>
						<td>Value</td>
					</tr>
				</thead>
				<tbody>{navigatorItems}</tbody>
			</table>
		</div>
	);
}


