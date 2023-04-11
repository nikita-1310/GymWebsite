import './App.css';
import Hero from './Components/Hero/Hero';
import Plan from './Components/Plans/Plan';
import Programs from './Components/Programs/Programs';
import Reasons from './Components/Reasons/Reasons';

function App() {
  return (
    <>
      <div className="App">
        <Hero />
        <Programs />
        <Reasons />
        <Plan />
      </div>
    </>
  );
  
}
export default App;
