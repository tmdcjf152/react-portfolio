import Layout from '../common/Layout';
import { useSelector } from 'react-redux';
import { useState, useRef } from 'react';
import Popup from '../common/Popup';
const path = process.env.PUBLIC_URL;

function Department() {
	const pop = useRef(null);
	const [index, setIndex] = useState(0);
	const members = useSelector((store) => store.memberReducer.members);

	return (
		<>
			<Layout name={'Department'}>
				<ul className='memberList'>
					{members.map((member, idx) => {
						return (
							<li
								key={idx}
								onClick={() => {
									setIndex(idx);
									pop.current.open();
								}}>
								<div className='inner'>
									<img src={`${path}/img/${member.pic}`} />
									<h2>{member.name}</h2>
									<p>{member.position}</p>
								</div>
							</li>
						);
					})}
				</ul>
			</Layout>

			<Popup ref={pop}>
				{members.length !== 0 && (
					<>
						<img src={`${path}/img/${members[index].pic}`} />
						<span className='close' onClick={() => pop.current.close()}>
							close
						</span>
					</>
				)}
			</Popup>
		</>
	);
}

export default Department;