import ProjectDetail from './ProjectDetail'

import heroMobile from '../../images/portfolio/twitchbot/twitchbot_header_mobile.png'
import heroTablet from '../../images/portfolio/twitchbot/twitchbot_header_mobile.png'
import heroDesktop from '../../images/portfolio/twitchbot/twitchbot_header.png'

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
			description={<>Twitch Chat Bot Description</>}
			keywords={['Live Streaming', 'Twitch', 'Chat Bot']}
			technologies={['Javascript', 'Node', 'TMI.js']}
			link={['https://www.twitch.tv/djmarcusmcb']}
			background={<>Twitch Chat Bot Background</>}
			preview1={[previewMobile1, previewTablet1, previewDesktop1]}
			preview2={[previewMobile2, previewTablet2, previewDesktop2]}
			next='Responsive Elements'
			previous='JSP-1'
		/>
	)
}

export default TwitchBot
