import { useEffect, useState } from "react";
import "../App.css";

export default function FetchData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(json => setData(json));
  }, []);

  return (
    <div className="card">
      <h2>Daftar User</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}>
        <thead>
          <tr style={{ background: "#f4f4f4" }}>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>ID</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Nama</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map(user => (
            <tr key={user.id}>
              <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>{user.id}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{user.name}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
