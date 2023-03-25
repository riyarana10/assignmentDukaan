import React, { useState } from "react";
import "./sloganMaker.css";
import cross from "../../assets/icons/Union.png";
import next from "../../assets/icons/next.png";
import * as data from "../../slogans";
import { Singleslogan } from "../SingleSlogan/singleSlogan";
function Sloganmaker() {
  const [Input, setInput] = useState("cozy");
  return (
    <div className="main-container">
      <div className="slogan-white-box">
        <h1>Free slogan maker</h1>
        <p>
          Simply enter a term that describes your business, and get up to1,000
          relevant slogans for free.
        </p>
        <div className="sloganbox">
          <div className="sloganmaker">
            <label>Word for your slogan</label>
            <div className="inputbox">
              <input
                type="search"
                onChange={(e) => setInput(e.target.value)}
                value={Input}
                placeholder="enter word for your slogan"
                className="input"
              />
              {/* <img src={cross} className="cross" onClick={() => setInput("")} /> */}
            </div>

            <div className="generate-btn">
              <button className="generate">Generate Slogans</button>
            </div>
          </div>
          <hr className="line" />
          <div className="slogans-heading">
            <div className="heading">
              We have generated 1,023 slogans for “cozy”
            </div>
            <button className="download-btn">Download all</button>
          </div>
          <div className="all-slogans" >
            {data.slogans.map(({ id, slogan }) => {
              return (
                  <Singleslogan key={id} slogan={slogan} />
              );
            })}
          </div>
          <hr className="line"/>
      <div className="page">
        <div className="page-div">
        <ul className="page-list">
          <li>
            <button className="page-btn page1">1</button>
          </li>
          <li>
            <button className="page-btn">2</button>
          </li>
          <li>
            <button className="page-btn">3</button>
          </li>
          <li>
            <button className="page-btn">...</button>
          </li>
          <li>
            <button className="page-btn">21</button>
          </li>
        </ul>
        </div>
        <div className="next-btn">
              Next <img src={next} className="next-icon"/>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
}

export default Sloganmaker;
