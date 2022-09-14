import Header from './Header';
import Footer from './Footer';
import RainbowBorder from './RainbowBorder';


function App () {
	return (
		<div className="App">
			<RainbowBorder />
			<Header />
			<RainbowBorder />
			<main className="h-screen flex bg-red-500 text-white">
				<h1 className="text-6xl font-bold m-auto">userInfo</h1>
			</main>
			<RainbowBorder />
			<Footer />
			<RainbowBorder />
		</div>
	);
}

export default App;
