import ProjectDetail from './ProjectDetail'

import heroMobile from '../../images/portfolio/rentstudy/rentstudy_header.png'
import heroTablet from '../../images/portfolio/rentstudy/rentstudy_header.png'
import heroDesktop from '../../images/portfolio/rentstudy/rentstudy_header_wide.png'

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
			link={[
				'https://drive.google.com/file/d/1sTXkgYq3ZMBJnhmSbzQk7MNvmdPXCO9X/view',
			]}
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
					the visualizations within the slides were created utilizing the Plotly
					library as well as Matplotlib and the Google Maps API.
				</>
			}
			preview1={[]}
			preview2={[]}
			next='CrateStats'
			previous='Responsive Elements'
		/>
	)
}

export default RentStudy
