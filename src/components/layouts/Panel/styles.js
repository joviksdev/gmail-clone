import { btn } from '../../../assets/js/stylesComponents';

const styles = () => ({
	tabs: {
		'& .MuiButtonBase-root': {
			...btn,
			minWidth: '240px !important',
		},
		'& .MuiTab-wrapper': {
			flexDirection: 'initial',
			justifyContent: 'initial',
		},
		'& .MuiTabs-indicator': {
			height: '3px !important',
			borderTopRightRadius: '5px',
			borderTopLeftRadius: '5px',
		},
	},
	indicator: {},
});

export default styles;
