import ProjectDetail from './ProjectDetail'

import heroMobile from '../../images/detail/mobile/image-manage-hero@2x.jpg'
import heroTablet from '../../images/detail/tablet/image-manage-hero@2x.jpg'
import heroDesktop from '../../images/detail/desktop/image-manage-hero@2x.jpg'

import previewMobile1 from '../../images/detail/mobile/image-manage-preview-1@2x.jpg'
import previewTablet1 from '../../images/detail/tablet/image-manage-preview-1@2x.jpg'
import previewDesktop1 from '../../images/detail/desktop/image-manage-preview-1@2x.jpg'

import previewMobile2 from '../../images/detail/mobile/image-manage-preview-2@2x.jpg'
import previewTablet2 from '../../images/detail/tablet/image-manage-preview-2@2x.jpg'
import previewDesktop2 from '../../images/detail/desktop/image-manage-preview-2@2x.jpg'

const ResponsiveElements = (): JSX.Element => {
	return (
		<ProjectDetail
			heroImages={[heroMobile, heroTablet, heroDesktop]}
			title='Responsive Elements'
			description={
				<>
					Here you'll find a collection of mobile-first, responsive UI
					components and elements that I've built using Javascript, React, and
					CSS.
				</>
			}
			keywords={['Responsive Design', 'Mobile First']}
			technologies={['Javascript', 'React', 'CSS']}
			link={['https://www.twitch.tv/djmarcusmcb']}
			background={
				<>
					This is a collection of responsive components and elements that I've
					built in the past for use in various projects, designs, or prototypes.
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
