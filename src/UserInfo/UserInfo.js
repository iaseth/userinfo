import DebugInfo from './DebugInfo';



export default function UserInfo () {
	return (
		<div className="UserInfo min-h-screen bg-slate-200 px-2 py-16">
			<main className="max-w-xl mx-auto">
				<h1 className="text-6xl font-bold m-auto">userInfo</h1>
				<DebugInfo />
			</main>
		</div>
	);
}
