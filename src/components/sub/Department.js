
import Layout from '../common/Layout';
import { useEffect, useState } from 'react';
import axios from 'axios';
import pic1 from '../../src_assets/logo.png'
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
			<div className="departmentBanner">
				<h2 className="departmentTitle">
					MINI COUNTRYMAN.
				</h2>
				<p className="departmentText">MINI's unique SUV.</p>
			</div>

			<div className="logostory">
				<div className="pic">
					<img src={pic1} alt="" />
				</div>
				<div className="story">
					<p className="storyTitle">Maximise The Experience While Focussing On The Essential
					</p>
					<p className="storyText">
						The clever solution of commercial design encourages a life<br /> full of meaningful experiences MINI opens the city to personal needs.
					</p>
					<p className="storyTitle">MINI EXUDES PASSION
					</p>
					<p className="storyText">
						MINI is honest, sincere and honest. <br />MIN combines creativity and smartness to provide an open platform <br />for people, design, and vibrant urban life. <br />MINI's energetic attitude toward life inspires people
					</p>
					<p className="storyTitle">REINVENTING URBAN LIFE - THE MINI WAY
					</p>
					<p className="storyText">
						The clever solution of commercial design encourages a life<br /> full of meaningful experiences MINI opens the city to personal needs.
					</p>

				</div>
			</div>
			<ul className='memberList'>
				{members.map((member, idx) => {
					return (
						<li key={idx}>
							<div className='listBox'>	
							<div className="profile">
									<p>{member.position}</p>
									<h2>{member.name}</h2>
									<p>{member.since}</p>
								</div>
								<div className="department_pic">
									<img src={`${path}/img/member/${member.pic}`} />
								</div>
							

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