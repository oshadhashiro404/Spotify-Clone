import { useEffect, useState } from 'react';
import Login from './Components/Login.jsx';
import { getTokenFromUrl } from './spotify';
import './App.css';
import './Components/Login.jsx';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Components/Player.jsx';
import { useDataLayerValue } from './DataLayer.js';

const spotify = new SpotifyWebApi();

function App() {
	// const [token, setToken] = useState(null);
	const [{ user, token }, dispatch] = useDataLayerValue();

	useEffect(() => {
		const hash = getTokenFromUrl();
		window.location.hash = '';

		const _token = hash.access_token;

		if (_token) {
			dispatch({
				type: 'SET_TOKEN',
				token: _token,
			});

			spotify.setAccessToken(_token);

			spotify.getMe().then((user) => {
				// console.log('👨‍🎨', user);
				dispatch({
					type: 'SET_USER',
					user: user,
				});
			});
			spotify.getUserPlaylists().then((playlists) => {
				dispatch({
					type: 'SET_PLAYLISTS',
					playlists: playlists,
				});
			});

			spotify.getPlaylist('37i9dQZEVXcQbMJeHn83JF').then((response) => {
				dispatch({
					type: 'SET_DISCOVER_WEEKLY',
					discover_weekly: response,
				});
			});
		}
	}, []);

	return (
		<div className="app">
			{token ? <Player spotify={spotify} /> : <Login />}
		</div>
	);
}

export default App;
