import { Utils } from '../../common/utils';

export class TracksListComponent {
	tracks = [];

	/**
	 * @param {Track[]} tracks
	 */
	constructor(tracks) {
		this.tracks = tracks;
	}

	render() {
		return this.tracks.map(track => {
			return `
				<li id="track">
					<div>
						<i class="material-icons play-btn">play_arrow</i>
						<span>${track.name}</span>
					</div>
					<span>${Utils.msToMinutes(track.track_duration)}</span>
				</li>
			`;
		}).join('');
	}
}
