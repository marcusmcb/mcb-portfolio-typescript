import ProjectDetail from './ProjectDetail'

import heroMobile from '../../images/portfolio/twitchbot/twitchbot_header_mobile.png'
import heroTablet from '../../images/portfolio/twitchbot/twitchbot_header.png'
import heroDesktop from '../../images/portfolio/twitchbot/twitchbot_header_wide.png'

import previewMobile1 from '../../images/detail/mobile/image-manage-preview-1@2x.jpg'
import previewTablet1 from '../../images/detail/tablet/image-manage-preview-1@2x.jpg'
import previewDesktop1 from '../../images/detail/desktop/image-manage-preview-1@2x.jpg'

import previewMobile2 from '../../images/detail/mobile/image-manage-preview-2@2x.jpg'
import previewTablet2 from '../../images/detail/tablet/image-manage-preview-2@2x.jpg'
import previewDesktop2 from '../../images/detail/desktop/image-manage-preview-2@2x.jpg'

const TwitchBot = (): JSX.Element => {
	return (
		<ProjectDetail
			heroImages={[heroMobile, heroTablet, heroDesktop]}
			title='Twitch Bot'
			description={
				<>
					This is a custom chatbot solution that I built for my own Twitch
					channel. It features a number of API-connected commands (dad jokes,
					quotes, weather look-up), user-interactive games (Magic 8-Ball,
					Rock-Paper-Scissors), and a command "cool-off" feature to prevent
					viewer overuse/abuse. <br />
					<br />
					Built with Node, TMI.js, and the Twitch API.
				</>
			}
			keywords={['Live Streaming', 'Chat Bot', 'Interactive']}
			technologies={['Javascript', 'Node', 'Twitch API', 'TMI.js']}
			link={['https://www.twitch.tv/djmarcusmcb']}
			external_link={['https://www.twitch.tv/djmarcusmcb']}
			background={<>Twitch Chat Bot Background</>}
			preview1={[previewMobile1, previewTablet1, previewDesktop1]}
			preview2={[previewMobile2, previewTablet2, previewDesktop2]}
			next='Responsive Elements'
			previous='JSP-1'
		/>
	)
}

export default TwitchBot
