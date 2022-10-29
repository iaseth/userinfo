


function getValue (v) {
	const t = typeof v;
	switch (t) {
		case 'number': return <span className="text-blue-800">{v}</span>;
		case 'boolean': return <span className="text-green-800">{v ? 'true' : 'false'}</span>;
		case 'string': return <span className="text-red-800">{v}</span>;
		case 'object': return <span className="text-violet-700">Object</span>;
		case 'function': return <span className="text-rose-800">Function</span>;
		default: return <span>Unknown</span>;
	}
}

export function ObjectTable ({object, keys=null}) {
	if (keys === null) {
		keys = Object.keys(Object.getPrototypeOf(object)).sort();
	}

	const navigatorItems = keys.map((k, i) => {
		return (
			<tr key={i} className="odd:bg-slate-100 ch:px-3 ch:py-3 ch:border-t-2 ch:border-slate-200">
				<td className="text-right">{i+1}</td>
				<td className="">{k}</td>
				<td className="">{getValue(navigator[k])}</td>
			</tr>
		);
	});

	return (
		<div className="DebugInfo">
			<table className="bg-slate-50 w-full mx-auto my-4 text-sm font-bold">
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


