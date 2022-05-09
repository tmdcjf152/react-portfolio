/*
Key : AIzaSyDHMuI6MNXA_9ecFqq_7CR3fVWz4BB0Wa0

PlatListID :  PL5rc04oi99fece6WMCLuZhjtVitkae3Ml

URL : https://www.googleapis.com/youtube/v3/playlistItems
*/

import Layout from '../common/Layout';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Popup from '../common/Popup';

function Youtube() {

	const [vids, setVids] = useState([]);
	const [open, setOpen] = useState(false);
	const [index, setIndex] = useState(0);
	
	useEffect(() => {
		const key = "AIzaSyDHMuI6MNXA_9ecFqq_7CR3fVWz4BB0Wa0"
		const playlistID = "PLtbEPiJjCvI9LqUerSq35hNB5BT9auspw"
		const num = "9"
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistID}&maxResults=${num}`;

		axios.get(url).then((json) => {
			setVids(json.data.items);
		});
	}, []);

	return (
		<>
			<Layout name={'Youtube'}>
				{vids.map((vid, idx) => {
					return (


						<article
							key={idx}
							onClick={() => {
								setOpen(true);
								setIndex(idx);
							}}>
							<div className='pic'>
								<img src={vid.snippet.thumbnails.standard.url} />

							</div>
						</article>
					);
				})}
			</Layout>
			{open ? (
				<Popup setOpen={setOpen}>
					<iframe
						src={`https://www.youtube.com/embed/${vids[index].snippet.resourceId.videoId}`}
						frameBorder='0'></iframe>
				</Popup>
			) : null}
		</>
	);
}
export default Youtube;

