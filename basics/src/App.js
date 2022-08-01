import './App.css';
import Navbar from './components/Navbar';


function App() {
  const userName = "Zhoha28";
  return (
    <>
    <Navbar companyName="TextUtils" userName={userName}></Navbar>
    </>
  );
}

export default App;


