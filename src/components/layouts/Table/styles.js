import { btn, transition } from '../../../assets/js/stylesComponents';

const styles = () => ({
	tableContainer: {
		backgroundColor: 'rgba(0, 0, 0, 0.3)',
		'& .MuiTableCell-root': {
			padding: '4px 0px',
		},
	},
	pagination: {
		'& .MuiTablePagination-input': {
			display: 'none',
		},
		'& .MuiTablePagination-actions': {
			marginLeft: '0px',
		},
		'& .MuiToolbar-root p:nth-child(2)': {
			display: 'none',
		},
	},
	contentBtn: {
		...btn,
		borderRadius: '50%',
		'& .MuiSvgIcon-root': {
			fontSize: '20px',
		},
	},
	list: {
		zIndex: '200',
		display: 'flex',
		flexDirection: 'column',
		'& .MuiListItem-root': {
			display: 'block',
			padding: '6px 50px',
		},
		'& .MuiTypography-body2': {
			padding: '10px 50px',
			fontStyle: 'italic',
		},
	},
	tableBtn: {
		borderRadius: '50%',
		height: '30px',
		width: '30px',
		position: 'relative',
		cursor: 'pointer',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		'& .MuiSvgIcon-root': {
			color: 'white !important',
			zIndex: '200',
		},
		'&:before': {
			...transition,
			content: '""',
			position: 'absolute',
			width: '38px',
			height: '38px',
			borderRadius: '50%',
		},
		'&:hover:before': {
			backgroundColor: 'rgba(0, 0, 0,0.2) !important',
		},
	},
});

export default styles;
