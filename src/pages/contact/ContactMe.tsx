import { SyntheticEvent } from 'react'
import axios from 'axios'
import styles from './styles/ContactMe.module.css'

const ContactMe = (): JSX.Element => {
	const handleFocus = (e: SyntheticEvent) => {
		const target = e.target as typeof e.target & {
			name: string
			id: string
		}
		const name = target.name
		const id = target.id
		const warning: HTMLElement | null = document.getElementById(
			`${name}-warning`
		)
		warning!.style.display = 'none'

		const element: HTMLElement | null = document.getElementById(`${id}`)
		if (element?.classList.contains('required'))
			element?.classList.toggle('required')
	}

	const handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault()
		const target = e.target as typeof e.target & {
			name: { value: string }
			email: { value: string }
			message: { value: string }
		}
		const name: string = target.name.value
		const email: string = target.email.value
		const message: string = target.message.value

		if (!name.length) {
			const warning: HTMLElement | null =
				document.getElementById('name-warning')
			warning!.style.display = 'block'

			const input = document.getElementById('name')
			input?.classList.toggle('required')
		}
		if (!email.length) {
			const warning: HTMLElement | null =
				document.getElementById('email-warning')
			warning!.style.display = 'block'

			const input = document.getElementById('email')
			input?.classList.toggle('required')
		}
		if (!message.length) {
			const warning: HTMLElement | null =
				document.getElementById('message-warning')
			warning!.style.display = 'block'

			const input = document.getElementById('message')
			input?.classList.toggle('required')
		}

		if (name.length && email.length && message.length) {
			// axios
			// 	.post('/send-email', { name, email, message })
			// 	.then((res) => {
			// 		console.log(res.data)
			// 	})
			// 	.catch((err) => {
			// 		console.error(err)
			// 	})
			console.log(name)
			console.log(email)
			console.log(message)
		}

		console.log(name, email, message)
	}

	return (
		<section>
			<div className='container'>
				<div className={styles.wrapper}>
					<h2 className={`h2 ${styles.title}`}>Contact Me</h2>
					<form action='post' className={styles.form} onSubmit={handleSubmit}>
						<label htmlFor='name' className={styles.label}>
							Name
						</label>
						<div style={{ marginBottom: '24px' }}>
							<input
								type='text'
								id='name'
								name='name'
								placeholder='Insert your name here...'
								className={styles.input}
								onFocus={handleFocus}
							/>
							<p className={styles.warning} id='name-warning'>
								This field is required
							</p>
						</div>

						<div style={{ marginBottom: '24px' }}>
							<label htmlFor='email' className={styles.label}>
								Email Address
							</label>
							<input
								type='email'
								name='email'
								id='email'
								placeholder='email@example.com'
								className={styles.input}
								onFocus={handleFocus}
							/>
							<p className={styles.warning} id='email-warning'>
								This field is required
							</p>
						</div>

						<div style={{ marginBottom: '24px' }}>
							<label htmlFor='message' className={styles.label}>
								Message
							</label>
							<textarea
								name='message'
								id='message'
								placeholder='What is your message?'
								className={styles.input}
								style={{ resize: 'vertical', height: '96px' }}
								onFocus={handleFocus}
							></textarea>
							<p className={styles.warning} id='message-warning'>
								This field is required
							</p>
						</div>

						<input
							type='submit'
							value='send message'
							className={styles.button}
						/>
					</form>
				</div>
			</div>
		</section>
	)
}

export default ContactMe

// add free tier Postmark account to handle
// email sends from message panel
