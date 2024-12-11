import styles from './styles/GetInTouch.module.css'

import { useMediaQuery } from 'react-responsive'

const GetInTouch = (): JSX.Element => {
	const isDesktop = useMediaQuery({
		query: '(min-width: 1200px)',
	})

	return (
		<section className={styles.section}>
			<div className={`container ${styles.container}`}>
				<div className={styles.wrapper}>
					<h2 className={`h2 ${styles.title}`}>Get in Touch</h2>
					<div className={styles.bodyContainer}>
						<br />
						<p
							className={
								isDesktop ? `body-1 ${styles.text}` : `body-2 ${styles.text}`
							}
							style={{ opacity: '0.8' }}
						>
							Ready to get started on your next project?
							<br />
							<br /> I'm here to help. Feel free to get in touch with any
							questions or ideas you have that I can assist with.
							<br />
							<br />I have prior full-stack experience and familiarity with a
							number of different tech stacks, with new additions regularly
							being added. Estimates for project work are available upon
							request.
						</p>
						<br />
						<hr />
						<br />
						<br />
						<div>
							<p
								className={
									isDesktop ? `body-1 ${styles.text}` : `body-2 ${styles.text}`
								}
								style={{ opacity: '0.8', fontWeight: '600' }}
							>
								<a href='mailto:marcusmcb@gmail.com'>marcusmcb@gmail.com</a>
							</p>
							<p
								className={
									isDesktop ? `body-1 ${styles.text}` : `body-2 ${styles.text}`
								}
								style={{ opacity: '0.8', fontWeight: '600' }}
							>
								<a href='tel:714-889-8793'>714-889-8793</a>
							</p>
							<p
								className={
									isDesktop ? `body-1 ${styles.text}` : `body-2 ${styles.text}`
								}
								style={{ opacity: '0.8', fontWeight: '600' }}
							>
								<a
									href='https://docs.google.com/document/d/1hJs1B-a1cM_mSYE67-z0BDlYHUrkdKfZwQLvPPwn8fU/edit?usp=sharing'
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
									href='https://drive.google.com/file/d/1y0_i_ssY5l_MhYKxCvCBnHLpQOSJNi5C/view?usp=sharing'
									rel='noreferrer'
									target='_blank'
									className='resume-link'
								>
									Resume (PDF)
								</a>
							</p>
						</div>
						<br />
					</div>
				</div>
			</div>
		</section>
	)
}

export default GetInTouch
