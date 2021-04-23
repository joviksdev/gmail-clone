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
});

export default styles;
