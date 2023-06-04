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

const RentStudy = (): JSX.Element => {
	return (
		<ProjectDetail
			heroImages={[heroMobile, heroTablet, heroDesktop]}
			title='Rent Study'
			description={
				<>
					As part of a student data science project at UC Irvine in 2019, my
					team mates compiled a series of slides with data collected, cleaned,
					and presented regarding US rental pricing trends. <br />
					<br />
					Built with Python, Pandas/Numpy, Plotly, and the Google Maps API.
				</>
			}
			keywords={['Data Science', 'Data Analysis', 'Data Visualization']}
			technologies={['Python', 'Pandas', 'Numpy', 'Matplotlib', 'Plotly']}
			link={['https://www.twitch.tv/djmarcusmcb']}
			background={
				<>
					As part of the data analytics and visualization boot camp that I took
					part in at UC Irvine in 2019, one of the student project teams I was
					involved with decided to do an analysis of changes in rental housing
					prices in the US.
					<br />
					<br />
					Our primary sources were data sets from Kaggle, Zillow, and the US
					Census Bureau that contain rental pricing data, home-ownership
					statistics, and market population data between 2011 and 2017. Our team
					utilized a number of standard cleaning procedures to normalize and
					format the data necessary for the analysis and presentation involved.
					<br />
					<br />
					The analysis and data clean-up were done with Python (via Jupyter) and
					the visualizations within the slides were created utilizing the
					Plotly library as well as Matplotlib and the Google Maps API.
				</>
			}
			preview1={[previewMobile1, previewTablet1, previewDesktop1]}
			preview2={[previewMobile2, previewTablet2, previewDesktop2]}
			next='CrateStats'
			previous='Responsive Elements'
		/>
	)
}

export default RentStudy
