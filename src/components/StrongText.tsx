import React, { ReactNode } from 'react'

interface StrongTextProps {
	children: ReactNode
}

const StrongText: React.FC<StrongTextProps> = ({ children }) => {
	return <span style={{ fontWeight: '600' }}>{children}</span>
}

export default StrongText
