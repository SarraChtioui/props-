import './App.css';
import Profile from './Profile/Profile'

function App() {

      const handleName = FullName => {
        return alert (FullName)
      }
  return (
    <div className="App">
      <Profile FullName="Jane Doe"
      Bio = "lived fast died young"
      profession = "Russian Spy"
      handleName = {handleName}>
        <img src="/images.jpg"/>
      </Profile>
      
    </div>
  );
}

export default App;
