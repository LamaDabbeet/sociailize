import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import { ContentPage } from './pages/ContentPage/ContentPage';
import { HomePage } from './pages/HomePage/HomePage';
import './App.scss';

function App() {
  return (
  <Router>
		<Switch>
		  <Route path="/" exact component={HomePage} />
      <Route path="/content" exact component={ContentPage} />
		</Switch>
	</Router>
  );
}

export default App;
