import styles from './styles/FooterClasses.module.css'

const Footer = (): JSX.Element => {	

	let currentYear = new Date().getFullYear()

	return (
		<header className={styles.header}>
			<a
				href='http://www.djmarcusmcbride.com'
				className={styles.item}				
				target='_blank'
				rel='noopener noreferrer'
			>
				{currentYear} &#169; MCB
			</a>
		</header>
	)
}

export default Footer
