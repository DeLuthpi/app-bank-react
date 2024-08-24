import { useRoutes } from "react-router-dom"
import { routeList } from "./routes/routeList";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from "react-redux"

function App() {
	const element = useRoutes(routeList);
	const theme = useSelector(state => state.theme.darkMode);
	theme ? document.body.classList.add("dark-mode") : document.body.classList.remove("dark-mode");
	console.log(theme);
	
	return element;
}

export default App;
library.add( fas )
