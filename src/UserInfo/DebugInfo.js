


export default function DebugInfo () {

	const navigatorItems = Object.keys(Object.getPrototypeOf(navigator)).map((k, i) => {
		return (
			<tr key={i} className="px-2 py-2 bg-white border border-2">
				<td className="text-right px-2 py-2">{i+1}</td>
				<td className="px-2 py-2">{k}</td>
			</tr>
		);
	});

	return (
		<div className="DebugInfo">
			<div>
				<table className="w-full max-w-lg my-4 text-sm font-bold border-separate border-spacing-b-1 border border-slate-300">
					<tbody>{navigatorItems}</tbody>
				</table>
			</div>
		</div>
	);
}
