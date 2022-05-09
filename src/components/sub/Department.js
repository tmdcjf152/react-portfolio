import Layout from '../common/Layout';
import { useEffect, useState } from 'react';
import axios from 'axios';
const path = process.env.PUBLIC_URL;

function Department() {
	const [members, setMembers] = useState([]);

	useEffect(() => {
		axios.get(`${path}/DB/member.json`).then((json) => {
			console.log(json.data.members);
			setMembers(json.data.members);
			console.log(members);
		});
	}, []);

	return (
		<Layout name={'Department'}>
			<ul className='memberList'>
				{members.map((member, idx) => {
					return (
						<li key={idx}>
							<div className='inner'>
								<div className="department_pic">
									<img src={`${path}/img/member/${member.pic}`} />
								</div>
								<p>{member.position}</p>
								<h2>{member.name}</h2>
								<p>{member.since}</p>

								<div id="history">
									<p className="since">{member.since1969}</p>
									<p className="history">{member.history1969}</p>
									<p className="since">{member.since1974}</p>
									<p className="history">{member.history1974}</p>
									<p className="since">{member.since1990}</p>
									<p className="history">{member.history1990}</p>
									<p className="since">{member.since1994}</p>
									<p className="history">{member.history1994}</p>
									<p className="since">{member.since2000}</p>
									<p className="history">{member.history2000}</p>
									<p className="since">{member.since2006}</p>
									<p className="history">{member.history2006}</p>
									<p className="since">{member.since2007}</p>
									<p className="history">{member.history2007}</p>
									<p className="since">{member.since2008}</p>
									<p className="history">{member.history2008}</p>
									<p className="since">{member.since2014}</p>
									<p className="history">{member.history2014}</p>
									<p className="since">{member.since2018}</p>
									<p className="history">{member.history2018}</p>
									<p className="since">{member.since2022}</p>
									<p className="history">{member.history2022}</p>
								</div>

							</div>
						</li>
					);
				})}
			</ul>
		</Layout>
	);
}

export default Department;