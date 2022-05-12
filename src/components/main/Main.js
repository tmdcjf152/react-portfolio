import Header from '../common/Header';
import Visual from './Visual';
import Content from './Content';
import Pics from './Pics';
import Vids from './Vids';
// import Btns from './Btns';
import Anime from '../../class/Anime.js';
import { useRef, useEffect, useState } from 'react';

function Main() {
	const main = useRef(null);
	const pos = useRef([]);
	const [index, setIndex] = useState(0);
	const [num, setNum] = useState([]);
	const [scrolled, setScrolled] = useState(0);

	const getPos = () => {
		const secs = main.current.querySelectorAll('.myScroll')
		pos.current = [];
		for (const sec of secs) pos.current.push(sec.offsetTop);
	};

	const activation = () => {
		const base = -200;
		const scroll = window.scrollY;
		setScrolled(scroll)
		const btns = main.current.querySelectorAll('.scroll_navi li');
		const secs = main.current.querySelectorAll('.myScroll');

		pos.current.map((pos, idx) => {
			if (scroll >= pos + base) {
				for (let i = 0; i < secs.length; i++) {
					btns[i].classList.remove('on');
					secs[i].classList.remove('on');
				}
				btns[idx].classList.add('on');
				secs[idx].classList.add('on');
			}
		});
	};

	useEffect(() => {
		const secs = main.current.querySelectorAll('.myScroll');
		setNum(secs.length);
		getPos();
		window.addEventListener('resize', () => getPos);
		return () => window.removeEventListener('resize', getPos);
	}, []);

	useEffect(() => {
		new Anime(window, {
			prop: 'scroll',
			value: pos.current[index],
			duration: 500,
		});
	}, [index]);

	return (
		<main ref={main}>
			<Header type={'main'} />
			<Visual />
			<Content />
			<Pics scrolled={scrolled} start={pos.current[2]}/>
			<Vids />
			{/* <Btns setIndex={setIndex} num={num} /> */}
		</main>
	);
}
export default Main;