import React, { useReducer } from 'react';
import AppContext from './appContext';
import appReducer from './appReducer';

import { DISPLAY_SETTINGS } from '../types';

const AppState = (props) => {
	const initialState = {
		isDisplaySettings: false,
	};

	const [state, dispatch] = useReducer(appReducer, initialState);

	const displaySettings = () => {
		dispatch({
			type: DISPLAY_SETTINGS,
		});
	};

	return (
		<AppContext.Provider
			value={{
				isDisplaySettings: state.isDisplaySettings,
				displaySettings,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};

export default AppState;
