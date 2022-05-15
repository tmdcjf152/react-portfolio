import { forwardRef, useState, useImperativeHandle } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const Popup = forwardRef((props, ref) => {
	const [open, setOpen] = useState(false);
	useImperativeHandle(ref, () => {
		return {
			open: () => setOpen(true),
			close: () => setOpen(false),
		};
	});

	return (
		<AnimatePresence>
			{open && (
				<motion.aside
					className='pop'
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0 }}>
					<motion.div
						className='con'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, transition: { delay: 0.5 } }}
						exit={{ opacity: 0 }}>
						{props.children}
					</motion.div>
				</motion.aside>
			)}
		</AnimatePresence>
	);
});
export default Popup;