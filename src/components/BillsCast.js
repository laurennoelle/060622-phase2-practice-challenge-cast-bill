import React from 'react';
import BillCard from './BillCard';

export default function BillsCast( {casting, handleCasting}) {
  // Your code here

  return (
    <div className="ui segment inverted blue bill-cast">
      <div className="ui five column grid">
        <div className="row bill-cast-row">
        {casting.map((bill) => {
          return <BillCard
          id = {bill.id}
          name = {bill.name}
          health = {bill.health}
          salary = {bill.salary}
          rating = {bill.rating}
          catchphrase = {bill.catchphrase}
          handleCasting={handleCasting}
          actor={bill}
          photo = {bill.photo} />
        })}
        </div>
      </div>
    </div>
  );
}

