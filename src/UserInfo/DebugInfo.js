


function getValue (v) {
	const t = typeof v;
	switch (t) {
		case 'number': return v;
		case 'boolean': return v;
		case 'string': return v;
		case 'object': return 'Object';
		case 'function': return 'Function';
		default: return 'Unknown';
	}
}

export default function DebugInfo ({object}) {

	const navigatorItems = Object.keys(Object.getPrototypeOf(object)).map((k, i) => {
		return (
			<tr key={i} className="px-2 py-2 bg-white border border-2">
				<td className="text-right px-2 py-2">{i+1}</td>
				<td className="px-2 py-2">{k}</td>
				<td className="px-2 py-2">{getValue(navigator[k])}</td>
			</tr>
		);
	});

	return (
		<div className="DebugInfo">
			<div>
				<table className="w-full max-w-lg mx-auto my-4 text-sm font-bold border-separate border-spacing-b-1 border border-slate-300">
					<tbody>{navigatorItems}</tbody>
				</table>
			</div>
		</div>
	);
}
