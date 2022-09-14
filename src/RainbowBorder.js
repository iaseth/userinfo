


const bgClasses = [
	"bg-red-500", "bg-slate-500",
	"bg-blue-500", "bg-slate-500-500",
	"bg-green-500"
];

export default function RainbowBorder () {
	let items = bgClasses.map((v, i) => {
		return <div key={i} className={"grow " + v}></div>
	});

	return (
		<div className="bg-slate-600 h-1 flex">
			{items}
		</div>
	);
}
