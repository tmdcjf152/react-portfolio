// 멤버데이터
export const setMembers = (member) => {
	return {
		type: 'SET_MEMBERS',
		payload: member,
	};
};

// 유튜브 데이터
export const setYoutube = (data) => {
	return {
		type: 'SET_YOUTUBE',
		payload: data,
	};
};
// 갤러리 데이터
export const setFlickr = (data) => {
	return {
		type: 'SET_FLICKR',
		payload: data,
	};
};