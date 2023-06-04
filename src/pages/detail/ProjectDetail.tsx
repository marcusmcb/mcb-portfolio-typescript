import { useEffect } from 'react'
import ExternalButton from '../../components/ExternalButton'
import Navigation from './Navigation'
import styles from './styles/ProjectDetail.module.css'

interface ProjectDetailProps {
	heroImages: string[]
	title: string
	description: any
	keywords: string[]
	technologies: string[]
	background: any
	link: string[]
	preview1: string[]
	preview2?: string[]
	next: string
	previous: string
	external_link?: string[]
}

const ProjectDetail = ({
	heroImages,
	title,
	description,
	keywords,
	technologies,
	background,
	link,
	preview1,
	preview2,
	next,
	previous,
	external_link,
}: ProjectDetailProps): JSX.Element => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<>
			<section className={styles.sectionOne}>
				<div className='container'>
					<picture>
						<source srcSet={heroImages[2]} media='(min-width: 768px)' />
						<source srcSet={heroImages[1]} media='(min-width: 768px)' />
						<img src={heroImages[0]} alt='hero screenshot' width='100%' />
					</picture>
				</div>
			</section>

			<section className={styles.sectionTwo}>
				<div className={`container ${styles.container}`}>
					{/* left container */}
					<div className={styles.blockContainer}>
						<h2 className={`h2 ${styles.title}`} style={{ textAlign: 'start' }}>
							{title}
						</h2>
						<p
							className={`body-2 ${styles.description}`}
							style={{ textAlign: 'start', opacity: '0.8' }}
						>
							{description}
						</p>
						<p className={styles.keywords}>
							{keywords.map((element, index) => {
								if (index === keywords.length - 1) {
									return element
								} else {
									return `${element} / `
								}
							})}
						</p>
						<p className={styles.words}>
							{technologies.map((element, index) => {
								if (index === technologies.length - 1) {
									return element
								} else {
									return `${element} | `
								}
							})}
						</p>
						{external_link ? (
							<div style={{ marginBottom: '15px' }}>
								<ExternalButton text='visit website' href={external_link[0]} />
							</div>
						) : (
							<></>
						)}
						<ExternalButton text='browse code' href={link[0]} />
					</div>

					{/* right container */}
					<div className={styles.backgroundContainer}>
						<h3 className={`h3 ${styles.bTitle}`}>Project Background</h3>
						<p className={`body-2 ${styles.background}`}>{background}</p>
						{/* <h3 className={`h3 ${styles.staticTitle}`}>Previews:</h3>

						<picture>
							<source srcSet={preview1[2]} media='(min-width: 1440px)' />
							<source srcSet={preview1[1]} media='(min-width: 768px)' />
							<img
								src={preview1[0]}
								alt='hero screenshot'
								width='100%'
								style={{ marginBottom: '40px' }}
							/>
						</picture>
						{preview2 ? (
							<picture>
								<source srcSet={preview2[2]} media='(min-width: 1440px)' />
								<source srcSet={preview2[1]} media='(min-width: 768px)' />
								<img src={preview2[0]} alt='hero screenshot' width='100%' />
							</picture>
						) : (
							<></>
						)} */}
					</div>
				</div>
			</section>
			<Navigation next={next} previous={previous} />
		</>
	)
}

export default ProjectDetail
