import React from 'react';
import { useDataLayerValue } from '../DataLayer';
import './Body.css';
import Header from './Header.jsx';
import SongRow from './SongRow.jsx';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Body({ spotify }) {
	const [{ discover_weekly }, dispatch] = useDataLayerValue();

	return (
		<div className="body">
			<Header spotify={spotify} />

			<div className="body__info">
				<img src={discover_weekly?.images[0].url} alt="" />
				<div className="body__infoText">
					<strong>PLAYLIST</strong>
					<h2>Discover Weekly</h2>
					<p>{discover_weekly?.description}</p>
				</div>
			</div>

			<div className="body__songs">
				<div className="body__icons">
					<PlayCircleFilledIcon className="body__shuffle" />
					<FavoriteIcon fontSize="large" />
					<MoreHorizIcon />
				</div>
				{/* List of songs */}
				{discover_weekly?.tracks.items.map((item) => (
					<SongRow track={item.track} />
				))}
			</div>
		</div>
	);
}

export default Body;
