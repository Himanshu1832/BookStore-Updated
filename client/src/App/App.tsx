import './App.css';
import { BrowserRouter as Router, Route, Link ,Routes} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query'
// import { ReactQueryDevtools } from 'react-query/devtools'
import { ReactQueryDevtools } from 'react-query/devtools'
import LoginForm from '../Pages/LoginForm/LoginForm';
import RegisterForm from '../Pages/RegisterForm/RegisterForm';
import MyBuys from '../Pages/MyBuys/MyBuys';
import AddBook from '../Components/AddBook/AddBook';

const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
    <Router>
      <div>
        {/* <nav >
          <ul className='nav'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/lodash">Lodash</Link>
            </li>
          </ul>
        </nav> */}
        <Routes>
          
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/" element={<MyBuys />} />
          <Route path="/addbook" element={<AddBook />} />


        </Routes>
      </div>
    </Router>
    <ReactQueryDevtools initialIsOpen={false}/> 
    </QueryClientProvider>
  );
}

export default App;
