import React, { useState } from 'react';
import styles from '../header/styles';

// MAterial-ui/Core
import TablePagination from '@material-ui/core/TablePagination';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

const Pagination = () => {
	const classes = useStyles();
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	return (
		<TablePagination
			className={classes.pagination}
			component='div'
			count={100}
			page={page}
			onChangePage={handleChangePage}
			rowsPerPage={rowsPerPage}
			onChangeRowsPerPage={handleChangeRowsPerPage}
		/>
	);
};

export default Pagination;
