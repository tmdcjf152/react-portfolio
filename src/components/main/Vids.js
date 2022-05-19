import { useSelector } from 'react-redux';
import { useState, useRef } from 'react';
import Popup from '../common/Popup';
import accImg from '../../src_assets/youtubepic0.png'


function Vids() {
	const vidData = useSelector((store) => store.youtubeReducer.youtube);
	const pop = useRef(null);
	const [index, setIndex] = useState(0);

	return (
		<>
			<section id='vids' className='myScroll'>
				<h1>LIFESTYLE ACC
				</h1>


				<div className='vidBox'>
					{/* 텍스트영역 */}
					<div className='box1'>
						<div className='imgBox'>
							<img src={accImg} alt="" />
							</div>
						<div className='accTextBox'>
							<h2>Accessories improve the quality of life</h2>
							<a href="http://localhost:3000/react-portfolio#/youtube">VIEW MORE </a>
							</div>
					</div>
					{/* 비디오영역 */}
					<div className='box2'>
						<ul>
							{vidData.map((vid, idx) => {
								if (idx < 4) {
									return (
										<li
											key={idx}
											onClick={() => {
												setIndex(idx);
												pop.current.open();
											}}>
											<img src={vid.snippet.thumbnails.medium.url} />
										</li>
									);
								}
							})}
						</ul>

					</div>

				</div>


			</section>

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
export default Vids;