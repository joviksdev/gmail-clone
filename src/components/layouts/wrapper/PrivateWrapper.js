import React, { useContext } from 'react';
import AppContext from '../../../context/app/appContext';
import Header from '../header/Header';
import LeftAside from '../aside/LeftAside';
import styles from './styles';
import ContentHeader from '../Table/Header';
import Settings from '../settings';
// import img from '../../../assets/img/themes/theme1.jpg';
import RightAside from '../aside/RightAside';

//  Material-ui/Core
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

const PrivateWrapper = ({ children }) => {
	const classes = useStyles();
	const appContext = useContext(AppContext);
	const { isDisplaySettings } = appContext;
	return (
		<Box
			position='fixed'
			width='100%'
			height='100vh'
			style={{
				background: `url('${''}') no-repeat center center`,
				backgroundSize: '100%',
				backgroundPosition: 'center ',
			}}
		>
			<Header />
			<Box width='100%' display='flex'>
				<Box flexShrink='0' width='280px'>
					<LeftAside />
				</Box>
				<Box className={classes.height} width='100%' flexShrink='1'>
					<ContentHeader />
					<Box>{children}</Box>
				</Box>
				{isDisplaySettings && (
					<Box
						className={classes.height}
						display='block'
						flexShrink='0'
						width='315px'
						paddingLeft='15px'
					>
						<Settings />
					</Box>
				)}
				<Box className={classes.height}>
					<RightAside />
				</Box>
			</Box>
		</Box>
	);
};

export default PrivateWrapper;
