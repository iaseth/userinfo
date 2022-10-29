import {ObjectTable} from './ObjectTable';
import {getPropsSorted, getPropsGrouped} from './ObjectUtils';



export function ObjectInfo ({object, name="Untitled"}) {
	const props = getPropsSorted(object);
	const groupedProps = getPropsGrouped(object);
	const tables = groupedProps.filter(g => g.props.length > 0).map((g, k) => {
		return (
			<div key={k}>
				<ObjectTable object={object} props={g.props} />
			</div>
		);
	});

	return (
		<div>
			<div>
				<h2 className="text-xl font-bold px-2 py-4 text-center">{name} object has {props.length} props.</h2>
			</div>
			<div>{tables}</div>
		</div>
	);
}


