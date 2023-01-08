import React from "react";

class Footer extends React.Component {
  componentDidMount() {
    (async function () {
      var response = await fetch(
        "https://api.countapi.xyz/hit/vlabs-spit-pageviews/index"
      );
      var data = await response.json();

      document.getElementById("view_count").innerText = data.value;
    })();
  }

  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-auto"
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: 10,
              }}
            >
              <p style={{ margin: 0 }}>
                © Copyright A.I. D.L. Team S.P.I.T 2022
              </p>
              <p style={{ backgroundColor: "gray", padding: 4 }}>
                <span id="view_count">#</span> page views
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
