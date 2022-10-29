import {ObjectTable} from './Utils';



export default function DebugInfo () {
	const objects = [
		{name: '', object: window},
		{name: '', object: window.screen},
		{name: '', object: window.location},
		{name: '', object: window.history},
		{name: '', object: navigator}
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
