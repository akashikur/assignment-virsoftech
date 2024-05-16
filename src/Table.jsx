/* eslint-disable react/prop-types */
import "./App.css";
const Table = ({ addedCoins }) => {
  const getTotalAmount = () => {
    return addedCoins.reduce((acc, coin) => acc + coin.total, 0).toFixed(2);
  };
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>COIN</th>
            <th>OTY</th>
            <th>AMOUNT</th>
          </tr>
        </thead>
        <tbody>
          {addedCoins.map((coin) => (
            <tr key={coin.id}>
              <td>{coin.name}</td>
              <td>{coin.qty}</td>
              <td>{coin.total}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td className="total">Total</td>
            <td className="total"> ${getTotalAmount()}</td>
          </tr>
        </tfoot>
      </table>
      {/* <div className="total">
        <strong>Total Amount: </strong>
      </div> */}
    </div>
  );
};

export default Table;
