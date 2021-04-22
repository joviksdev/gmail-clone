import { btn } from '../../../assets/js/stylesComponents';

const styles = () => ({
	container: {
		backgroundColor: 'transparent !important',
		paddingTop: '5px',
		paddingBottom: '5px',
		'& .MuiToolbar-regular': {
			minHeight: 'initial',
		},
	},
	barIcon: {
		...btn,
	},
	btn: {
		...btn,
	},
});

export default styles;
