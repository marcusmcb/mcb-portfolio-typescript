import { Fragment } from 'react'

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
			technologies={['Node', 'TMI.js', 'Cheerio', 'Twitch', 'Serato', 'OBS']}
			link={['https://github.com/marcusmcb/serato-nowplaying-twitch']}
			background={
				<Fragment>
					<p>
						Live-streamers are always looking for new and unique ways for their
						viewers to interact and stay engaged with what they're doing, and
						for those streaming their DJ sets, music discovery is a key piece in
						that puzzle.
					</p>
					<br />
					<p>
						For DJs live-streaming on interactive platforms like Twitch, the
						"now playing" chat command (or variations of it) is a fairly common
						one with several bot integrations readily available and easily
						installed.
					</p>
					<br />
					<p>
						Where npChatBot differs is in its ability to go beyond just the
						currently playing track. It adds a level of interactivity to a
						live-streamer's chat and gives DJs streaming on the platform the
						ability to let their viewers take a deep dive into their playlists
						in real-time.
					</p>
					<br />
					<hr/>
					<br/>
					<p>
						In the clip below, I trigger the{' '}
						<span style={{ fontWeight: '600', fontStyle: 'italic' }}>
							!stats
						</span>{' '}
						command in my Twitch channel which, under the hood, does the
						following:
					</p>
					<br />
					<ul>
						<li>scrapes the data from my live playlist</li>
						<li>converts the time-stamps from strings to proper date values</li>
						<li>
							calculates the total number of songs played (so far) along with
							the average song length
						</li>
						<li>
							returns the response as both chat text and (opitonally) on-screen
							in OBS
						</li>
					</ul>
					<br/>
					<div
						style={{
							position: 'relative',
							overflow: 'hidden',
							paddingTop:
								'56.25%' /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */,
						}}
					>
						<br />
						<video
							src='/video/stats_command_demo.mp4'
							style={{
								position: 'absolute',
								top: '0',
								left: '0',
								width: '100%',
								height: '100%',
							}}
							controls
						>
							Your browser does not support the video tag.
						</video>
					</div>
					<br />
					<p>
						Additionally, I also trigger commands to display both the current
						song playing as well as the previous song played, a fun "ICYMI" feature for
						viewers who may have missed IDing the current song as it was
						playing.
					</p>
					<br />
					<hr/>
					<br/>
					<p>
						In the next clip, I trigger the{' '}
						<span style={{ fontWeight: '600', fontStyle: 'italic' }}>
							!shortestsong
						</span>{' '}
						and{' '}
						<span style={{ fontWeight: '600', fontStyle: 'italic' }}>
							!longestsong
						</span>{' '}
						commands in my Twitch channel which, using the scraped playlist
						data, respectively returns the shortest and longest songs played in
						the stream so far.
					</p>
					<br />
					<p>
						The final command used in the clip,{' '}
						<span style={{ fontWeight: '600', fontStyle: 'italic' }}>!dyp</span>{' '}
						(short for "did you play"), will query the scraped data to see if
						the artist or song entered after the command has been played
						previously in my set.
					</p>
					<br />
					<div
						style={{
							position: 'relative',
							overflow: 'hidden',
							paddingTop:
								'56.25%' /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */,
						}}
					>
						<br />
						<video
							src='/video/dyp_command_demo.mp4'
							style={{
								position: 'absolute',
								top: '0',
								left: '0',
								width: '100%',
								height: '100%',
							}}
							controls
						>
							Your browser does not support the video tag.
						</video>
					</div>
					<br />
					<p>
						All of which provide a layer of real-time analysis for streamers
						playing music in their live broadcasts, aiding in the music
						discovery process for their viewers and adding a unique level of
						interactivity to their live broadcasts.
					</p>
					<br />
					<hr/>
					<br/>
					<p>
						Presently, the npChatBot suite can be cloned and run locally as a
						simple Node script, hosted via the cloud (my own bot is currently
						running on Heroku), or installed as an Electron app (still in
						development).
					</p>
					<br />
					<p>
						Integration for OBS responses can be found in the obs-integration
						branch, also currently in development.
					</p>
				</Fragment>
			}
			preview1={[]}
			preview2={[]}
			previous='CrateStats'
			next='RemixArkive'
		/>
	)
}

export default NpChatBot
