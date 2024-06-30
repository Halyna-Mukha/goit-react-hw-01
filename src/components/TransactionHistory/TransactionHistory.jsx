import React from "react";

import s from "./TransactionHistory.module.css";
const tableHeaders = ["type", "amount", "currency"];
const TransactionHistory = ({ items }) => {
  return (
    <table className={s.table}>
      <thead className={s.thead}>
        <tr>
          {tableHeaders.map((elem, index) => (
            <th key={index} className={s.th}>
              {elem}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={s.tr}>
            <td className={s.td}>{type}</td>
            <td className={s.td}>{amount}</td>
            <td className={s.td}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
