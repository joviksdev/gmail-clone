import React from 'react';
import styles from './styles';

// Material-ui/Core
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

//  Material-ui/Icon
import VideocamIcon from '@material-ui/icons/Videocam';
import KeyboardIcon from '@material-ui/icons/Keyboard';

const useStyles = makeStyles(styles);

const Meet = () => {
	const classes = useStyles();
	return (
		<Box padding='10px 0px'>
			<Typography className={classes.subHeaderText} variant='h6'>
				More
			</Typography>
			<List className={classes.menuList}>
				<ListItem button>
					<VideocamIcon />
					<ListItemText primary='new meeting' />
				</ListItem>
				<ListItem button>
					<KeyboardIcon />
					<ListItemText primary='join a meeting' />
				</ListItem>
			</List>
		</Box>
	);
};

export default Meet;
