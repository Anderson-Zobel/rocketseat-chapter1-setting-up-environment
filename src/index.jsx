// import { render } from 'react-dom';
// ReactDOM.render is no longer supported in React 18. Use createRoot instead. 
import { createRoot } from 'react-dom/client';
import { App } from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />); 
