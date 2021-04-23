import React from 'react';
import Header from '../header/Header';
import LeftAside from '../aside/LeftAside';
import styles from './styles';
import ContentHeader from '../Table/Header';

//  Material-ui/Core
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

const PrivateWrapper = ({ children }) => {
	const classes = useStyles();
	return (
		<Box position='fixed' width='100%' height='100vh'>
			<Header />
			<Box className={classes.container}>
				<Box width='100%' display='grid' gridTemplateColumns='21% 75%'>
					<Box>
						<LeftAside />
					</Box>
					<Box>
						<ContentHeader />
						<Box>{children}</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default PrivateWrapper;
