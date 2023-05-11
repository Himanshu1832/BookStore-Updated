import './App.css';
import { BrowserRouter as Router, Route, Link ,Routes} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query'
// import { ReactQueryDevtools } from 'react-query/devtools'
import { ReactQueryDevtools } from 'react-query/devtools'
import LoginForm from '../Pages/LoginForm/LoginForm';
import RegisterForm from '../Pages/RegisterForm/RegisterForm';
import MyBuys from '../Pages/BooksForBuy/BooksForBuy';
import AddBook from '../Components/AddBook/AddBook';
import BuyBookDetail from '../Components/BuyBookDetails/BuyBookDetails';
import MySell from '../Pages/MySell/MySell';
import Cart from '../Pages/Cart/Cart';
import CartDetails from '../Components/CartDetails/CartDetails';
import SellBookDetail from '../Components/SellBookDetail/SellBookDetail';

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
          <Route path="/mysell" element={<MySell />} />
          <Route path="/mycart" element={<Cart />} />
          
          <Route path="/addbook" element={<AddBook />} />
          <Route path="/buybookdetails/:id" element={<BuyBookDetail />} />
          <Route path="/cartdetails/:id" element={<CartDetails />} />
          <Route path="/sellbookdetail/:id" element={<SellBookDetail />} />
          

        </Routes>
      </div>
    </Router>
    <ReactQueryDevtools initialIsOpen={false}/> 
    </QueryClientProvider>
  );
}

export default App;
