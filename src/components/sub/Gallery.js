import Layout from '../common/Layout';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Popup from '../common/Popup';


function Gallery() {
	const [pics, setPics] = useState([]);
	const [open, setOpen] = useState(false);
	const [index, setIndex] = useState(0);
	useEffect(() => {
		const key = '2b04d14206c0e0aa5938cef71f040bfc';
		const method_interest = 'flickr.favorites.getList';
		const num = 20;
		const userid = "195602470@N06"
		const url = `https://www.flickr.com/services/rest/?method=${method_interest}&per_page=${num}&api_key=${key}&user_id=${userid}&nojsoncallback=1&format=json`;
		axios.get(url).then((json) => {
			console.log(json.data.photos.photo);
			setPics(json.data.photos.photo);
		});
	}, []);
	return (
		<>
			<Layout name={'Gallery'}>
				<ul>
					{pics.map((pic, idx) => {
						return (
							<li
								key={idx}
								onClick={() => {
									setOpen(true);
									setIndex(idx);
								}}>
								<div className='inner'>
									<div className='pic'>
										<img
											src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`}
										/>
									</div>
								</div>
							</li>
						);
					})}
				</ul>
			</Layout>

			{open ? (
				<Popup setOpen={setOpen}>
					<img
						src={`https://live.staticflickr.com/${pics[index].server}/${pics[index].id}_${pics[index].secret}_b.jpg`}
					/>
				</Popup>
			) : null}
		</>
	);
}
export default Gallery;