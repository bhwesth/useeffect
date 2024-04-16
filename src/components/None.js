import { useEffect, useState } from 'react';
import api from '../api/api'

export default function None() {
    const [state, setState] = useState(1)
    const type = "none"
    const effectCount = api.getEffectCount(type) + 1;



    useEffect(() => {
        api.updateEffectCount(type, effectCount)
    });


    
    return (
        <div className='none'>
            <h2>No array</h2>
            <button onClick={() => setState(prevState => prevState+1)}>Click me</button>
            <p>Button clicked<br/> <strong>{state}</strong> <br/>{state === 1 ? "time" : "times"}.</p>
            <h3>useEffect in this component called<br/><strong>{effectCount}</strong><br/>{effectCount === 1 ? "time" : "times"}</h3>
        </div>
    )
}