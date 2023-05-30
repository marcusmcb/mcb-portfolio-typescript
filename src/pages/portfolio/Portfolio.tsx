import styles from './styles/Portfolio.module.css'
import { useEffect } from 'react'
import SectionThree from '../homepage/SectionThree'
import Project from './Project'

import cratestatsMobile from '../../images/portfolio/cratestats/cratestats_preview.png'
import cratestatsTablet from '../../images/portfolio/cratestats/cratestats_preview.png'
import cratestatsDesktop from '../../images/portfolio/cratestats/cratestats_preview.png'

import npchatbotMobile from '../../images/portfolio/npchatbot/npchatbot_preview.png'
import npchatbotTablet from '../../images/portfolio/npchatbot/npchatbot_preview.png'
import npchatbotDesktop from '../../images/portfolio/npchatbot/npchatbot_preview.png'

import hueMobile from '../../images/portfolio/hue/hue_preview.png'
import hueTablet from '../../images/portfolio/hue/hue_preview.png'
import hueDesktop from '../../images/portfolio/hue/hue_preview.png'

import remixarkiveMobile from '../../images/portfolio/remixarkive/remixarkive_preview.png'
import remixarkiveTablet from '../../images/portfolio/remixarkive/remixarkive_preview.png'
import remixarkiveDesktop from '../../images/portfolio/remixarkive/remixarkive_preview.png'

import twitchbotMobile from '../../images/portfolio/twitchbot/twitchbot_preview.png'
import twitchbotTablet from '../../images/portfolio/twitchbot/twitchbot_preview.png'
import twitchbotDesktop from '../../images/portfolio/twitchbot/twitchbot_preview.png'

import rentstudyMobile from '../../images/portfolio/rentstudy/rentstudy_preview.png'
import rentstudyTablet from '../../images/portfolio/rentstudy/rentstudy_preview.png'
import rentstudyDesktop from '../../images/portfolio/rentstudy/rentstudy_preview.png'

import jsp1Mobile from '../../images/portfolio/jsp1/jsp1_preview.png'
import jsp1Tablet from '../../images/portfolio/jsp1/jsp1_preview.png'
import jsp1Desktop from '../../images/portfolio/jsp1/jsp1_preview.png'

import responsiveMobile from '../../images/portfolio/responsive/responsive_preview.png'
import responsiveTablet from '../../images/portfolio/responsive/responsive_preview.png'
import responsiveDesktop from '../../images/portfolio/responsive/responsive_preview.png'

export default function Portfolio(): JSX.Element {
	useEffect(() => {
		document.title = 'MCB Portfolio | Projects'
		window.scrollTo(0, 0)
	}, [])
	return (
		<main className={styles.main}>
			<Project.Right
				title='CrateStats'
				description={
					<>
						CrateStats is a data analytics platform currently in development.
						The goal of this project is to give the DJ community a dedicated
						resource for playlist analysis and performance insight across
						multiple DVS platforms. <br />
						<br />
						Support for Serato, Serato Live Playlists, Traktor, and Rekordbox is
						currently included. Built with React, Material UI, Node, and GCP.
					</>
				}
				screenshots={[cratestatsMobile, cratestatsTablet, cratestatsDesktop]}
				param='CrateStats'
			/>
			<Project.Left
				title='npChatBot'
				description={
					<>
						This chat-bot adds a set of command features to your Twitch streams
						that allow viewers to interact with your Serato live playlist (via
						web scrape). Features within the bot allow viewers to display the
						current track playing, any previous track played, the total number
						of tracks played so far, along with a "vibe check" which returns a
						random selection from the play history and when it was played.
						<br />
						<br />
						Built with Node, TMI.js, Axios/Cheerio, and Electron.
					</>
				}
				screenshots={[npchatbotMobile, npchatbotTablet, npchatbotDesktop]}
				param='npChatBot'
			/>
			<Project.Right
				title='RemixArkive'
				description={
					<>
						RemixArkive is an automated script that uses Twitter to tweet out
						links to rare, unusual, or hard-to-find remixed versions of songs.
						<br />
						<br />
						Built with Node, Heroku, and the Twitter API.
					</>
				}
				screenshots={[remixarkiveMobile, remixarkiveTablet, remixarkiveDesktop]}
				param='RemixArkive'
			/>
			<Project.Left
				title='Philips Hue Smart Lighting Control'
				description={
					<>
						This is a chat-bot script that integrates with the Twitch platform
						to offer viewers an array of chat commands to control any Hue smart
						lighting devices that the streamer currently has connected. The
						script requires at least one Hue fixture as well the accompanying
						Bridge component and can be configured to run locally or online via
						proxy.
						<br />
						<br />
						Built with Node, TMI.js, and the Phillips-Hue API.
					</>
				}
				screenshots={[hueMobile, hueTablet, hueDesktop]}
				param='hue'
			/>
			<Project.Right
				title='JSP-1: Javascript Sample Player'
				description={
					<>
						I watched an excellent{' '}
						<span>
							<a
								href='https://www.youtube.com/watch?v=VuN8qwZoego'
								rel='noreferrer'
								target='blank'
							>
								YouTube
							</a>
						</span>{' '}
						tutorial awhile back on how to build a simple QWERTY drum machine
						using Javascript. I decided to add a few additional sound kits, MIDI
						connectivity, and even velocity sensitivity for added MIDI
						playability. It's pretty cool.
						<br />
						<br />
						Built with good old vanilla Javascript.
					</>
				}
				screenshots={[jsp1Mobile, jsp1Tablet, jsp1Desktop]}
				param='JSP1'
			/>
			<Project.Left
				title='Twitch Chat Bot'
				description={
					<>
						This is a custom chatbot solution that I built for my own Twitch
						channel. It features a number of API-connected commands (dad jokes, quotes, weather look-up),
						user-interactive games (Magic 8-Ball, Rock-Paper-Scissors), and
						a command "cool-off" feature to prevent viewer overuse/abuse. <br />
						<br />
						Built with Node, TMI.js, and the Twitch API.
					</>
				}
				screenshots={[twitchbotMobile, twitchbotTablet, twitchbotDesktop]}
				param='twitchbot'
			/>
			<Project.Right
				title='Responsive Components'
				description={
					<>
						Here you'll find a collection of mobile-first, responsive UI
						components and elements that I've built using Javascript, React, and
						CSS.
					</>
				}
				screenshots={[responsiveMobile, responsiveTablet, responsiveDesktop]}
				param='Responsive Elements'
			/>
			<Project.Left
				title='US Rental Pricing Analysis'
				description={
					<>
						As part of a student data science project at UC Irvine in 2019, my
						team mates compiled a series of slides with data collected, cleaned,
						and presented regarding US rental pricing trends. <br />
						<br />
						Built with Python, Pandas/Numpy, Plotly, and the Google Maps API.
					</>
				}
				screenshots={[rentstudyMobile, rentstudyTablet, rentstudyDesktop]}
				param='Rent Study'
			/>
			<SectionThree />
		</main>
	)
}
