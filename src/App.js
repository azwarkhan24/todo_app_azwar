import { useState } from 'react';
import './App.css';

function App() {
  const [todoArray,setTodoArray] = useState([])
  const [inputValue , setInputValue]=useState('')
  function onSubmission() {
    if (inputValue !== ''){
const new_array=[...todoArray,inputValue]
setTodoArray(new_array)
  }
}
  function onRemoveHandler(index){
    const new_array=todoArray.filter(function(item,i){ 
      return index !== i
    })
    setTodoArray(new_array);
}

  const list=todoArray.map(function(item,index){
    return <li>{item}<button className='btn' onClick={onRemoveHandler}>x</button></li>
  })
  function onValueChange(event){
    const new_value=event.target.value
    setInputValue(new_value)
  }
 
  return (
    <div className="App">
      <div className='App-header'>
    <div style={{display: 'flex'}}>
      <input type='text'value={inputValue} onChange={onValueChange} className='todo-input'/>
      <button className='todo-btn' onClick={onSubmission}>Submit</button>
    </div>
    <ul className='todo-list'>
      {list}
    </ul>  
    </div>
    </div>
  );
}

export default App;
