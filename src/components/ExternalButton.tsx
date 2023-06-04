import styles from './styles/SecondaryButton.module.css'

interface ExternalButtonProps {
	text: string
	href: string
}

const ExternalButton = ({ text, href }: ExternalButtonProps): JSX.Element => {
	return (
		<a
			className={styles.container}
			href={href}
			rel='noreferrer'
			target='_blank'
		>
			<button className={styles.button}>{text}</button>
		</a>
	)
}

export default ExternalButton
