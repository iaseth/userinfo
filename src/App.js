import Header from './Header';
import Footer from './Footer';
import RainbowBorder from './RainbowBorder';
import UserInfo from './UserInfo';


function App () {
	return (
		<div className="App">
			<RainbowBorder />
			<Header />
			<RainbowBorder />
			
			<UserInfo />

			<RainbowBorder />
			<Footer />
			<RainbowBorder />
		</div>
	);
}

export default App;
