import React from 'react';

import SwitchPages from './SwitchPages'
import './Content.css'
import './pages/pages.css'

function Content() {
	return (
		<div className='content-main'>
			<div className='limites-page'>
				<SwitchPages />
			</div>
		</div>
	)
}

export default Content