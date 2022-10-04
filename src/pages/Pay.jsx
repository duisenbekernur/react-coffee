import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";

export const Pay = () => {
  const [qrCode, setQrCode] = useState("");
  const [qrGenerate, setQrGenerate] = useState(false);
  function callQr() {
    QRCode.toDataUrl({ width: 150, height: 150 }, (err, url) => {
      if (err) return console.log(err);
      setQrCode(url);
      setQrGenerate(true);
    });
  }
  return (
    <div className="qr">
      {callQr}
      <QRCode value={qrCode} />
    </div>
  );
};
