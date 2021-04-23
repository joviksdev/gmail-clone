import React from 'react';
import styles from './styles';
import MenuList from './MenuList';
import Meet from './Meet';
import HangoutSupport from './HangoutSupport';

// Material-ui/Core
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

// Material-ui/Icon
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(styles);

const LeftAside = () => {
	const classes = useStyles();

	return (
		<Box>
			<Box marginLeft='10px' marginBottom='10px'>
				<Button className={classes.btnCompose}>
					<AddIcon />
					<span style={{ padding: '0px 10px' }}>Compose</span>
				</Button>
			</Box>
			<MenuList />
			<Meet />
			<HangoutSupport />
		</Box>
	);
};

export default LeftAside;
