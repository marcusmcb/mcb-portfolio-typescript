import ProjectDetail from './ProjectDetail'

import heroMobile from '../../images/portfolio/twitchsafeplaylists/twitchsafeplaylists_preview.png'
import heroTablet from '../../images/portfolio/twitchsafeplaylists/twitchsafeplaylists_preview.png'
import heroDesktop from '../../images/portfolio/twitchsafeplaylists/twitchsafeplaylists_preview_wide.png'

// import previewMobile1 from '../../images/portfolio/twitchsafeplaylists_540.png'
// import previewTablet1 from '../../images/portfolio/twitchsafeplaylists_horiz.png'
// import previewDesktop1 from '../../images/portfolio/twitchsafeplaylists_horiz.png'

const TwitchSafePlaylists = (): JSX.Element => {
	return (
		<ProjectDetail
			heroImages={[heroMobile, heroTablet, heroDesktop]}
			title='Twitch Safe Playlists'
			description={
				<>
					This is a simple utility app that I've created for DJs who live-stream on Twitch that
					takes in an existing Spotify playlist link and returns a new one free
					of any music from the restricted artist list featured in Twitch's new
					DJ program.
					<br />
					<br />
					Built with React, AWS Lambda, and the Spotify API.
				</>
			}
			keywords={['Full Stack Development', 'Spotify API']}
			technologies={[
				'React',
				'AWS',
				'Lambda Functions',
				'API Gateway',
				'S3',
				'Cloudfront',
			]}
			link={['https://github.com/marcusmcb/twitch-safe-playlists-client']}
			external_link={['https://www.twitchsafeplaylists.com']}
			background={
				<>
					Twitch, the live-streaming platform, recently unveiled its DJ program
					which included a list of "restricted" artists whose music DJs are
					prevented from playing during their live streams, a limitation that
					has previously been absent from the platform.
					<br />
					<br />
					As such, the DJs who curate public playlists via Spotify from their
					viewers/followers for use in their live streams (for "community
					playlist" streams, etc) could be in a position where the playlists
					they're pulling music from may include songs/tracks that are now
					restricted from use.
					<br />
					<br />
					This simple web app solves the issue by taking in the supplied Spotify
					playlist link, validating each song against Twitch's published
					restricted artist list, and returning a new playlist that's ready to
					use for a DJ's next stream, free of any restricted artists' music.{' '}
					<br />
					<br />
					Additionally, while processing the tracks in the original Spotify
					playlist, TwitchSafePlaylists will also remove any included tracks
					that are not classified by the Spotify API as individual songs,
					filtering out any non-music items (podcast episodes, full albums, etc)
					from the resulting playlist link.
					<br />
					<br />
					The Lambda function that handles the playlist logic and creation has
					been tested and verified on Spotify playlists of up to 1,000 titles.
					Beyond that, the app will likely return an error response prompting
					the user to submit a different playlist link.
					<br />
					<br />
					The client app is built with React and is hosted and configured via AWS
					Cloudfront/S3, while the back-end song validation and playlist
					creation is handled by an AWS Lambda function (built with Node.js) and
					configured with an API Gateway to handle user requests.
				</>
			}
			preview1={[]}
			next='CrateStats'
			previous='Rent Study'
		/>
	)
}

export default TwitchSafePlaylists
