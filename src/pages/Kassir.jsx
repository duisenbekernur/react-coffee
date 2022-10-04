import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";

export const Kassir = () => {
  let time = new Date().toLocaleTimeString();
  let endTime = new Date("18:00:00");

  const [listOffers, setListOffers] = useState([]);
  const [timer, setTimer] = useState(0)

  setTimeout(() => {
    setTimer(timer + 1)
  }, 500)

  useEffect(() => {
    fetch("https://631d745ccc652771a485e43e.mockapi.io/selledToday")
      .then((res) => res.json())
      .then((res) => setListOffers(res));
  }, [timer]);


  return (
    <div className="wrapper center">
      <div className="kassir-container">
        <div className="work-date">
          <h1>Касса</h1>
          Текущее время: <b> {time}</b>
        </div>
        <table className="offers">
          <tr>
            <th>Ник</th>
            <th>Текущее положение заказа</th>
            <th>Скидки</th>
            <th>Цена</th>
          </tr>

          {listOffers.map((offer) => (
            <tr>
              <td>{offer.nick}</td>
              <td>{offer.isOver}</td>
              <td>бесплатно</td>
              <td>{offer.price} ₸</td>
              <td style={{backgroundColor: 'blue', color: '#fff', cursor: 'pointer'}}>
                {offer.isOver === "в очереди" && "оплатить"}
              </td>
            </tr>
          ))}

        </table>
      </div>
    </div>
  );
};
