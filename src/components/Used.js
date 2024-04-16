import { useEffect, useState } from 'react';
import api from '../api/api'

export default function Used() {
  const [state, setState] = useState(1)
  const type = "used"
  const effectCount = api.getEffectCount(type) + 1;



  useEffect(() => {
    api.updateEffectCount(type, effectCount)
  },[state]);


  
  return (
    <div className='used'>
      <h2>Used array</h2>
      <button onClick={() => setState(prevState => prevState+1)}>Click me</button>
      <p>Button clicked<br/> <strong>{state}</strong> <br/>{state === 1 ? "time" : "times"}.</p>
      <h3>useEffect in this component called<br/><strong>{effectCount}</strong><br/>{effectCount === 1 ? "time" : "times"}</h3>
    </div>
  )
}