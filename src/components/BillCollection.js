import React from 'react';
import BillCard from './BillCard';

export default function BillCollection( {bills, handleCasting} ) {
  // Your code here

  return (
    <div className="ui four column grid">
      <div className="row">
        {bills.map(b => <BillCard key={b.id} bill={b} handleCasting={handleCasting}/>)}
      </div>
    </div>
  );
}
