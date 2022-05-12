// function Btns(props) {
// 	const arr = Array.from(Array(props.num).keys());

// 	return (
// 		<ul className='scroll_navi'>
// 			{arr.map((_, idx) => {
// 				let active = '';
// 				idx === 0 ? (active = 'on') : (active = '');

// 				return (
// 					<li
// 						key={idx}
// 						className={active}
// 						onClick={() => props.setIndex(idx)}></li>
// 				);
// 			})}
// 		</ul>
// 	);
// }
// export default Btns;