import { ReactNode } from 'react';

type Props = {
	children: ReactNode;
}

export const WhiteTheme = ( { children }: Props ) => {
	return (
		<div style={{
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			background: '#d0d0d0',
			height: '100vh',
		}}>
			{ children }
		</div>
	)
}

export const DarkTheme = ( { children }: Props ) => {
	return (
		<div style={{
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			background: '#1e1e1e',
			height: '100vh',
		}}>
			{ children }
		</div>
	)
}