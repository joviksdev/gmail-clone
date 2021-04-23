// Material-ui/Icon
import SendIcon from '@material-ui/icons/Send';
import StarIcon from '@material-ui/icons/Star';
import InboxIcon from '@material-ui/icons/Inbox';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import DeleteIcon from '@material-ui/icons/Delete';
import InfoIcon from '@material-ui/icons/Info';
import EmailIcon from '@material-ui/icons/Email';
import CancelScheduleSendIcon from '@material-ui/icons/CancelScheduleSend';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import SettingsIcon from '@material-ui/icons/Settings';
import AddIcon from '@material-ui/icons/Add';

const lists = [
	{
		name: 'inbox',
		icon: <InboxIcon />,
	},

	{
		name: 'starred',
		icon: <StarIcon />,
	},
	{
		name: 'snoozed',
		icon: <AccessTimeIcon />,
	},
	{
		name: 'sent',
		icon: <SendIcon />,
	},
	{
		name: 'draft',
		icon: <InsertDriveFileIcon />,
	},
];

const more = [
	{
		name: 'important',
		icon: <LabelImportantIcon />,
	},

	{
		name: 'chat',
		icon: <ContactSupportIcon />,
	},
	{
		name: 'scheduled',
		icon: <CancelScheduleSendIcon />,
	},
	{
		name: 'all mail',
		icon: <EmailIcon />,
	},
	{
		name: 'spam',
		icon: <InfoIcon />,
	},
	{
		name: 'bin',
		icon: <DeleteIcon />,
	},
];

const label = [
	{
		name: 'manage label',
		icon: <SettingsIcon />,
	},
	{
		name: 'create new label',
		icon: <AddIcon />,
	},
];

export { lists, more, label };
