import { useState } from "react"

export const QrCode = () => {
const [img, setImg] = useState("");
const [loading, setLoading] = useState(false);
const [qrData, setQrData] = useState("https://google.com/");
const [qrSize, setQrSize] = useState("150");

async function generateQR() {
  setLoading(true);
  try {
    const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
    setImg(url);
  } catch (error) {
    console.error(error);
    }
    finally {
    setLoading(false);
    }
  }

  function downloadQR() {
    fetch(img)
    .then(response => response.blob())
    .then(blob => {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob)
      link.download = "qr_code.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      })
      .catch(error => console.error(error));
  }

  return (
    <div className="app-container">
        <h1>QR Code Generator</h1>
        {loading && <p>Please Wait...</p>}
        {img && <img src={img} className="qr-code-image" />}
        <div>
            <label className="input-label">Data for QR code:</label>
            <input type="text" id="dataInput" value={qrData} placeholder="Enter data for QR code" onChange={(e) => setQrData(e.target.value) } />
            <label className="input-label">Image size (e.g., 150):</label>
            <input type="text" id="sizeInput" value={qrSize} placeholder="Enter image size" onChange={(e) => setQrSize(e.target.value) } />
            <button className="generate-button" disabled={loading} onClick={generateQR}>Generate QR Code</button>
            <button className="download-button" onClick={downloadQR}>Download QR Code</button>
        </div>
        <p className="footer">
            Designed By <a href="https://github.com/csbalaji1990">Balaji</a>
        </p>
    </div>
  )
}
