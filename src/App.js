import React, {useEffect, useState} from 'react';
import BillCollection from './components/BillCollection';
import BillsCast from './components/BillsCast';

const API = " http://localhost:8002/bills"

export default function App() {
  const [bills, setBills] = useState([])
  const [casting, setCasting] = useState([])

  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(billData => setBills(billData));
  }, []);

  function handleCasting(actor) {
    const castTheActor = [...casting, actor]
    setCasting(castTheActor)
  }
  

  return (
    <div>
      <BillsCast casting={casting}/>
      <BillCollection bills={bills} handleCasting={handleCasting}/>
    </div>
  );
}
