import React from 'react';
import Table from '../../layouts/Table/Table';
import TabPanel from './TabPanel';
import styles from './styles';
import inbox from '../../../assets/data/inbox.json';

// MAterial-ui/Core
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

// Material-ui/Icons
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

const useStyles = makeStyles(styles);

const Index = ({ isSelectedAllInbox }) => {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);
	const handleChange = (e, value) => {
		setValue(value);
	};
	return (
		<Box className={classes.panel}>
			<Box
				borderBottom='1px solid rgba(250, 250, 250, 0.5)'
				bgcolor='rgba(0, 0, 0, 0.3)'
				color='white'
				px='10px'
			>
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label='simple tabs example'
					className={classes.tabs}
				>
					<Tab label='primary' icon={<InboxIcon />} />
					<Tab label='social' icon={<PeopleAltIcon />} />
					<Tab label='promotion' icon={<LocalOfferIcon />} />
				</Tabs>
			</Box>
			<TabPanel value={value} index={0}>
				<Table isSelectedAllInbox={isSelectedAllInbox} data={inbox} />
			</TabPanel>
			<TabPanel value={value} index={1}>
				Social
			</TabPanel>
			<TabPanel value={value} index={2}>
				Promotion
			</TabPanel>
		</Box>
	);
};

export default Index;
