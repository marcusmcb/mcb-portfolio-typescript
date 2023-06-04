import ProjectDetail from './ProjectDetail'

import heroMobile from '../../images/portfolio/remixarkive/remixarkive_header.png'
import heroTablet from '../../images/portfolio/remixarkive/remixarkive_header.png'
import heroDesktop from '../../images/portfolio/remixarkive/remixarkive_preview_wide_01.png'

// import previewMobile1 from '../../images/detail/mobile/image-manage-preview-1@2x.jpg'
// import previewTablet1 from '../../images/detail/tablet/image-manage-preview-1@2x.jpg'
// import previewDesktop1 from '../../images/detail/desktop/image-manage-preview-1@2x.jpg'

// import previewMobile2 from '../../images/detail/mobile/image-manage-preview-2@2x.jpg'
// import previewTablet2 from '../../images/detail/tablet/image-manage-preview-2@2x.jpg'
// import previewDesktop2 from '../../images/detail/desktop/image-manage-preview-2@2x.jpg'

import ItalicText from '../../components/ItalicText'
import StrongText from '../../components/StrongText'

const RemixArkive = (): JSX.Element => {
	return (
		<ProjectDetail
			heroImages={[heroMobile, heroTablet, heroDesktop]}
			title='RemixArkive'
			description={
				<>
					RemixArkive is an automated script that uses Twitter to tweet out
					links to rare, unusual, or hard-to-find remixed versions of songs,
					submitted by colleagues of mine within the music and DJ communities.
					<br />
					<br />					
					Built with Node, Heroku, and the Twitter API.
				</>
			}
			keywords={['Automation', 'API Integration', 'Social Media Bot']}
			technologies={['Node', 'Heroku', 'Twitter API']}
			link={['https://github.com/marcusmcb/twit-bot']}
			external_link={['https://www.twitter.com/remixarkive']}
			background={
				<>
					Awhile back, an old DJ colleague of mine asked me to look into
					building a script that would tweet out the currently playing song in
					his DJ software, a solution that I was able to prototype and implement
					for him fairly quickly and with surprising ease.
					<br />
					<br />
					Doing so involved working with the Twitter API for the first time and,
					once configured to a test account, I quickly discovered that there's
					quite a bit you can do to automate it and the content it tweets out.
					<br />
					<br />
					In my past life as a professional broadcaster, I regularly used social
					media feeds for music and content discovery as platforms like Twitter
					became key in facilitating such discovery in real time, with most of
					them being focused on newer music.
					<br />
					<br />
					Over time however, I noticed a number of social feeds devoted to the
					discovery of <ItalicText>older</ItalicText> music, bygone classics and
					such that simply weren't getting the kind of attention and audience
					that they used to. With a freshly minted Twitter bot, I decided to add
					another social "archive" to the collection with{' '}
					<StrongText>RemixArkive</StrongText>, with the added twist that the
					titles linked (all submitted by bona-fide music heads) are all rare,
					remixed versions of said songs.
					<br />
					<br />
					RemixArkive is built as a Node script that randomly selects an entry
					from the array of collected links once every four hours and tweets it
					out, running as a script via Heroku.
				</>
			}
			preview1={[]}
			preview2={[]}
			next='hue'
			previous='npChatBot'
		/>
	)
}

export default RemixArkive
