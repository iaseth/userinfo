import {ObjectTable} from './Utils';



export default function DebugInfo () {
	const objects = [
		{name: 'Screen', object: window.screen},
		{name: 'Location', object: window.location},
		{name: 'History', object: window.history},
		{name: 'Navigator', object: navigator},
		{name: 'Window', object: window},
	];

	const objectTables = objects.map((element, k) => {
		return (
			<div key={k} className="px-4 py-6"><ObjectTable object={element.object} /></div>
		);
	});

	return (
		<div className="DebugInfo">
			<div>{objectTables}</div>
		</div>
	);
}
