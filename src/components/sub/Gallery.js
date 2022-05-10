import Layout from '../common/Layout';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Popup from '../common/Popup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCouch } from '@fortawesome/free-solid-svg-icons';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { faGaugeHigh } from '@fortawesome/free-solid-svg-icons';



function Gallery() {
	const [pics, setPics] = useState([]);
	const [open, setOpen] = useState(false);
	const [index, setIndex] = useState(0);
	useEffect(() => {
		const key = '2b04d14206c0e0aa5938cef71f040bfc';
		const method_interest = 'flickr.favorites.getList';
		const num = 6;
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
				<div className="carprice">
					<h1>MINI COUNTRYMAN.</h1>
					<p className="price">￦ 40,300,000 ~</p>
					<p className="carOption">
						<span><FontAwesomeIcon icon={faCouch} /></span>
						five seats<br />
						<span><FontAwesomeIcon icon={faSuitcase} /></span>
						1,390L Trunk space<br />
						<span><FontAwesomeIcon icon={faGaugeHigh} /></span>
						136hp ~ 306hp
					</p>
					<h2>For Life</h2>
					<p className="forLife">Experience the amazing speed limit of SUVs that are small but not small.</p>
					<div className="carAdvantages">
						<div className="steat">
							<span>5</span>
							<p>Seats</p>
						</div>
						<div className="camera">
							<span>360°</span>
							<p>Camera</p>
						</div>
						<div className="performance">
							<span>250Km/h</span>
							<p>Performance</p>
						</div>
						<div className="zero">
							<span>5.1</span>
							<p>0~100km/h</p>
						</div>
					</div>
				</div>
				<div className="carpic">
					<div className="pic1">
						<h3>450 LITRES</h3>
						<p>MINI Countryman has a large loading space of up to 1,390 liters. Perfectly enjoy all your trips to the city and the suburbs. The folding function of the back seat creates a free space quickly and easily.</p>
					</div>
					<div className="pic2">
						<h3>1,000 LITRES</h3>
						<p>MINI Countryman has a large loading space of up to 1,390 liters. Perfectly enjoy all your trips to the city and the suburbs. The folding function of the back seat creates a free space quickly and easily.</p>
					</div>
					<div className="pic3">
						<h3>1,390 LITRES</h3>
						<p>MINI Countryman has a large loading space of up to 1,390 liters. Perfectly enjoy all your trips to the city and the suburbs. The folding function of the back seat creates a free space quickly and easily.</p>
					</div>
				</div>
				<div className="internal">
					<span className="feature">FEATURE HIGHLIGHTS.</span>
					<span className="featureText">MINI always thinks and studies for the future</span>
					<div className="seatPic">
						<span className="seatTitle">LECTRIC SEAT ADJUSTMENT WITH MEMORY</span>
						<p className='seatText'>MINI Countryman's electric memory seat allows you to enjoy a more comfortable and comfortable trip with a customized seat adjustment that fits you perfectly. A total of two different sheet settings can be stored in memory.</p>
					</div>
					<div className="internalPic">
						<span className="internalTitle">MULTIFUNCTIONAL INSTRUMENT DISPLAYE</span>
						<p className='internalText'>The sleek, modern, multi-functional display is positioned at your eye level to deliver the important information you need. The 5.0 inch screen effectively conveys details such as speed, fuel level, mileage, temperature and navigation.</p>
					</div>
					<div className="bonnetPic">
						<span className="bonnetTitle">REDESIGNED FRONT GRILLE</span>
						<p className='bonnetText'>MINI Countryman's majestic appearance has become more stylish with a finely trimmed front grill and a redesigned bumper.</p>
					</div>
					<div className="backPic">
						<span className="backTitle">REAR BUMPER DESIGN</span>
						<p className='backText'>MINI Countryman's rear design is also sleeker. Along with the body color, the brightly shining bumper adds a design balance and shows off a more intense and sporty charm.</p>
					</div>
					<div className="carPic">
						<span className="carTitle">Small but amazing performance MINI</span>
						<p className='carText'>A great performance awaits you in a small vehicle.
							The MINI is a powerful vehicle with a premium turbo engine.
							So far, small cars will let you get rid of the notion of slowness.</p>
					</div>
				</div>
				<div className="design">
					<span className="designTitle">COMPELLING. BY DESIGN.</span>
					<span className="designText">The combination of strong, firm charm and free spirit has created a versatile MINI that fits both city and off-road.<br /><br/>
						* Click on the image to learn more about MINI Countryman.</span>
				</div>
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

			{
				open ? (
					<Popup setOpen={setOpen}>
						<img
							src={`https://live.staticflickr.com/${pics[index].server}/${pics[index].id}_${pics[index].secret}_b.jpg`}
						/>
					</Popup>
				) : null
			}
		</>
	);
}
export default Gallery;