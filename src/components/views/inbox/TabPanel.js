import React from 'react';

// MAterial-ui/Core
import Box from '@material-ui/core/Box';

const TabPanel = (props) => {
	const { children, value, index, ...other } = props;

	return (
		<Box hidden={value !== index} {...other}>
			{value === index && <Box>{children}</Box>}
		</Box>
	);
};

export default TabPanel;
