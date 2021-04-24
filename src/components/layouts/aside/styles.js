import { btn, whiteColor } from '../../../assets/js/stylesComponents';

const styles = () => ({
	menuListWrapper: {
		height: '30vh',
		overflowY: 'auto',
	},
	btnCompose: {
		...btn,
		padding: '8px 15px',
		borderRadius: '30px',
		backgroundColor: whiteColor,
		boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)',
		'& .MuiSvgIcon-root': {
			height: '36px',
			width: '36px',
		},
	},
	menuList: {
		'& .MuiListItem-root': {
			position: 'relative',
			padding: '3px 16px 5px 30px',
			'& .MuiTypography-body1': {
				textTransform: 'capitalize',
				fontSize: '15px',
			},
		},
		'& .MuiSvgIcon-root': {
			marginRight: '15px',
			fontSize: '20px',
		},
	},
	rotate: {
		transform: 'rotate(180deg)',
	},
	rightIcon: {
		position: 'absolute',
		left: '10px',
		fontSize: '14px',
	},
	subHeaderText: {
		fontSize: '14px',
		fontWeight: 'bold',
		marginLeft: '30px',
	},
	btn: {
		...btn,
		borderRadius: '50%',
		height: '35px',
		width: '35px',
		'& .MuiSvgIcon-root': {
			fontSize: '20px',
		},
	},
	divider: {
		color: 'red',
	},
	meetingWrapper: {
		height: '20vh',
		overflowY: 'auto',
	},
});

export default styles;
