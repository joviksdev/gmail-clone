import { btn } from '../../../assets/js/stylesComponents';

const styles = () => ({
	tabs: {
		'& .MuiButtonBase-root': {
			...btn,
			minWidth: 'initial',
			width: '25% !important',
			padding: '6px 5px',
			minHeight: '55px',
		},
		'& .MuiTab-wrapper': {
			flexDirection: 'initial',
			justifyContent: 'initial',
		},
		'& .MuiSvgIcon-root': {
			marginRight: '15px',
			fontSize: '20px',
			marginBottom: '0px !important',
		},
		'& .MuiTabs-indicator': {
			height: '3px !important',
			borderTopRightRadius: '5px',
			borderTopLeftRadius: '5px',
		},
	},
	panel: {
		height: 'calc(100vh - 120px)',
		overflowY: 'auto',
	},
});

export default styles;
