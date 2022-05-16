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

				<section className='accessoriesBox'>

					<p className='accTitle'>LIFESTYLE.
					</p>
					<p className="accText">MINI's accessories will fill in the gaps in your life. <br/> By addressing minor inconveniences, your quality of life will have a tremendous boost.</p>
				</section>	

				<section className='youtubeBox'>
					<ul>
						{vidData.map((vid, idx) => {
							if (idx < 8) {
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
					<a href="http://localhost:3000/react-portfolio#/youtube">VIEW MORE 	&rarr;</a>
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