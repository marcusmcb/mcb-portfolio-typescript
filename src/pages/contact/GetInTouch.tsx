import styles from './styles/GetInTouch.module.css'

import github from '../../images/icons/github.svg'
import twitter from '../../images/icons/twitter.svg'
import linkedin from '../../images/icons/linkedin.svg'
import { useMediaQuery } from 'react-responsive'

const GetInTouch = (): JSX.Element => {
	const isDesktop = useMediaQuery({
		query: '(min-width: 1440px)',
	})

	return (
		<section className={styles.section}>
			<div className={`container ${styles.container}`}>
				<div className={styles.wrapper}>
					<h2 className={`h2 ${styles.title}`}>Get in Touch</h2>
					<div className={styles.bodyContainer}>
						{/* <p
							className={
								isDesktop ? `body-1 ${styles.text}` : `body-2 ${styles.text}`
							}
							style={{ opacity: '0.8' }}
						>
							Ready to get started on your next project?
							<br />
							<br /> I'm here to help. Feel free to get in touch with any
							questions or ideas you have that I can assist with.
						</p> */}
						<div className={styles.resumelinks}>
							<p
								className={
									isDesktop ? `body-1 ${styles.text}` : `body-2 ${styles.text}`
								}
								style={{ opacity: '0.8', fontWeight: '600' }}
							>
								marcusmcb@gmail.com
							</p>
							<p
								className={
									isDesktop ? `body-1 ${styles.text}` : `body-2 ${styles.text}`
								}
								style={{ opacity: '0.8', fontWeight: '600' }}
							>
								714-889-8793
							</p>
							<p
								className={
									isDesktop ? `body-1 ${styles.text}` : `body-2 ${styles.text}`
								}
								style={{ opacity: '0.8', fontWeight: '600' }}
							>
								<a
									href='https://docs.google.com/document/d/11S9WkHfks7a6gXiNPZVTDJgkRnEDjx7PHnsJDLBmaFI/edit?usp=sharing'
									rel='noreferrer'
									target='_blank'
									className='resume-link'
								>
									Resume (Doc)
								</a>
							</p>
							<p
								className={
									isDesktop ? `body-1 ${styles.text}` : `body-2 ${styles.text}`
								}
								style={{ opacity: '0.8', fontWeight: '600' }}
							>
								<a
									href='https://drive.google.com/file/d/1o40CbUUd-0yFIb_tD28EYSefAsaIf7oB/view?usp=sharing'
									rel='noreferrer'
									target='_blank'
									className='resume-link'
								>
									Resume (PDF)
								</a>
							</p>
						</div>
            <br/>
						<div className={styles.iconContainer}>
							<a href='/#' className={styles.iconLink}>
								<img
									src={github}
									alt='github'
									className={styles.icon}
									aria-label='github'
								/>
							</a>

							<a href='/#' className={styles.iconLink} aria-label='twitter'>
								<img src={twitter} alt='twitter' className={styles.icon} />
							</a>

							<a href='/#' className={styles.iconLink} aria-label='linkedin'>
								<img src={linkedin} alt='linkedin' className={styles.icon} />
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default GetInTouch
