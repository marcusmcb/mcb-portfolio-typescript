import ProjectDetail from './ProjectDetail'

import heroMobile from '../../images/portfolio/crate_stats_540.png'
import heroTablet from '../../images/portfolio/crate_stats_horiz.png'
import heroDesktop from '../../images/portfolio/crate_stats_horiz.png'

import previewMobile1 from '../../images/portfolio/crate_stats_540.png'
import previewTablet1 from '../../images/portfolio/crate_stats_horiz.png'
import previewDesktop1 from '../../images/portfolio/crate_stats_horiz.png'

import previewMobile2 from '../../images/detail/mobile/image-manage-preview-2@2x.jpg'
import previewTablet2 from '../../images/detail/tablet/image-manage-preview-2@2x.jpg'
import previewDesktop2 from '../../images/detail/desktop/image-manage-preview-2@2x.jpg'

const CrateStats = (): JSX.Element => {
	return (
		<ProjectDetail
			heroImages={[heroMobile, heroTablet, heroDesktop]}
			title='CrateStats'
			description={
				<>
					CrateStats is a data analytics platform currently in development. The
					goal of this project is to give the DJ community a dedicated resource
					for playlist analysis and performance insight across multiple DVS
					platforms. <br />
					<br />
					Support for Serato, Serato Live Playlists, Traktor, and Rekordbox is
					currently included. Built with React, Material UI, Node, and GCP.
				</>
			}
			keywords={['Full Stack Development', 'Data Analytcs']}
			technologies={['React', 'Node', 'Material UI', 'Express', 'Firebase']}
			background={
				<>
					This project began as a side-project from another you'll find in my
					portfolio, <span style={{ fontWeight: '600' }}>npChatBot</span>.{' '}
					<br />
					<br />
					As I was capturing my own playlist data during live-streams to use
					with chatbot commands, I realized that I could likely do the same with
					the playlist history data that's collected once a DJ has completed
					their set, a common feature among DJ software platforms. I've used
					this history feature myself for years to recall improvised
					performances and selections that I may not think of otherwise.
					<br />
					<br />
					Currently, the platform has support for export data from Serato,
					Traktor, and Rekordbox, as well as real-time analytics for Serato via
					from a DVS platform, CrateStats can provide an analysis of the music
					played within that set, broken down in detail by category (tempo, key,
					year, etc). <br />
					<br />
					Additionally, the CrateStats report can provide a general analysis of
					the DJ's behavior during that particular set: how long they played
					songs on average, the "age" of their playlist is (based on the range
					of years played), which deck the DJ favored during the set, and so on.
					<br />
					<br />
					Finally, when used in tandem with Serato's live playlist feature,
					CrateStats can be used as a live analytics tool during DJ
					performances, giving the user (and their audience) a condensed version
					of the CrateStats report in real time.
				</>
			}
			preview1={[previewMobile1, previewTablet1, previewDesktop1]}
			preview2={[previewMobile2, previewTablet2, previewDesktop2]}
			next='bookmark'
			previous='fylo'
		/>
	)
}

export default CrateStats
