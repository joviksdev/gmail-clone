import React, { useState } from 'react';
import cx from 'classnames';
import { lists, more, label } from './data';

import styles from './styles';

// Material-ui/Core
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import Tooltip from '@material-ui/core/Tooltip';

// Material-ui/Icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LabelIcon from '@material-ui/icons/Label';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const useStyles = makeStyles(styles);

const MenuList = () => {
	const classes = useStyles();

	const [isDisplayMore, setIsDisplayMore] = useState(false);
	const handleExpandMore = () => setIsDisplayMore(!isDisplayMore);
	const rotate = cx({ [classes.rotate]: isDisplayMore });
	const [isDisplayCategory, setIsDisplayCategory] = useState(false);
	const handleExpandCategory = () => setIsDisplayCategory(!isDisplayCategory);

	return (
		<Box className={classes.menuListWrapper}>
			<List className={classes.menuList}>
				{lists.map((list, key) => (
					<Tooltip key={key} title={list.name} placement='right'>
						<ListItem button key={key}>
							{list.icon}
							<ListItemText primary={list.name} />
						</ListItem>
					</Tooltip>
				))}
				<ListItem button onClick={handleExpandMore}>
					<ExpandMoreIcon className={rotate} />
					<ListItemText primary={isDisplayMore ? 'less' : 'more'} />
				</ListItem>
				<Collapse in={isDisplayMore}>
					{more.map((list, key) => (
						<ListItem button key={key}>
							{list.icon}
							<ListItemText primary={list.name} />
						</ListItem>
					))}
					<ListItem button onClick={handleExpandCategory}>
						<ArrowRightIcon
							style={{
								transform: isDisplayCategory ? 'rotate(90deg)' : 'rotate(0deg)',
							}}
							className={classes.rightIcon}
						/>
						<LabelIcon />
						<ListItemText primary='categories' />
					</ListItem>
					<Collapse in={isDisplayCategory}>
						{label.map((list, key) => (
							<ListItem button key={key}>
								{list.icon}
								<ListItemText primary={list.name} />
							</ListItem>
						))}
					</Collapse>
				</Collapse>
			</List>
		</Box>
	);
};

export default MenuList;
