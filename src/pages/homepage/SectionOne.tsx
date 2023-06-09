import styles from './styles/SectionOne.module.css'

import { useMediaQuery } from 'react-responsive'

import PrimaryButton from '../../components/PrimaryButton'

import mobileImage2x from '../../images/homepage/desktop/code-image.jpg'
import tabletImage2x from '../../images/homepage/desktop/code-image.jpg'
import desktopImage2x from '../../images/homepage/desktop/code-image.jpg'

const SectionOne = (): JSX.Element => {
	const isDesktop = useMediaQuery({
		query: '(min-width: 1440px)',
	})

	return (
		<section className={styles.section1}>
			<div className='container'>
				<div className={styles.darkOverlay}>
					<picture className={styles.picture}>
						<source srcSet={desktopImage2x} media='(min-width: 1440px)' />
						<source srcSet={tabletImage2x} media='(min-width: 768px)' />
						<img
							src={mobileImage2x}
							alt='Project Screenshot'
							style={{ width: '100%', maxHeight: '300px' }}
						/>
					</picture>
				</div>

				<div className={styles.boxContainer}>
					<h1 className={isDesktop ? `h1 ${styles.text}` : `h2 ${styles.text}`}>
						Full stack development and engineering solutions.
					</h1>
					<div className={styles.buttonDiv}>
						<PrimaryButton text='about me' href='/#about-me' />
					</div>
				</div>
			</div>
		</section>
	)
}

export default SectionOne
