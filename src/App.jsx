import Counter from './counter';
import Batsman from './batsman';
import './App.css'

function App() {

  function handleClick() {
    alert('i am clicked')
  }

  const handleClick3 = () => {
    alert('clicked 3')
  }

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }

  return (
    <>
      {/* ------------------------------------------------ */}
      <h3>Vite + React</h3>

      <Counter></Counter>
      <Batsman></Batsman>

      <button onClick={handleClick}>Click Me</button>

      <button onClick={function handleClick2() {
        alert('clicked')
      }}>Click Me</button>

      <button onClick={handleClick3}>Click me 3</button>

      <button onClick={() => alert('clicked 4')}>Click me 4</button>

      <button onClick={() => handleAdd5(10)}>Click add 5</button>








      {/* ----------------------------------------------------- */}
    </>
  )
}

export default App
