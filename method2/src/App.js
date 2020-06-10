import React from 'react';
import NavBar from './components/NavBar';

class App extends React.Component {
	render() {
		return (
			<div>
				<NavBar />
				<h1> Hello World</h1>
				<p> My First React day</p>
			</div>
		);
	}
}

export default App;
