import React from 'react';
import styles from './styles';

// Material-ui/Core
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

// Material-ui/Icons
import PersonIcon from '@material-ui/icons/Person';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';

const useStyles = makeStyles(styles);

const HangoutSupport = () => {
	const classes = useStyles();
	return (
		<Box
			position='absolute'
			bottom='0px'
			display='flex'
			justifyContent='center'
			width='20%'
			borderTop='1px solid gray'
		>
			<Divider
				style={{ backgroundColor: 'gray' }}
				className={classes.divider}
			/>
			<Button className={classes.btn}>
				<PersonIcon />
			</Button>
			<Button className={classes.btn}>
				<ContactSupportIcon />
			</Button>
		</Box>
	);
};

export default HangoutSupport;
