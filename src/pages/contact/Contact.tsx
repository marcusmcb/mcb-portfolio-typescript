import { useEffect } from 'react'
import ContactMe from './ContactMe'
import GetInTouch from './GetInTouch'

const Contact = (): JSX.Element => {
	
  useEffect(() => {
		document.title = 'MCB Portfolio | Contact'
	}, [])

	return (
		<main>
			<GetInTouch />
			{/* <ContactMe /> */}
		</main>
	)
}

export default Contact
