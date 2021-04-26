import React, { useState } from 'react';
import Wrapper from '../../layouts/wrapper/PrivateWrapper';
import Panel from './Panel';
import Header from '../../layouts/Table/Header';

const Inbox = () => {
	const [isSelectedAllInbox, setIsSelectedAllInbox] = useState(false);

	const selectAllInbox = () => setIsSelectedAllInbox(!isSelectedAllInbox);
	return (
		<Wrapper>
			<Header
				isSelectedAllInbox={isSelectedAllInbox}
				selectAllInbox={selectAllInbox}
			/>
			<Panel isSelectedAllInbox={isSelectedAllInbox} />
		</Wrapper>
	);
};

export default Inbox;
