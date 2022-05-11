import { HashRouter as Router, Route } from 'react-router-dom';

//common
import Header from './components/common/Header';
import Footer from './components/common/Footer';

//main
import Visual from './components/main/Visual';
import Content from './components/main/Content';

//sub
import Department from './components/sub/Department';
import Community from './components/sub/Community';
import Gallery from './components/sub/Gallery';
import Join from './components/sub/Join';
import Location from './components/sub/Location';
import Youtube from './components/sub/Youtube';

import './scss/style.scss'

function App() {
	return (
		<>

<Router>
			<Route exact path='/'>
				<Header type={'main'} />
				<Visual />
				<Content />
			</Route>

			<Route path='/'>
				<Header type={'sub'} />

			</Route>
			</Router>

			<Route path='/department' component={Department} />
			<Route path='/community' component={Community} />
			<Route path='/gallery' component={Gallery} />
			<Route path='/join' component={Join} />
			<Route path='/location' component={Location} />
			<Route path='/youtube' component={Youtube} />

			<Footer />
		</>
	);
}

export default App;
