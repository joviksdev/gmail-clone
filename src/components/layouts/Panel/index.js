import React from 'react';
import Table from '../Table/Table';
import TabPanel from './TabPanel';
import styles from './styles';

// MAterial-ui/Core
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

const Index = () => {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);
	const handleChange = (e, value) => {
		setValue(value);
	};
	return (
		<div>
			<Box px='5px'>
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label='simple tabs example'
					className={classes.tabs}
				>
					<Tab label='primary' />
					<Tab label='social' />
					<Tab label='promotion' />
				</Tabs>
			</Box>
			<TabPanel value={value} index={0}>
				<Table />
			</TabPanel>
			<TabPanel value={value} index={1}>
				Social
			</TabPanel>
			<TabPanel value={value} index={2}>
				Promotion
			</TabPanel>
		</div>
	);
};

export default Index;
