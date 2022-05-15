import { useSelector } from 'react-redux';
import { useState, useRef } from 'react';
import Popup from '../common/Popup';
import accPic from '../../src_assets/youtubepic0.png';

function Vids() {
	const vidData = useSelector((store) => store.youtubeReducer.youtube);
	const pop = useRef(null);
	const [index, setIndex] = useState(0);

	return (
		<>
			<section id='vids' className='myScroll'>
			
				<section className='accessoriesBox'>
					<img src={accPic} alt="" />
					<p className='accTitle'>LIFESTYLE.
					<a href="">MINI original accessories with stylish design and unique sensibility that make your everyday life special</a></p>
			<a href=""></a>
				</section>	<section className='youtubeBox'>
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
				</section>
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