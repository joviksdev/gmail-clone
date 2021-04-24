import { btn, container, grayColor } from '../../../assets/js/stylesComponents';

const styles = () => ({
	container: {
		...container,
	},
	appBar: {
		...container,
		zIndex: '10000px',
		boxShadow: 'none',
		borderBottom: `1px solid ${grayColor[9]}`,
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
			fontSize: '24px',
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
	height: {
		height: 'calc(100vh - 50px)',
	},
});

export default styles;
