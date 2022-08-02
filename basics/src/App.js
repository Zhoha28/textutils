import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  const userName = "Zhoha28";
  return (
    <>
    <Navbar companyName="TextUtils" userName={userName}></Navbar>
    <div className='container my-3'>
    <TextForm heading="Enter the text to analyse below - "></TextForm>
   
    </div>
   
    </>
  );
}

export default App;


