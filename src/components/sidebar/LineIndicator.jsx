import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function LineIndicator() {
	const [indicatorHeight, setIndicatorHeight] = useState(1000);
	const { pageNumber } = useSelector(state => state);

	/* 	useEffect(()=>{
			setInterval(() => changeHeight(pageNumber), 1000)
		},[]) */

	useEffect(() => {
		changeHeight(pageNumber);
	}, [pageNumber])

	const changeHeight = (pageNumber) => {
		switch (pageNumber) {
			case 1:
				setIndicatorHeight(56);
				break;
			case 2:
				setIndicatorHeight(146);
				break;
			case 3:
				setIndicatorHeight(236);
				break;
			case 4:
				setIndicatorHeight(327);
				break;
			default:
				break;
		}
	}


	return (
		<div className='indicator'>
			<div className='indicator-fake' style={{ height: indicatorHeight + 'px'}}>
				<span></span>
			</div>
		</div>
	)
}

export default LineIndicator