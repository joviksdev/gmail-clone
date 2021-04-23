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
		'& .MuiSvgIcon-root': {
			fontSize: '18px',
		},
	},
	contentBtn: {
		...btn,
		borderRadius: '50%',
		'& .MuiSvgIcon-root': {
			fontSize: '20px',
		},
	},
	pagination: {
		'& .MuiTablePagination-input, #mui-28998': {
			display: 'none',
		},
		'& .MuiTablePagination-actions': {
			marginLeft: '0px',
		},
	},
});

export default styles;
