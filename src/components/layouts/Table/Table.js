import React from 'react';
import styles from './styles';
import Checkbox from '../customFormComponents/CustomCheckbox';
import data from './data.json';

//  Material-ui/Core
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';

// MAterial-ui/Icons
import GradeOutlinedIcon from '@material-ui/icons/GradeOutlined';

const useStyles = makeStyles(styles);

const Index = () => {
	const classes = useStyles();
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(5);
	return (
		<TableContainer className={classes.tableContainer}>
			<Table>
				<TableBody>
					{(rowsPerPage > 0
						? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
						: data
					).map((row) => (
						<TableRow hover key={row.id}>
							<TableCell padding='checkbox'>
								<Checkbox />
							</TableCell>
							<TableCell padding='checkbox'>
								<GradeOutlinedIcon />
							</TableCell>
							<TableCell>{row.sender}</TableCell>
							<TableCell scope='row'>{row.title}</TableCell>
							<TableCell align='right' scope='row'>
								{row.date}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default Index;
