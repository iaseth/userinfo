import Header from './Header';
import Footer from './Footer';
import DebugInfo from './DebugInfo';



export default function UserInfo () {
	return (
		<div className="UserInfo">
			<Header />
			<div className="UserInfo min-h-screen bg-slate-200 px-2 py-16">
				<main className="max-w-xl mx-auto">
					<h1 className="text-3xl text-center font-bold m-auto">userInfo</h1>
					<DebugInfo object={navigator} />
					<DebugInfo object={window} />
				</main>
			</div>
			<Footer />
		</div>
	);
}
