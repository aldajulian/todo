import React, { useState, useRef } from "react";
import { MakeID} from '../../utils/config'

const Bar = ({
  setTodos
}) => {
  let [ rows, setRows ] = useState(1)
  let [ inputBar, setInputBar ] = useState('')
  const inputRef = useRef();

  const handleKey = (e) => {
    let inputValue = inputRef.current.value

    if(e.key === "Enter") {
      e.preventDefault();

      if (!inputValue.length) return;

      setTodos((prevState) => (
        [{id: MakeID(6), name: inputValue}, ...prevState]
      ))
      
      setInputBar('')
      // inputRef.current.value = ''
    }
  }

  return(
    <div className="bar d-flex flex-align-center flex-content-between">
      <textarea
        ref={inputRef}
        placeholder="Add your next task"
        rows={rows}
        value={inputBar}
        onKeyDown={(e) => handleKey(e)}
        onChange={(e) => setInputBar(e.value)}
        />
    </div>
  )
}

export default Bar;