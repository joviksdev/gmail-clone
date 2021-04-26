import React, { useRef, useState } from 'react';
import Checkbox from '../customFormComponents/CustomCheckbox';
import styles from './styles';
import Pagination from './Pagination';

//  Material-ui/Core
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

// Material-ui/Icons
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RefreshIcon from '@material-ui/icons/Refresh';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(styles);

const Header = ({ selectAllInbox, isSelectedAllInbox }) => {
	const classes = useStyles();

	const [openList, setOpenList] = useState(false);
	const [openMarkAll, setOpenMarkAll] = useState(false);
	const anchorRef = useRef(null);
	const markAllRef = useRef(null);

	const handleToggleList = () => {
		setOpenList((prevOpen) => !prevOpen);
	};
	const handleToggleMarkAll = () => {
		setOpenMarkAll((prevOpen) => !prevOpen);
	};

	const handleCloseList = (event) => {
		setOpenList(false);
	};
	const handleCloseMarkAll = (event) => {
		setOpenMarkAll(false);
	};

	const lists = [
		{
			name: 'all',
		},
		{
			name: 'none',
		},
		{
			name: 'read',
		},
		{
			name: 'unread',
		},
		{
			name: 'starred',
		},
		{
			name: 'unstarred',
		},
	];

	return (
		<Box
			padding='0px 14px'
			display='flex'
			alignItems='center'
			justifyContent='space-between'
		>
			<Box display='flex' alignItems='center'>
				<Box ref={anchorRef} display='flex' position='relative'>
					<Checkbox checked={isSelectedAllInbox} onChange={selectAllInbox} />
					<ArrowDropDownIcon
						style={{ cursor: 'pointer' }}
						onClick={handleToggleList}
					/>
					<Popper
						open={openList}
						anchorEl={anchorRef.current}
						role={undefined}
						transition
						disablePortal
						placement='bottom-start'
						style={{ zIndex: '200', position: 'absolute' }}
					>
						{({ TransitionProps }) => (
							<Grow
								{...TransitionProps}
								style={{
									transformOrigin: 'top',
								}}
							>
								<Paper>
									<ClickAwayListener onClickAway={handleCloseList}>
										<List className={classes.list}>
											{lists.map((list, key) => (
												<ListItem button key={key} onClick={handleCloseList}>
													{list.name}
												</ListItem>
											))}
										</List>
									</ClickAwayListener>
								</Paper>
							</Grow>
						)}
					</Popper>
				</Box>
				<Button className={classes.contentBtn}>
					<RefreshIcon />
				</Button>
				<Button ref={markAllRef} className={classes.contentBtn}>
					<MoreVertIcon onClick={handleToggleMarkAll} />
					<Popper
						open={openMarkAll}
						anchorEl={markAllRef.current}
						role={undefined}
						transition
						disablePortal
						placement='bottom-start'
						style={{ zIndex: '200', position: 'absolute' }}
					>
						{({ TransitionProps }) => (
							<Grow
								{...TransitionProps}
								style={{
									transformOrigin: 'top',
								}}
							>
								<Paper>
									<ClickAwayListener onClickAway={handleCloseMarkAll}>
										<List style={{ width: 250 }} className={classes.list}>
											<ListItem
												style={{ marginBottom: '6px' }}
												button
												onClick={handleCloseMarkAll}
											>
												Mark all as read
											</ListItem>
											<Divider />
											<Typography align='left' variant='body2'>
												Select messages to see more actions
											</Typography>
										</List>
									</ClickAwayListener>
								</Paper>
							</Grow>
						)}
					</Popper>
				</Button>
			</Box>
			<Box>
				<Pagination />
			</Box>
		</Box>
	);
};

export default Header;
