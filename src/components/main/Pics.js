function Pics(props) {
	//현재 스크롤 되는 거리값
	const scrolled = props.scrolled;
	//해당 섹션의 세로 위치값
	const start = props.start;
	//스크롤 위치 보정값
	const base = 400;
	const position = scrolled - start + base;

	return (
		<section id='pics' className='myScroll'>
		<h2
				style={

					position >= 0
						? { transform: `translateX(${position / 1.2}px)` }
						: null
				}>
				FLICKR
			</h2>
			<p
				style={
					position >= 0
						? {
								transform: `translateX(${position * 2}px) scale(${
									1 + position / 1000
								})`,
						  }
						: null
				}>
				FLICKR
			</p>
		</section>
	);
}
export default Pics;