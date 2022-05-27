import { Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setYoutube, setFlickr } from './redux/action';
import axios from 'axios';

//common
import Header from './components/common/Header';
import Footer from './components/common/Footer';

//main
import Main from './components/main/Main';

//sub
import Department from './components/sub/Department';
import Community from './components/sub/Community';
import Gallery from './components/sub/Gallery';
import Join from './components/sub/Join';
import Location from './components/sub/Location';
import Youtube from './components/sub/Youtube';

import './scss/style.scss'

const path = process.env.PUBLIC_URL;

function App() {
	const dispatch = useDispatch();
	const fetchYoutube = async () => {
		const key = "AIzaSyDHMuI6MNXA_9ecFqq_7CR3fVWz4BB0Wa0"
		const playlistID = "PLtbEPiJjCvI9LqUerSq35hNB5BT9auspw"
		const num = "9"
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistID}&maxResults=${num}`;

		await axios.get(url).then((json) => {
			dispatch(setYoutube(json.data.items));
		});
	};

	const fetchFlickr = async () => {
		const key = '2b04d14206c0e0aa5938cef71f040bfc';
		const method_interest = 'flickr.favorites.getList';
		const num = 6;
		const userid = "195602470@N06"
		const url = `https://www.flickr.com/services/rest/?method=${method_interest}&per_page=${num}&api_key=${key}&user_id=${userid}&nojsoncallback=1&format=json`;

		await axios.get(url).then((json) => {
			dispatch(setFlickr(json.data.photos.photo));
		});
	};


	useEffect(() => {
		fetchYoutube();
		fetchFlickr();
	}, []);
	return (
		<>

			<Switch>
				<Route exact path='/' component={Main} />
				<Route path='/' render={() => <Header type={'sub'} />} />
			</Switch>

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
