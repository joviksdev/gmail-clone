import React from 'react';
import Checkbox from '../customFormComponents/CustomCheckbox';
import styles from './styles';
import Pagination from '../Table/Pagination';

//  Material-ui/Core
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';

// Material-ui/Icons
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RefreshIcon from '@material-ui/icons/Refresh';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(styles);

const ContenHeader = () => {
	const classes = useStyles();

	const [open, setOpen] = React.useState(false);
	const anchorRef = React.useRef(null);

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return;
		}

		setOpen(false);
	};
	return (
		<Box display='flex' alignItems='center' justifyContent='space-between'>
			<Box display='flex' alignItems='center'>
				<Box ref={anchorRef} display='flex'>
					<Checkbox />
					<ArrowDropDownIcon style={{ cursor: 'pointer' }} />
					<Popper
						open={open}
						anchorEl={anchorRef.current}
						role={undefined}
						transition
						disablePortal
					>
						{({ TransitionProps, placement }) => (
							<Grow
								{...TransitionProps}
								style={{
									transformOrigin: placement === 'bottom',
								}}
							>
								<Paper>
									<ClickAwayListener onClickAway={handleClose}>
										<MenuList
											autoFocusItem={open}
											id='menu-list-grow'
											onKeyDown={handleListKeyDown}
										>
											<MenuItem onClick={handleClose}>Profile</MenuItem>
											<MenuItem onClick={handleClose}>My account</MenuItem>
											<MenuItem onClick={handleClose}>Logout</MenuItem>
										</MenuList>
									</ClickAwayListener>
								</Paper>
							</Grow>
						)}
					</Popper>
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
