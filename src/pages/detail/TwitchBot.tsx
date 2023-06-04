import ProjectDetail from './ProjectDetail'

import heroMobile from '../../images/portfolio/twitchbot/twitchbot_header_mobile.png'
import heroTablet from '../../images/portfolio/twitchbot/twitchbot_header.png'
import heroDesktop from '../../images/portfolio/twitchbot/twitchbot_header_wide_01.png'

import StrongText from '../../components/StrongText'
import ItalicText from '../../components/ItalicText'

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
			link={['https://github.com/marcusmcb/twitch-chat-bot']}
			external_link={['https://www.twitch.tv/djmarcusmcb']}
			background={
				<>
					In 2020, with the COVID pandemic effectively shutting down most live,
					in-person events across the country, most of my colleagues in the DJ
					community dabbled with the idea of live-streaming. After dealing with
					the DMCA pratfalls of various social media platforms, the DJ community
					eventually landed en masse on Twitch which was one of the few
					platforms to be (mostly) free of the IPR hurdles experienced with
					others.
					<br />
					<br />I was no different, and after some time I'd pieced together a
					fairly respectable setup which made the process interactive and{' '}
					<ItalicText>a lot </ItalicText>
					of fun. To make things a bit more "interactive", I decided to create a
					chat bot script for my channel, having been impressed by the options
					available but looking for a bit more customization.
					<br />
					<br />
					This script features a number of API integrations within the command's
					responses, such as the ability to look up weather conditions or return
					a "dad joke" or famous quote to the chat. Other commands are based on
					custom responses, such as a "rock paper scissors" game that generates
					a random selection based on the user's command selection, and a "Magic
					8 Ball" command that will randomly generate a response to a yes-or-no
					query.
					<br />
					<br />
					The Node script powering the chat bot is run and hosted via Heroku and
					can be tested any time by visiting my Twitch channel, navigating to
					the stream chat by clicking my username, and entering{' '}
					<StrongText>!commands</StrongText>.
				</>
			}
			preview1={[]}
			preview2={[]}
			next='Responsive Elements'
			previous='JSP-1'
		/>
	)
}

export default TwitchBot
