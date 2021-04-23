import React from 'react';
import Checkbox from '../customFormComponents/CustomCheckbox';
import styles from './styles';
import Pagination from '../Table/Pagination';

//  Material-ui/Core
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

// Material-ui/Icons
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RefreshIcon from '@material-ui/icons/Refresh';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(styles);

const ContenHeader = () => {
	const classes = useStyles();
	return (
		<Box display='flex' alignItems='center' justifyContent='space-between'>
			<Box display='flex' alignItems='center'>
				<Box display='flex'>
					<Checkbox />
					<ArrowDropDownIcon />
				</Box>
				<Button className={classes.contentBtn}>
					<RefreshIcon />
				</Button>
				<Button className={classes.contentBtn}>
					<MoreVertIcon />
				</Button>
			</Box>
			<Box>
				<Pagination />
			</Box>
		</Box>
	);
};

export default ContenHeader;
