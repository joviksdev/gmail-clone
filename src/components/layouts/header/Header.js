import React, { useContext } from 'react';
import AppContext from '../../../context/app/appContext';
import styles from './styles';
import logo from '../../../assets/img/gmail-logo.png';
import TextField from '../customFormComponents/TextField';

// Material-ui/core
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';

// Material-ui/icon
import MenuIcon from '@material-ui/icons/Menu';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

const useStyles = makeStyles(styles);

const Header = () => {
	const classes = useStyles();
	const appContext = useContext(AppContext);
	const { displaySettings } = appContext;

	const handleDisplaySettings = () => {
		displaySettings();
	};

	return (
		<AppBar position='static' className={classes.appBar}>
			<Toolbar>
				<Box height='50px' width='100%' display='flex'>
					<Box
						flexBasis='240px'
						flexShrink='0'
						display='flex'
						alignItems='center'
					>
						<Box mr='10px'>
							<Button className={classes.barIcon}>
								<MenuIcon />
							</Button>
						</Box>
						<Box>
							<img src={logo} alt='gmail-logo' />
						</Box>
					</Box>
					<Box flex='1' display='flex' alignItems='center'>
						<TextField
							fullWidth={true}
							variant='outlined'
							placeholder='Search email'
							startAdornment={
								<InputAdornment position='start'>
									<SearchOutlinedIcon />
								</InputAdornment>
							}
						/>
					</Box>
					<Box
						display='flex'
						flexShrink='0'
						flexBasis='350px'
						justifyContent='flex-end'
						alignItems='center'
					>
						<Box
							display='grid'
							gridGap='5px'
							gridTemplateColumns='repeat(3, 1fr)'
						>
							<Button className={classes.btn}>
								<HelpOutlineOutlinedIcon />
							</Button>
							<Button onClick={handleDisplaySettings} className={classes.btn}>
								<SettingsOutlinedIcon />
							</Button>
							<Button className={classes.btn}>
								<AppsOutlinedIcon />
							</Button>
						</Box>
						<Box>
							<Button className={classes.btn}>
								<PersonOutlinedIcon />
							</Button>
						</Box>
					</Box>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
