import React, { useState } from 'react';
import styles from './styles';
import Checkbox from '../customFormComponents/CustomCheckbox';

//  Material-ui/Core
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

// MAterial-ui/Icons
import GradeOutlinedIcon from '@material-ui/icons/GradeOutlined';
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';

const useStyles = makeStyles(styles);

const Index = ({ data, isSelectedAllInbox }) => {
	const classes = useStyles();
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [selected, setSelected] = useState([]);

	const handleSelect = (id) => {
		console.log(id);

		if (selected.includes(id)) {
			return setSelected(selected.filter((value) => value !== id));
		}
		setSelected([...selected, id]);
	};

	return (
		<TableContainer className={classes.tableContainer}>
			<Table>
				<TableBody>
					{(rowsPerPage > 0
						? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
						: data
					).map((row) => (
						<TableRow className={classes.row} hover key={row.id}>
							<TableCell style={{ width: '3px', marginLeft: '5px' }}>
								<Checkbox
									checked={selected.includes(row.id) || isSelectedAllInbox}
									onChange={() => handleSelect(row.id)}
									style={{ marginLeft: '10px' }}
									className={classes.tableBtn}
								/>
							</TableCell>
							<TableCell
								style={{
									width: '3px',
								}}
							>
								<Box className={classes.tableBtn}>
									<GradeOutlinedIcon />
								</Box>
							</TableCell>
							<TableCell
								style={{
									width: '3px',
								}}
							>
								<Box
									style={{ marginRight: '6px' }}
									className={classes.tableBtn}
								>
									<LabelImportantOutlinedIcon />
								</Box>
							</TableCell>
							<TableCell>{row.sender}</TableCell>
							<TableCell scope='row'>{row.title}</TableCell>
							<TableCell align='right' style={{ paddingRight: '12px' }}>
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
