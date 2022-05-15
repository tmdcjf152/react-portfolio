import { useSelector } from 'react-redux';
const path = process.env.PUBLIC_URL;

function Member() {
    const members = useSelector((store) => store.memberReducer.members);
  return (
    <section id="members" className='myScroll'>Member
    <div className='members'>
					{members.map((member, idx) => (
						<img key={idx} src={`${path}/img/member/${member.pic}`} />
					))}
				</div></section>
    
  )
}

export default Member