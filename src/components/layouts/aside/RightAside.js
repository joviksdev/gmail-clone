import React from 'react';
import styles from './styles';

// Material-ui/Core
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

// Material-ui/Icons
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles(styles);

const RightAside = () => {
	const classes = useStyles();
	return (
		<Box
			borderLeft='1px solid rgba(0, 0, 0, 0.2)'
			padding='10px'
			display='flex'
			flexDirection='column'
			height='100%'
		>
			<Button style={{ marginBottom: '20px' }} className={classes.btn}>
				<CalendarTodayIcon />
			</Button>
			<Button style={{ marginBottom: '20px' }} className={classes.btn}>
				<EmojiObjectsIcon />
			</Button>
			<Button className={classes.btn}>
				<AccountCircleIcon />
			</Button>
		</Box>
	);
};

export default RightAside;
