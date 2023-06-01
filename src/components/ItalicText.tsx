import React, { ReactNode } from 'react'

interface ItalicTextProps {
	children: ReactNode
}

const ItalicText: React.FC<ItalicTextProps> = ({ children }) => {
	return <span style={{ fontStyle: 'italic' }}>{children}</span>
}

export default ItalicText
