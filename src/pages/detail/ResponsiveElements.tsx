import ProjectDetail from './ProjectDetail'

import heroMobile from '../../images/portfolio/responsive/responsive_header.png'
import heroTablet from '../../images/portfolio/responsive/responsive_header.png'
import heroDesktop from '../../images/portfolio/responsive/responsive_header_wide.png'

import previewMobile1 from '../../images/detail/mobile/image-manage-preview-1@2x.jpg'
import previewTablet1 from '../../images/detail/tablet/image-manage-preview-1@2x.jpg'
import previewDesktop1 from '../../images/detail/desktop/image-manage-preview-1@2x.jpg'

import previewMobile2 from '../../images/detail/mobile/image-manage-preview-2@2x.jpg'
import previewTablet2 from '../../images/detail/tablet/image-manage-preview-2@2x.jpg'
import previewDesktop2 from '../../images/detail/desktop/image-manage-preview-2@2x.jpg'

import StrongText from '../../components/StrongText'
import ExternalButton from '../../components/ExternalButton'

const ResponsiveElements = (): JSX.Element => {
	return (
		<ProjectDetail
			heroImages={[heroMobile, heroTablet, heroDesktop]}
			title='Responsive Elements'
			description={
				<>
					Here you'll find a collection of mobile-first, responsive UI
					components and elements that I've built using Javascript, HTML, CSS,
					and React.
				</>
			}
			keywords={['Responsive Design', 'Mobile First']}
			technologies={['Javascript', 'HTML', 'CSS', 'React', 'Amplify']}
			link={[
				'https://github.com/marcusmcb?tab=repositories&q=responsive&type=&language=&sort=',
			]}
			background={
				<>
					This is a collection of responsive components and elements that I've
					built with React, Javascript, HTML, and CSS in the past for use in
					various projects, designs, or prototypes.
					<br />
					<br />
					You can click the title of each to view/use the component in a new
					browser tab.
					<br />
					<br />
					<hr />
					<br />
					<br />
					<a
						href='https://www.coinsnapshot.com/'
						rel='noreferrer'
						target='_blank'
					>
						<span style={{ fontSize: '22px' }}>
							<StrongText>Crypto Dashboard</StrongText>
						</span>
					</a>
					<br />
					<br />
					This is a responsive, mobile-first crypto dashboard app built with
					React and Amplify that takes API data from Coin Gecko and displays it
					as a simple dashboard UI, with the ability to search the tokens
					returned. Additional token data is displayed when the user
					hovers/selects any token in the returned list.
					<br />
					<br />
					<ExternalButton
						text='browse code'
						href='https://github.com/marcusmcb/crypto-dashboard'
					/>
					<br />
					<br />
					<hr />
					<br />
					<br />
					<a
						href='https://master.dyh95hp9y2xj.amplifyapp.com/'
						rel='noreferrer'
						target='_blank'
					>
						<span style={{ fontSize: '22px' }}>
							<StrongText>List/Form Component</StrongText>
						</span>
					</a>
					<br />
					<br />
					This is a simple list/form component built with React and hosted on
					Amplify that you can use to enter, sort, and clear user-entered items.
					<br />
					<br />
					<ExternalButton
						text='browse code'
						href='https://github.com/marcusmcb/react-form-component'
					/>
					<br />
					<br />
					<hr />
					<br />
					<br />
					<a
						href='https://marcusmcb.github.io/responsive-accordion/'
						rel='noreferrer'
						target='_blank'
					>
						<span style={{ fontSize: '22px' }}>
							<StrongText>Accordion Element</StrongText>
						</span>
					</a>
					<br />
					<br />
					This is a simple, responsive accordion/tabbed-navigation component
					built with JavaScript and CSS. As the element is sized down for
					smaller view-ports the accordion tabs will stack vertically.
					<br />
					<br />
					<ExternalButton
						text='browse code'
						href='https://github.com/marcusmcb/crypto-dashboard'
					/>
				</>
			}
			preview1={[previewMobile1, previewTablet1, previewDesktop1]}
			preview2={[previewMobile2, previewTablet2, previewDesktop2]}
			next='Rent Study'
			previous='Twitch Bot'
		/>
	)
}

export default ResponsiveElements
