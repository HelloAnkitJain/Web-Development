import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
function App(props) {
  const temp = "value";
  return (
    <div className="App" >
        <div >Ankit Jain</div>
        <Card className='green' patola="proper potato" customProp="oppo vivo realme" ></Card>
        <p>
          {temp}
        </p>

    </div>
  );
}

export default App;
