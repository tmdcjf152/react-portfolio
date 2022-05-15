import { useSelector } from 'react-redux';
import { useState, useRef } from 'react';
import Popup from '../common/Popup';

function Vids() {
	const vidData = useSelector((store) => store.youtubeReducer.youtube);
  const pop = useRef(null);
	const [index, setIndex] = useState(0);

return (
		<>
			<section id='vids' className='myScroll'>
				<h2>Recent Youtube</h2>
				<ul>
					{vidData.map((vid, idx) => {
						if (idx < 3) {
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