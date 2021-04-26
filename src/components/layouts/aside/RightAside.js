import React, { useContext, useState } from 'react';
import AppContext from '../../../context/app/appContext';
import styles from './styles';
import cx from 'classnames';

// Material-ui/Core
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

// Material-ui/Icons
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles(styles);

const RightAside = () => {
	const classes = useStyles();
	const appContext = useContext(AppContext);
	const { isCollapseRightAside } = appContext;
	const [isDisplay, setIsDisplay] = useState(true);
	const toggleSidebar = () => setIsDisplay(!isDisplay);

	const chevronRightIcon = cx(classes.chevronRightIcon, {
		[classes.chevronRightRotate]: isDisplay === false,
	});
	return (
		<>
			<Box
				className={classes.rightAside}
				borderLeft='1px solid rgba(0, 0, 0, 0.2)'
				padding='10px'
				display={isDisplay ? 'flex' : 'none'}
				flexDirection='column'
				position='relative'
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
			<Button onClick={toggleSidebar} className={chevronRightIcon}>
				<ChevronRightIcon />
			</Button>
		</>
	);
};

export default RightAside;
