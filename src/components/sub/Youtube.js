/*
Key : AIzaSyDHMuI6MNXA_9ecFqq_7CR3fVWz4BB0Wa0

PlatListID :  PL5rc04oi99fece6WMCLuZhjtVitkae3Ml

URL : https://www.googleapis.com/youtube/v3/playlistItems
*/

import Layout from '../common/Layout';
import { useState, useRef } from 'react';
import Popup from '../common/Popup';
import { useSelector } from 'react-redux';

function Youtube() {
	const vidData = useSelector((store) => store.youtubeReducer.youtube);
	console.log(vidData);

	const pop = useRef(null);
	const [index, setIndex] = useState(0);

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
						The options that can maximize its convenience will significantly improve the quality of life of you. Only this all mini with option.<br /><br />* Click on the image to learn more about MINI Countryman.
					</span>

				</div>



				{vidData.map((vid, idx) => {
					const tit = vid.snippet.title;
					const desc = vid.snippet.description;
					const date = vid.snippet.publishedAt;
					return (
						<article
							key={idx}
							onClick={() => {
								pop.current.open();
								setIndex(idx);
							}}>
							<div className='pic'>
								<img src={vid.snippet.thumbnails.standard.url} />
							</div>
							<h2>{tit.length > 50 ? tit.substr(0, 50) + '...' : tit}</h2>
							<p>{desc.length > 150 ? desc.substr(0, 150) + '...' : desc}</p>
							<span>{date.split('T')[0]}</span>
						</article>
					);
				})}
			</Layout>
			<Popup ref={pop}>
				{vidData.length !== 0 && (
					<>
						<iframe
							src={`https://www.youtube.com/embed/${vidData[index].snippet.resourceId.videoId}`}
							frameBorder='0'></iframe>
						<span className='close' onClick={() => pop.current.close()}>
							close
						</span>
					</>
				)}
			</Popup>
		</>
	);
}
export default Youtube;

