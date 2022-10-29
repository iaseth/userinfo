import {ObjectTable} from './ObjectTable';
import {getPropsSorted, getPropsGrouped} from './ObjectUtils';



export function ObjectOverViewTable ({name="Untitled", groupedProps}) {
	const rows = groupedProps.map((g, k) => {
		return (
			<tr key={k}>
				<td>{k+1}</td>
				<td>{g.type}</td>
				<td>{g.props.length}</td>
			</tr>
		);
	});

	return (
		<div className="TableContainer">
			<div className="TableHeader">
				<div className="grow basis-0">{name}</div>
				<div className="grow bg-blue-700"></div>
			</div>

			<table className="w-full">
				<thead>
					<tr>
						<td></td>
						<td>Type</td>
						<td>Props</td>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		</div>
	);
}

export function ObjectInfo ({object, name="Untitled"}) {
	const props = getPropsSorted(object);
	const groupedProps = getPropsGrouped(object);
	const tables = groupedProps.filter(g => g.props.length > 0).map((g, k) => {
		return (
			<div key={k}>
				<ObjectTable {...{object, name}} props={g.props} title={g.type} />
			</div>
		);
	});

	return (
		<div>
			<div>
				<h2 className="text-xl font-bold px-2 py-4 text-center">{name} object has {props.length} props.</h2>
			</div>
			<div className="py-6">
				<ObjectOverViewTable {...{name, groupedProps}} />
			</div>
			<div>{tables}</div>
		</div>
	);
}


