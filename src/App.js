import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar/NavBar';
import Pricing from './components/Pricing/Pricing';
import AssignmentMarks from './components/AssignmentMarks/AssignmentMarks';
import PhoneBar from './components/PhoneBar/PhoneBar';



function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1 className="text-3xl font-bold underline">Make your day with our sites </h1>
      <p>Hello sir, May your life be full of happiness, success, and love. Sending my best wishes to you! </p>
      <Pricing></Pricing>
      <AssignmentMarks></AssignmentMarks>
      <PhoneBar></PhoneBar>
    </div>
  );
}
export default App;
