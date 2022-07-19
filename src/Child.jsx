import {useState, useEffect} from "react";

export default function Child({onChildClick}) {
  console.log('Child');

  const clickHandler = () => {
    setState(false);
  }

  const [state, setState] = useState(false);

  return (
    <div onClick={clickHandler}>Child</div>
  )
}