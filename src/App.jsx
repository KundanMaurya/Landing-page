// it is a component in the component always we use export default keyword so we can import it from other files , and next thing component first latter is always in capital latter 
import './App.css';
import Navigation from './component/navigation';
import Hero from './component/Hero';

const App = () =>{
    return (
      <div>
       <Navigation/>
       <Hero/>
      </div>
    );   
};
export default App;