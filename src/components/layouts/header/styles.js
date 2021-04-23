import { btn, container } from '../../../assets/js/stylesComponents';

const styles = () => ({
	container: {
		...container,
	},
	appBar: {
		...container,
		backgroundColor: 'transparent !important',
		padding: '5px 0px',
		width: '100%',
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
