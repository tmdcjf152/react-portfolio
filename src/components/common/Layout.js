
import { useEffect, useRef } from 'react';
const path = process.env.PUBLIC_URL;
function Layout(props) {
	const frame = useRef(null);
	useEffect(() => {
		frame.current.classList.remove('on');
		frame.current.classList.add('on');
	}, []);

	return (
		<>
		<section className={`content ${props.name}`} ref={frame}>
			<figure></figure>
			<div className='inner'>
				{props.children}
			</div>
		</section>
		</>
	);
}
export default Layout;