import { Fragment } from 'react'

import ProjectDetail from './ProjectDetail'

import heroMobile from '../../images/portfolio/npchatbot/npchatbot_preview.png'
import heroTablet from '../../images/portfolio/npchatbot/npchatbot_preview.png'
import heroDesktop from '../../images/portfolio/npchatbot/npchatbot_banner_full.png'

const NpChatBot = (): JSX.Element => {
	return (
		<ProjectDetail
			heroImages={[heroMobile, heroTablet, heroDesktop]}
			title='npChatBot'
			description={
				<>
					npChatBot is a desktop application for DJs using Serato DJ Pro that
					adds a unique level of music discovery to their live-streamed DJ sets
					on Twitch via a set of interactive, real-time chat commands and
					playlist-sharing features.
				</>
			}
			keywords={['Live Streaming', 'Web Scraping', 'Data Analytics']}
			technologies={[
				'Electron',
				'Node',
				'React',
				'TypeScript',				
			]}
			link={['https://github.com/marcusmcb/npchatbot']}
			external_link={['https://www.npchatbot.com']}
			youtube_link={['https://www.youtube.com/@npchatbot']}
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
						one with several options readily available and easily integrated
						into their streams.
					</p>
					<br />
					<p>
						Where npChatBot differs is in its ability to go beyond just the song
						"now playing".
					</p>
					<br />
					<p>
						Viewers can query the streamer's current play history, look up any
						number of "stats" for the current DJ set, and even add the songs
						playing to their own personal playlists with the included Spotify
						integration.
					</p>
					<br />
					<p>
						npChatbot adds a new level of interactive music discovery to a
						live-streamer's chat and gives DJs streaming on the platform the
						ability to let their viewers take a deep dive into their playlists.
					</p>
					<br />
					<hr />
					<br />
					<p>
						In the clip below, I trigger the{' '}
						<span style={{ fontWeight: '600', fontStyle: 'italic' }}>
							!np stats
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
							returns the response as both chat text and (optionally) on-screen
							in OBS
						</li>
					</ul>
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
						song playing as well as the previous song played, a fun "ICYMI"
						feature for viewers who may have missed IDing the current song as it
						was playing.
					</p>
					<br />
					<hr />
					<br />
					<p>
						In the next clip, I trigger the{' '}
						<span style={{ fontWeight: '600', fontStyle: 'italic' }}>
							!np shortest
						</span>{' '}
						and{' '}
						<span style={{ fontWeight: '600', fontStyle: 'italic' }}>
							!np longest
						</span>{' '}
						commands in my Twitch channel which, using the scraped playlist
						data, respectively returns the shortest and longest songs played in
						the stream so far.
					</p>
					<br />
					<p>
						The final command used in the clip,{' '}
						<span style={{ fontWeight: '600', fontStyle: 'italic' }}>!dyp</span>{' '}
						(short for "did you play...?"), will query the scraped data to see
						if the artist or song entered after the command has been played
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
					<br />
					<p>
						In this final clip, I show the{' '}
						<span style={{ fontWeight: '600', fontStyle: 'italic' }}>
							!np doubles{' '}
						</span>
						command in action, which determines whether or not the DJ has
						previously played any "doubles" in this stream.
					</p>
					<br />
					<p>
						"Doubles" occur when the DJ has a song loaded to both decks at the
						same time, commonly done when performing scratch routines, beat
						juggles, and such during a DJ set.
					</p>
					<br />
					<p>
						{' '}
						In this clip, I trigger the !doubles command, which returns that
						there have been none at that point. After a quick cut and juggle
						between decks, I trigger the command again, which now returns how
						many times "doubles" were detected in the playlist data, and the
						most recent song the DJ performed a routine with.
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
							src='/video/doubles_command_video.mp4'
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
						discovery process for their viewers, and adding a unique level of
						interactivity to their chat experience.
					</p>
					<br />
					<hr />
					<br />
					<p>
						npChatbot also has the ability to create sharable Spotify playlists
						from the songs you select during your live-streamed DJ set.
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
							src='/video/npchatbot-spotify-demo.mp4'
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
						After linking npChatbot to your Spotify account, the user can simply
						enable the feature and save their preferences. Thereafter, each time
						they connect npChatbot to Twitch, a new Spotify playlist is created
						and then updated with each song the DJ played during the stream.
						This playlist is easily sharable with your viewers in the chat via
						the{' '}
						<span style={{ fontWeight: '600', fontStyle: 'italic' }}>
							!np playlist{' '}
						</span>{' '}
						command which returns a link to the playlist in the chat.
					</p>
					<br />
					<hr />
					<br />
					<p>
						Presently, npChatbot is available as a desktop app for both Mac and
						PC.
					</p>
					<br />
					<p>
						The full website for npChatbot has a complete breakdown of the user
						options, preferences, and chatbot commands available to the user,
						along with additional demo clips showing the software in action on
						Twitch.
					</p>
					<br />
					<p>
						Visit the npChatbot YouTube channel{' '}
						<a
							style={{ fontWeight: 'bold' }}
							href='https://www.youtube.com/@npchatbot'
						>
							here
						</a>
						.
					</p>
					<br />
					<p>
						npChatbot is written in TypeScript (client React UI) and JavaScript
						(chatbot ES modules and logic), built with Electron and packaged
						with Electron Forge. Full functionality has been thoroughly tested
						on Windows (10/11) and Mac (Sequoia) utilizing Serato DJ Pro 3.0 and
						OBS 29.0 and up.
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
