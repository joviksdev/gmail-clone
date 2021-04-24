import { btn } from '../../../assets/js/stylesComponents';

const styles = () => ({
	tableContainer: {
		backgroundColor: 'rgba(0, 0, 0, 0.3)',
		'& .MuiTableCell-root': {
			padding: '10px',
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
});

export default styles;
