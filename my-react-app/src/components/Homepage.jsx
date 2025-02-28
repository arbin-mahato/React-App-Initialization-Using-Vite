import React from "react";

function Homepage() {
  return (
    <div className="container">
      <h1 className="title">Arbin Mahato</h1>
      <p className="contact">📧 Email: helloarbin@gmail.com</p>
      <p className="contact">📞 Phone: +91 2546720324</p>
      <p className="contact">🩸 Location: India</p>
      <p className="contact">
        🔗 LinkedIn:{" "}
        <a href="https://linkedin.com/in/yourprofile" target="_blank">
          My LinkedIn
        </a>
      </p>
      <p className="contact">
        🔗 GitHub:{" "}
        <a href="https://github.com/yourusername" target="_blank">
          My GitHub
        </a>
      </p>
    </div>
  );
}

export default Homepage;
