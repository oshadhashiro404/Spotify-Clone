import React from 'react';
import Sidebar from './Sidebar.jsx';
import Body from './Body.jsx';
import Footer from './Footer.jsx';
import './Player.css';

function Player({ spotify }) {
	return (
		<div className="player">
			<div className="player__body">
				<Sidebar />
				<Body spotify={spotify} />
			</div>

			<Footer />
		</div>
	);
}

export default Player;
