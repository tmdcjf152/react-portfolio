import { useSelector } from 'react-redux';
import { useState, useRef } from 'react';
import Popup from '../common/Popup';

function Pics(props) {
	const scrolled = props.scrolled;
	const start = props.start;
	const base = 400;
	const position = scrolled - start + base;


	const pics = useSelector((store) => store.flickrReducer.flickr);
	const [index, setIndex] = useState(0);
	const pop = useRef(null);

	return (
		<>
			<section id='pics' className='myScroll'>
				<h1 style={
					position >= 0
						? { transform: `translateX(${position / 1.2}px)` }
						: null
				}>WHY MINI ? </h1>
				<ul className='list'>
					{pics.map((pic, idx) => {
						if (idx < 3) {
							return (
								<>
									<li
										key={idx}
										onClick={() => {
											setIndex(idx);
											pop.current.open();
										}}>
										<img
											src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`}
										/>
									</li>
								</>
							);
						}
					})}
				</ul>
				<section className="picBox1">
					<article id='PicsTextBox1'>
						<p className='PicsTitle'>INTERIOR</p>
						<p className='PicsText'>With MINI's unique interface design, <br/>you can feel a unique sensibility <br/>that is different from others.
						</p>
						<a href="http://localhost:3000/react-portfolio#/gallery">VIEW INTERIOR</a>
					</article>
					<article id='PicsTextBox2'>
						<p className='PicsTitle'>SPACE</p>
						<p className='PicsText'>The vehicle is small, the space is wide, and the MINI is not small in the vehicle. You'll know when you experience it.
						<a href="http://localhost:3000/react-portfolio#/gallery">VIEW SPACE</a>
						</p>
					</article>
					<article id='PicsTextBox3'>
						<p className='PicsTitle'>DESIGN</p>
						<p className='PicsText'>MINI's unique design always attracts attention wherever you go. Experience your own MINI that is not similar at all
						<a href="http://localhost:3000/react-portfolio#/gallery">VIEW DESIGN</a>
						</p>
					</article>

				</section>

			</section>

			<Popup ref={pop}>
				{pics.length !== 0 && (
					<>
						<img
							src={`https://live.staticflickr.com/${pics[index].server}/${pics[index].id}_${pics[index].secret}_b.jpg`}
						/>
						<span className='close' onClick={() => pop.current.close()}>
							close
						</span>
					</>
				)}
			</Popup>
		</>
	);
}

export default Pics;
