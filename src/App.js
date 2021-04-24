import Inbox from './components/views/inbox/Inbox';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
	return (
		<Router className='App'>
			<Switch>
				<Route path='/' component={Inbox} />
			</Switch>
		</Router>
	);
}

export default App;
