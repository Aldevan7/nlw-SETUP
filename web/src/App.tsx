import './style/global.css'
import { Habit } from './components/Habit'

function App() {
  
  return (
    <>
    <Habit completed={3}/>
    <Habit completed={60}/>
    <Habit completed={10}/>
    <Habit completed={55}/>   
    </>
    )
}

export default App