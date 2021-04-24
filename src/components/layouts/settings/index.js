import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles';
import AppContext from '../../../context/app/appContext';
import CustomRadio from '../customFormComponents/CustomRadio';
import themes from '../../../assets/data/theme';

// Material-ui/Core
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Divider from '@material-ui/core/Divider';

// Material-ui/Icons
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(styles);

const Index = () => {
	const classes = useStyles();
	const appContext = useContext(AppContext);
	const { displaySettings } = appContext;

	const [density, setDensity] = useState('');
	const handleChangeDensity = (e) => {
		setDensity(e.target.value);
	};
	return (
		<Box
			padding='15px'
			className={classes.height}
			bgcolor='rgba(250, 250, 250, 0.6)'
		>
			<Box marginBottom='15px'>
				<Box
					marginBottom='10px'
					display='flex'
					justifyContent='space-between'
					alignItems='center'
				>
					<Typography color='textSecondary'> Quick setting </Typography>
					<Button onClick={displaySettings} className={classes.closeBtn}>
						<CloseIcon />
					</Button>
				</Box>
				<Button color='primary' className={classes.allSettingBtn}>
					See all settings
				</Button>
			</Box>
			<Box>
				<Box>
					<FormControl>
						<FormLabel
							className={classes.subHeaderText}
							style={{ marginBottom: '10px' }}
							component='legend'
						>
							Density
						</FormLabel>
						<RadioGroup
							name='density'
							value={density}
							onChange={handleChangeDensity}
						>
							<CustomRadio
								style={{ marginBottom: '10px' }}
								label='Default'
								value='default'
							/>
							<CustomRadio
								style={{ marginBottom: '10px' }}
								label='Comfortable'
								value='comfortable'
							/>
							<CustomRadio
								style={{ marginBottom: '10px' }}
								label='Compact'
								value='compact'
							/>
						</RadioGroup>
					</FormControl>
				</Box>
				<Divider light />
				<Box padding='10px 0px'>
					<Box
						marginBottom='10px'
						display='flex'
						justifyContent='space-between'
					>
						<Typography color='textSecondary' className={classes.subHeaderText}>
							Theme
						</Typography>
						<Link className={classes.link} to='/'>
							see all
						</Link>
					</Box>
					<Box
						display='grid'
						gridTemplateColumns='repeat(4, 1fr)'
						gridGap='5px'
					>
						{themes.map((theme, key) => (
							<Box className={classes.themeImg} key={key}>
								<img src={theme.src} alt={theme.name} />
							</Box>
						))}
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Index;
