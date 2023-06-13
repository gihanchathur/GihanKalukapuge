//import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
//import { createRoot } from 'react-dom';
import { createRoot } from 'react-dom/client';



//ReactDOM.render(<App/>, document.querySelector('#xroot'));
createRoot(document.getElementById('root')).render(<App />);

