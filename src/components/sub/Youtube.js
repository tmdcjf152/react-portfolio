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
				<div className="youtubeBanner">
					<h2 className="bannerTitle">
						MINI OPTIONS.
					</h2>
					<p className="bannerText">MINI's colorful vehicle options enrich your life.</p>
				</div>
				<div className="youtubeOption">
					<div className="optionPic"></div>
					<div className="optionsBox">
						<p className="optionTitle">SELECT YOUR <br />STYLE.<br /><span className="optionText">More standard options than ever before,<br /> and trim levels have also improved.<br /> These details complete the unique <br />atmosphere of MINI Countryman.</span></p>

					</div>
				</div>
				<div className="options">
					<div className='option1'>
						<article className='option1Pic'></article>
						<article className='option1Text'>
							<p>If you don't have enough trunks, try LOOPBOX It will present you with a new storage space.</p>
						</article>
					</div>
					<div className='option2'>
						<article className='option2Pic'></article>
						<article className='option2Text'>						<p>The door projector gives you the feeling that you are riding a MINI. Fall into your MINI that shines when you open the door</p></article>
					</div>
					<div className='option3'>
						<article className='option3Pic'></article>
						<article className='option3Text'>						<p>The rear camera system tells you which way to go, so you can park more easily Also, your car will be safe because a 360-degree sensor detects danger around you.</p></article>
					</div>
					<div className='option4'>
						<article className='option4Pic'></article>
						<article className='option4Text'>						<p>Sports mode is a function that will make your heart beat. Throw away the boring drive and conquer the road with the feeling of a professional racer</p></article>
					</div>
				</div>

		<div className="optionvideo">
			<span className='videoTitle'>Quality-of-Life Options</span>
			<span className='videoText'>
			The options that can maximize its convenience will significantly improve the quality of life of you. Only this all mini with option.<br/><br/>* Click on the image to learn more about MINI Countryman.
			</span>
			
		</div>



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

