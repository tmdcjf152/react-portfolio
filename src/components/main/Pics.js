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


				<div className='picBox'>
					<div className="Box2">
						<ul className='list'>
							{pics.map((pic, idx) => {
								if (idx < 6) {
									return (
										<>

											<div className="Box3">
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

											</div>

										</>
									);
								}
							})}
						</ul>
						<a href="#">VIEW MORE</a>
					</div>
					<div className="Box1">
						<div className="textBox1">
							<p className='picTitle'>1. SAFETY</p>
							<p className='picText'> MINI, who has been rated first in safety, will protect your body from accidents.</p>
						</div>

						<div className="textBox2">
							<p className='picTitle'>2. SPACE</p>
							<p className='picText'>MINI is small, but it can free up a large space. You can hold up to 1,390L of your luggage.</p>
						</div>

						<div className="textBox3">
							<p className='picTitle'>3. DESIGN</p>
							<p className='picText'> MINI has its own design. It's a car with a unique design that can't be seen by any brand and a compact design.</p>
						</div>

					</div>
				</div>
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
