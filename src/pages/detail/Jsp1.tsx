import ProjectDetail from './ProjectDetail'

import heroMobile from '../../images/portfolio/jsp1/jsp1_preview.png'
import heroTablet from '../../images/portfolio/jsp1/jsp1_preview.png'
import heroDesktop from '../../images/portfolio/jsp1/jsp1_preview_wide.png'

import previewMobile1 from '../../images/detail/mobile/image-manage-preview-1@2x.jpg'
import previewTablet1 from '../../images/detail/tablet/image-manage-preview-1@2x.jpg'
import previewDesktop1 from '../../images/detail/desktop/image-manage-preview-1@2x.jpg'

import previewMobile2 from '../../images/detail/mobile/image-manage-preview-2@2x.jpg'
import previewTablet2 from '../../images/detail/tablet/image-manage-preview-2@2x.jpg'
import previewDesktop2 from '../../images/detail/desktop/image-manage-preview-2@2x.jpg'

import StrongText from '../../components/StrongText'

const Jsp1 = (): JSX.Element => {
	return (
		<ProjectDetail
			heroImages={[heroMobile, heroTablet, heroDesktop]}
			title='JSP-1'
			description={
				<>
					I watched an excellent{' '}
					<StrongText>
						<a
							href='https://www.youtube.com/watch?v=VuN8qwZoego'
							rel='noreferrer'
							target='blank'
						>
							YouTube
						</a>
					</StrongText>{' '}
					tutorial awhile back on how to build a simple QWERTY drum machine
					using Javascript. I decided to add a few additional sound kits, MIDI
					connectivity, and even velocity sensitivity for added MIDI
					playability. It's pretty cool.
					<br />
					<br />
					Built with good old vanilla Javascript.
				</>
			}
			keywords={['Web Audio', 'Music Apps', 'MIDI']}
			technologies={['HTML', 'CSS', 'vanilla Javascript', 'MIDI']}
			link={['https://github.com/marcusmcb/JS-Drum-Machine']}
			external_link={['https://www.jspone.com']}
			background={
				<>
					When I did a six month full stack web development boot camp in the
					summer/fall of 2018 over @ UC Irvine, the curriculum involved quite a
					few practice apps that we'd often build as a warm-up exercise before
					launching into the class topic for that day.
					<br />
					<br />
					As a lover of all things related to drum machines and samplers, I
					immediately perked up when one our instructors had us code along to
					this great{' '}
					<span>
						<a
							href='https://www.youtube.com/watch?v=VuN8qwZoego'
							rel='noreferrer'
							target='blank'
						>
							<StrongText>YouTube</StrongText>
						</a>
					</span>{' '}
					clip that details how to build such a device for the web with nothing
					more than HTML, CSS, and Javascript.
					<br />
					<br />
					After completing my boot camp, I revisited this app some time later,
					wondering if it was possible to integrate simple MIDI connectivity. A
					bit of trial and error got the necessary data moving back and forth,
					and so I decided to tackle velocity sensitivity - registering each
					note/sample played relative to the force or "velocity" with which its
					played. I've also added the option to select from three different
					kits.
				</>
			}
			preview1={[previewMobile1, previewTablet1, previewDesktop1]}
			preview2={[previewMobile2, previewTablet2, previewDesktop2]}
			next='Twitch Bot'
			previous='hue'
		/>
	)
}

export default Jsp1
