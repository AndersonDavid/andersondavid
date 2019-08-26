import React from 'react';
import { useDispatch } from 'react-redux';

function ButtonList() {
	const dispatch = useDispatch();

	const changePage = (pageNumber, e) => {
		
		document.querySelectorAll('button').forEach(item => item.style.color = '#999999')
		e.target.style.color = '#ffffff';
		

		dispatch({
			type: 'CHANGE_PAGE',
			pageNumber,
		})
	}

	return (
		<div className='container-btns'>
			<ul>
				<li>
					<button
						className='btn-navigate active material-icons'
						id='btn-1'
						onClick={(e) => changePage(1, e)}>
						home
				    </button>
				</li>
				<li>
					<button
						className='btn-navigate material-icons'
						id='btn-2'
						onClick={(e) => changePage(2, e)}>
						face
				    </button>
				</li>
				<li>
					<button
						className='btn-navigate material-icons'
						id='btn-3'
						onClick={(e) => changePage(3, e)}>
						email
				    </button>
				</li>
				<li>
					<button
						className='btn-navigate material-icons'
						id='btn-4'
						onClick={(e) => changePage(4, e)}>
						language
				    </button>
				</li>
			</ul>
		</div>

	)
}

export default ButtonList;