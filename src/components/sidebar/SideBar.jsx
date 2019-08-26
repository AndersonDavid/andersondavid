import React from 'react';

import ButtonList from './ButtonList'
import LineIndicator from './LineIndicator'
import './sidebar.css';


function SideBar() {

	return (
		<div className='container'>
			<ButtonList />
			<LineIndicator />
		</div>
	)

}

export default SideBar;
