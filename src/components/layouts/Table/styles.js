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
});

export default styles;
