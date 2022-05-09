function Popup(props) {
	return (
		<aside className='pop'>
			<div className='con'>
				{props.children}
				<span className='close' onClick={() => props.setOpen(false)}>
					close
				</span>
			</div>
		</aside>
	);
}
export default Popup;