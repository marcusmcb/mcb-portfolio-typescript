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
						problem-solver. I'm a big fan of pulling data out of the ether and
						presenting it in system-efficient and user-effective ways.  
						Experienced in working with agile teams (on-site & remote) and
						committed to finding durable solutions to fit the needs of the
						challenge.
					</p>
					<SecondaryButton text='go to portfolio' href='/portfolio' />
				</div>
			</div>
		</section>
	)
}

export default SectionTwo
