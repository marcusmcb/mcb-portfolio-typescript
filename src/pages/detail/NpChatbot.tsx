import ProjectDetail from './ProjectDetail'

import heroMobile from '../../images/detail/mobile/image-manage-hero@2x.jpg'
import heroTablet from '../../images/detail/tablet/image-manage-hero@2x.jpg'
import heroDesktop from '../../images/detail/desktop/image-manage-hero@2x.jpg'

import previewMobile1 from '../../images/detail/mobile/image-manage-preview-1@2x.jpg'
import previewTablet1 from '../../images/detail/tablet/image-manage-preview-1@2x.jpg'
import previewDesktop1 from '../../images/detail/desktop/image-manage-preview-1@2x.jpg'

import previewMobile2 from '../../images/detail/mobile/image-manage-preview-2@2x.jpg'
import previewTablet2 from '../../images/detail/tablet/image-manage-preview-2@2x.jpg'
import previewDesktop2 from '../../images/detail/desktop/image-manage-preview-2@2x.jpg'

const NpChatBot = (): JSX.Element => {
	return (
		<ProjectDetail
			heroImages={[heroMobile, heroTablet, heroDesktop]}
			title='npChatBot'
			description={
				<>
					npChatBot is a Twitch-connected script for DJs that add a number of
					interactive commands to the user's channel. These commands enable the
					streamer's viewers to interact with their Serato play history,
					allowing them to display the currently playing track, any previously
					played track, the total tracks played so far, and several others.
					<br />
					<br />
					Built with Node, TMI.js, Axios/Cheerio, and Serato's Live Playlists
					feature.
				</>
			}
			keywords={['Live Streaming', 'Web Scraping', 'Data Analytics']}
			technologies={['Node', 'TMI.js', 'Cheerio', 'Twitch', 'Serato']}
			link={['https://github.com/marcusmcb/serato-nowplaying-twitch']}
			background={
				<>
					For DJ streams on interactive platforms like Twitch, the "now playing"
					command (or variations of it) is a fairly common one with several bot
					integrations readily available and easily installed.
					<br />
					<br />
					Where npChatBot differs is in its ability to go beyond just the
					currently playing track. It adds a level of interactivity to a
					live-streamer's chat and gives DJs streaming on the platform the
					ability to let their viewers take a deep dive into their playlists in
					real-time.
					<br />
					<br />
					Presently, the npChatBot suite can be cloned and run locally as a
					simple Node script, hosted via the cloud (my own bot is currently
					running on Heroku), or installed as an Electron app (still in
					development).
				</>
			}
			preview1={[previewMobile1, previewTablet1, previewDesktop1]}
			preview2={[previewMobile2, previewTablet2, previewDesktop2]}
			previous='CrateStats'
			next='RemixArkive'
		/>
	)
}

export default NpChatBot
