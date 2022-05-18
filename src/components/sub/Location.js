import Layout from '../common/Layout';
import { useRef, useEffect, useState } from 'react';
const path = process.env.PUBLIC_URL;
function Locaition() {
	const { kakao } = window;
	const container = useRef(null);
	const branch = useRef(null);
	const info = [
		{
			title: 'Barbarian Motors Ilsan',
			latlng: new kakao.maps.LatLng(37.654937, 126.7744869),
			imgSrc: `${path}/img/marker.png`,
			imgSize: new kakao.maps.Size(110, 110),
			imgPos: { offset: new kakao.maps.Point(116, 99) },
		},
		{
			title: 'Barbarian Motors Mokdong',
			latlng: new kakao.maps.LatLng(37.5245556, 126.8716111),
			imgSrc: `${path}/img/marker.png`,
			imgSize: new kakao.maps.Size(110, 110),
			imgPos: { offset: new kakao.maps.Point(116, 99) },
		},
		{
			title: 'Barbarian Motors Gyeyang',
			latlng: new kakao.maps.LatLng(37.4873323, 127.0095449),
			imgSrc: `${path}/img/marker.png`,
			imgSize: new kakao.maps.Size(110, 110),
			imgPos: { offset: new kakao.maps.Point(116, 99) },
		},
		{
			title: 'Kolon Motors seocho',
			latlng: new kakao.maps.LatLng(37.4873323, 127.0095449),
			imgSrc: `${path}/img/marker.png`,
			imgSize: new kakao.maps.Size(110, 110),
			imgPos: { offset: new kakao.maps.Point(116, 99) },
		},
		{
			title: 'Kolon Motors Bucheon',
			latlng: new kakao.maps.LatLng(37.5205414, 127.0324655),
			imgSrc: `${path}/img/marker.png`,
			imgSize: new kakao.maps.Size(110, 110),
			imgPos: { offset: new kakao.maps.Point(116, 99) },
		},
		{
			title: 'Kolon Motors Samsung',
			latlng: new kakao.maps.LatLng(37.5013691, 127.0666322),
			imgSrc: `${path}/img/marker.png`,
			imgSize: new kakao.maps.Size(110, 110),
			imgPos: { offset: new kakao.maps.Point(116, 99) },
		},
		{
			title: 'Deutsche Motors Gangnam',
			latlng: new kakao.maps.LatLng(37.5205414, 127.0324655),
			imgSrc: `${path}/img/marker.png`,
			imgSize: new kakao.maps.Size(110, 110),
			imgPos: { offset: new kakao.maps.Point(116, 99) },
		},
		{
			title: 'Deutsche Motors Yongsan',
			latlng: new kakao.maps.LatLng(37.5303597, 126.9693814),
			imgSrc: `${path}/img/marker.png`,
			imgSize: new kakao.maps.Size(110, 110),
			imgPos: { offset: new kakao.maps.Point(116, 99) },
		},
		{
			title: 'Deutsche Motors Bundang',
			latlng: new kakao.maps.LatLng(37.3569129, 127.1021362),
			imgSrc: `${path}/img/marker.png`,
			imgSize: new kakao.maps.Size(110, 110),
			imgPos: { offset: new kakao.maps.Point(116, 99) },
		},

	];
	const [map, setMap] = useState(null);
	const [mapInfo] = useState(info);
	const [traffic, setTraffic] = useState(false);
	const [index, setIndex] = useState(0);
	useEffect(() => {
		container.current.innerHTML = '';

		container.current.innerHTML = '';
		const options = {
			center: mapInfo[index].latlng,
			level: 3,
		};
		const map_instance = new kakao.maps.Map(container.current, options);
		setMap(map_instance);
		const markerPosition = mapInfo[index].latlng;
		const imageSrc = mapInfo[index].imgSrc;
		const imageSize = mapInfo[index].imgSize;
		const imageOption = mapInfo[index].imgPos;
		const markerImage = new kakao.maps.MarkerImage(
			imageSrc,
			imageSize,
			imageOption
		);
		const marker = new kakao.maps.Marker({
			position: markerPosition,
			image: markerImage,
		});
		marker.setMap(map_instance);
		const branch_li = branch.current.querySelectorAll('li');
		for (const btn of branch_li) btn.classList.remove('on');
		branch_li[index].classList.add('on');

		const mapTypeControl = new kakao.maps.MapTypeControl();
		map_instance.addControl(
			mapTypeControl,
			kakao.maps.ControlPosition.TOPRIGHT
		);


		const zoomControl = new kakao.maps.ZoomControl();
		map_instance.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

		const mapInit = () => {
			map_instance.setCenter(mapInfo[index].latlng);
		};

		window.addEventListener('resize', mapInit);
		return () => {
			window.removeEventListener('resize', mapInit);
		};
	}, [index]);
	useEffect(() => {
		if (map) {
			traffic
				? map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)
				: map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
		}
	}, [traffic]);
	return (
		<Layout name={'Location'}>
			<div className="locationBanner">
				<h2 className="bannerTitle">
					MINI Exhibition Hall
				</h2>
				<p className="bannerText">MINI is always close to you</p>
			</div>
			<div className="showRoom">
				<div className="showRoom1">
					<div className="showRoomPic1"></div>
					<div className="showRoomText1">Meet all kinds of MINI<br /> in the nearby showroom<br/><span>Always check your nearest showroom for new vehicles <br/>We will offer good conditions to customers who have a <br/>purchase plan.</span></div>
				</div>
				<div className="showRoom2">
					<div className="showRoomPic2"></div>
					<div className="showRoomText2">Various events are held in the showroom.<br/><span>MINI always holds various events and experiences for customer <br/>satisfaction. Anyone who loves MINI can participate.</span></div>
				</div>
				<div className="showRoom3">
					<div className="showRoomPic3"></div>
					<div className="showRoomText3">Try a test drive before you buy it<span>If you book a test drive experience in a nearby exhibition hall, <br/>we will help you with the 1:1 coaching service. Let's experience <br/>why people all over the world ride MINI</span></div>
				</div>
			</div>
			<p className='centerTitle'>EXHIBITION HALL</p>
			<div id='map' ref={container}>
			</div>
			<button onClick={() => setTraffic(!traffic)}>
				{traffic ? 'Traffic OFF' : 'Traffic ON'}
			</button>
			<ul className='branch' ref={branch}>
				{mapInfo.map((item, idx) => {
					return (
						<li key={idx} onClick={() => setIndex(idx)}>
							{item.title}
						</li>
					);
				})}
			</ul>
		</Layout>
	);
}
export default Locaition;