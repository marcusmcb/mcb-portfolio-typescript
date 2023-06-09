import ProjectDetail from './ProjectDetail'

import heroMobile from '../../images/portfolio/hue/hue_preview.png'
import heroTablet from '../../images/portfolio/hue/hue_preview.png'
import heroDesktop from '../../images/portfolio/hue/hue_banner_wide.png'

const Hue = (): JSX.Element => {
	return (
		<ProjectDetail
			heroImages={[heroMobile, heroTablet, heroDesktop]}
			title='Hue'
			description={
				<>
					This is a Node script that integrates with the Twitch platform to
					offer viewers an array of chat commands to control any Hue smart
					lighting devices that the streamer currently has connected. The script
					requires at least one Hue fixture as well the accompanying Bridge
					component and can be configured to run locally or online via proxy.
				</>
			}
			keywords={['Live Streaming', 'Web Scraping', 'Data Analytics']}
			technologies={['Node', 'TMI.js', 'Twitch', 'Serato']}
			link={['https://github.com/marcusmcb/philips-hue-twitch-chat-control']}
			background={
				<>
					Glancing around my portfolio, it's no secret that I'm a fan of
					interactive "bot" commands for various streaming platforms. The
					integrations are seemingly endless at times, and one that's become
					common in recent years has been the ability for users to control a
					streamer's smart lighting.
					<br />
					<br />
					To test and integrate this functionality into my own channel, I
					decided to experiment a bit with Philips's Hue smart bulbs and bridge
					component, both of which you'll need to utilize the code for this
					script. The script features commands for various static lighting
					options (by color, etc), a command to randomize the lighting color, as
					well as a morph command which triggers a "color loop" within the Hue
					device and sets the color to change over time. The script is
					configured to control a single Hue fixture but can be expanded to
					include many automated lighting effects with the additional of second
					(or more) Hue fixture.
					<br />
					<br />
					Rate limiting per user is also integrated to prevent spamming/abuse of
					the command when live-streaming. The script can be cloned and run
					locally via Nodemon or, if desired, can be configured to run online
					via proxy.
				</>
			}
			preview1={[]}
			preview2={[]}
			next='JSP-1'
			previous='RemixArkive'
		/>
	)
}

export default Hue
