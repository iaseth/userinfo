


export function getProps (object) {
	const props = [];

	while (Object.getPrototypeOf(object) !== null) {
		const ownProps = Object.getOwnPropertyNames(object);
		for (const ownProp of ownProps) {
			if (ownProp.startsWith('__')) continue;
			if (props.indexOf(ownProp) === -1) props.push(ownProp);
		}
		object = Object.getPrototypeOf(object);
	}

	return props;
}

export const getPropsSorted = object => getProps(object).sort();

export function getPropsGrouped (object) {
	const props = getPropsSorted(object);
	const groupedProps = [
		{type: 'boolean', props: []},
		{type: 'number', props: []},
		{type: 'string', props: []},
		{type: 'object', props: []},
		{type: 'function', props: []},

		{type: 'unknown', props: []},
	];

	for (const prop of props) {
		let found = false;
		for (const group of groupedProps) {
			if (typeof object[prop] === group.type) {
				found = true;
				group.props.push(prop);
				break;
			}
		}

		if (!found) {
			groupedProps[groupedProps.length-1].props.push(prop);
		}
	}

	return groupedProps;
}


