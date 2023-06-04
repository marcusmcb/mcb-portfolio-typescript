import ProjectDetail from './ProjectDetail'

import heroMobile from '../../images/portfolio/npchatbot/npchatbot_preview.png'
import heroTablet from '../../images/portfolio/npchatbot/npchatbot_preview.png'
import heroDesktop from '../../images/portfolio/npchatbot/npchatbot_preview_wide.png'

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
			preview1={[]}
			preview2={[]}
			previous='CrateStats'
			next='RemixArkive'
		/>
	)
}

export default NpChatBot
