
import Layout from '../common/Layout';
import { useRef, useState, useEffect } from 'react';

function Community() {
	const input = useRef(null);
	const textarea = useRef(null);
	const editInput = useRef(null);
	const editTextarea = useRef(null);

	const getLocalData = () => {
		const data = localStorage.getItem('post');
		return JSON.parse(data);
	};

	const [posts, setPosts] = useState(getLocalData());
	const [allowed, setAllowed] = useState(true);

	const createPost = () => {
		if (!input.current.value.trim() || !textarea.current.value.trim()) {
			alert('제목과 본문을 입력하세요.');
			return;
		}

		setPosts([
			{ title: input.current.value, content: textarea.current.value },
			...posts,
		]);
		resetPost();
	};

	const resetPost = () => {
		input.current.value = '';
		textarea.current.value = '';
	};

	const deletePost = (index) => {
		setPosts(posts.filter((_, idx) => idx !== index));
	};

	const enableUpdate = (index) => {
		setAllowed(false);
		setPosts(
			posts.map((post, idx) => {
				if (idx === index) post.enableUpdate = true;
				return post;
			})
		);
	};

	const disableUpdate = (index) => {
		setAllowed(true);
		setPosts(
			posts.map((post, idx) => {
				if (idx === index) post.enableUpdate = false;
				return post;
			})
		);
	};

	const updatePost = (index) => {
		if (!editInput.current.value.trim() || !editTextarea.current.value.trim()) {
			alert('수정할 제목과 본문을 입력하세요.');
			return;
		}
		setAllowed(true);

		setPosts(
			posts.map((post, idx) => {
				if (idx === index) {
					post.title = editInput.current.value;
					post.content = editTextarea.current.value;
					post.enableUpdate = false;
				}
				return post;
			})
		);
	};

	useEffect(() => {
		localStorage.setItem('post', JSON.stringify(posts));
	}, [posts]);

	return (
		<Layout name={'Community'}>
			<div className="communityBanner">
				<h2 className="bannerTitle">
					MINI Car Price Quotation
				</h2>
				<p className="bannerText">I'll help you make a reasonable purchase.</p>
			</div>

			< div className="Box">
				<div className='inputBox'>
					<h2>Quotation application form</h2>
					<input type='text' placeholder='Name' ref={input} />
					<br />
					<textarea
						ref={textarea}
						cols='30'
						rows='10'
						placeholder='Tel &#10;E-mail &#10;Please enter the contact information and email to be contacted: '></textarea>
					<br />

					<button onClick={resetPost}>cancel</button>
					<button onClick={createPost}>create</button>
					<span>✓ E-quotes received by email may differ from on-site estimates.<br/> If you want an accurate estimate, please apply for a telephone estimate.</span>
				</div>

				<div className='showBox'>
					<div className="showBoxTitle">
						Quote application details
					</div>
					{posts.map((post, idx) => {
						return (
							<article key={idx}>
								{post.enableUpdate ? (
									//수정부분
									<>
										<input
											type='text'
											defaultValue={post.title}
											ref={editInput}
										/>
										<br />
										<textarea
											ref={editTextarea}
											cols='30'
											rows='10'
											defaultValue={post.content}></textarea>

										<div className='btns'>
											<button onClick={() => disableUpdate(idx)}>cancel</button>
											<button onClick={() => updatePost(idx)}>save</button>
										</div>
									</>
								) : (
									//출력부분
									<>
										<h2>{post.title}</h2>
										<p>{post.content}</p>

										<div className='btns'>
											<button
												onClick={() => {
													if (allowed) enableUpdate(idx);
												}}>
												edit
											</button>
											<button onClick={() => deletePost(idx)}>delete</button>
										</div>
									</>
								)}
							</article>
						);
					})}
				</div>
			</ div>

		</Layout>
	);
}

export default Community;
