import React from "react";
import gambardies from "../assets/Dies.png";

export default function ContentDetail() {
  return (
    <div>
      <div className="row">
        <div className="col">
          <img src={gambardies} className="img-fluid" />
        </div>

        <div className="col">
          <div className="card">
            <div className="card-header">DESCRIPTION</div>
            <div className="card-body">
              <h5 className="card-title">Description Of Dies</h5>
              <div className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                animi? Eos provident ad saepe similique nihil placeat quo fugit
                voluptates at commodi? Deleniti facilis et officia dolor, fugiat
                voluptates incidunt!
              </div>
              <br />
              <a href="#" className="btn btn-primary">
                More Information
              </a>
            </div>
          </div>
          <br />
          <div className="card">
            <div className="card-header">QUOTE</div>

            <div className="card-body">
              <br />
              <h5 className="card-title">Quote of The Day </h5>

              <blockquote>
                <p>
                  We looked up to our father. He still is much greater than us.
                </p>
                <footer className="blockquote-footer">
                  Someone Famous in United Kingdom
                </footer>
              </blockquote>

              <a href="#" className="btn btn-primary">
                More Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
