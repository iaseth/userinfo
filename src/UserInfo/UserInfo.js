import Header from './Header';
import Footer from './Footer';
import DebugInfo from './DebugInfo';

import './UserInfo.css';



export default function UserInfo () {
	return (
		<div className="UserInfo">
			<Header />
			<div className="UserInfo min-h-screen bg-slate-200">
				<main className="max-w-3xl mx-auto"></main>
				<DebugInfo />
			</div>
			<Footer />
		</div>
	);
}
