import {ObjectInfo} from './Utils';



export default function DebugInfo () {
	const objects = [
		{name: 'Screen', object: window.screen},
		{name: 'Location', object: window.location},
		{name: 'History', object: window.history},
		{name: 'Navigator', object: navigator},
		{name: 'Window', object: window},
	];

	const objectInfoItems = objects.map((element, k) => {
		return (
			<div key={k} className="sm:px-2 py-16"><ObjectInfo {...element} /></div>
		);
	});

	return (
		<div className="DebugInfo">
			<div className="odd:ch:bg-slate-100 even:ch:bg-slate-200">{objectInfoItems}</div>
		</div>
	);
}
