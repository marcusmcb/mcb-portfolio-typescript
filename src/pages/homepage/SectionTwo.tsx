import styles from './styles/SectionTwo.module.css'
import SecondaryButton from '../../components/SecondaryButton'

import mobileProfile from '../../images/homepage/desktop/marcus.jpg'
import tabletProfile from '../../images/homepage/desktop/marcus.jpg'
import desktopProfile from '../../images/homepage/desktop/marcus.jpg'

const SectionTwo = (): JSX.Element => {
	return (
		<section className={styles.section} id='about-me'>
			<div className={`container ${styles.container}`}>
				<picture className={styles.imageContainer}>
					<source srcSet={desktopProfile} media='(min-width: 1440px)' />
					<source srcSet={tabletProfile} media='(min-width: 768px)' />
					<img
						src={mobileProfile}
						alt='profile'
						className={styles.image}
						width='100%'
					/>
				</picture>
				<div className={styles.boxContainer}>
					<h2 className='h2' style={{ marginBottom: '28px' }}>
						Hi, I'm Marcus.
					</h2>
					<p
						className='body-1'
						style={{
							mixBlendMode: 'normal',
							opacity: '0.8',
							textAlign: 'left',
							marginBottom: '24px',
						}}
					>
						I'm a full-stack developer, task-wrangler, and creative
						problem-solver from Southern California.
						<br />
						<br />
						I'm a big fan of parsing useful data out of the ether and presenting it in
						resource-efficient and user-engaging ways. Experienced in working
						with agile teams (on-site & remote) and committed to finding durable
						solutions to fit the needs of each challenge.
						<br />
						<br />
						Specialties include API & e-commerce development, integration/E2E testing,
						live-streaming tools, database management, and interactive data analysis. Proficient in
						Javascript, Python, Ruby, cloud infrastructure, code management, and general devOps work.
						<br />
						<br />
						You can view samples of my work along with detailed information about each
						project in my portfolio section. Please feel free to reach out with
						any questions, feedback, or inquiries.  Thanks!
					</p>
					<SecondaryButton text='go to portfolio' href='/portfolio' />
				</div>
			</div>
		</section>
	)
}

export default SectionTwo
