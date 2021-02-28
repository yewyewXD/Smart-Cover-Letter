import React, { useState } from "react";
import EligibleText from "../components/EligibleText";

export default function Eligible() {
  const [employer, setEmployer] = useState("");
  const [company, setCompany] = useState("");
  const [mission, setMission] = useState("");
  // const [timezone, setTimezone] = useState("Central European Time");
  const [strength, setStrength] = useState("");
  const [weakness, setWeakness] = useState("");

  function clearFields() {
    setEmployer("");
    setCompany("");
    setMission("");
    // setTimezone("");
    setStrength("");
    setWeakness("");
  }

  return (
    <div className="mx-5 px-5">
      <div className="row">
        <div className="col-md-4 mb-4">
          {/* Variables */}
          <div className="variables">
            <h1 className="mb-4">Eligible Variables</h1>

            <div className="form-group">
              <label htmlFor="employerName" className="d-block">
                Employer Name
              </label>
              <input
                id="employerName"
                type="text"
                className="form-control"
                placeholder="Hi..."
                value={employer}
                onChange={(e) => setEmployer(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="companyName" className="d-block">
                Company Name
              </label>
              <input
                id="companyName"
                type="text"
                className="form-control"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="mission" className="d-block">
                Mission or Sector
              </label>
              <input
                id="mission"
                type="text"
                className="form-control"
                placeholder="about..."
                value={mission}
                onChange={(e) => setMission(e.target.value)}
              />
            </div>

            {/* <div className="form-group">
              <label htmlFor="timezone" className="d-block">
                Timezone
              </label>
              <input
                id="timezone"
                type="text"
                className="form-control"
                placeholder="country time"
                value={timezone}
                onChange={(e) => setTimezone(e.target.value)}
              />
            </div> */}

            <div className="form-group">
              <label htmlFor="strength" className="d-block">
                Tech Strength
              </label>
              <input
                id="strength"
                type="text"
                className="form-control"
                placeholder="I'm familiar with..."
                value={strength}
                onChange={(e) => setStrength(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="weakness" className="d-block">
                Tech Weakness
              </label>
              <input
                id="weakness"
                type="text"
                className="form-control"
                placeholder="I'm not familiar with..."
                value={weakness}
                onChange={(e) => setWeakness(e.target.value)}
              />
            </div>

            <div className="form-group">
              <button
                type="button"
                className="btn btn-secondary btn-md"
                onClick={clearFields}
              >
                Clear
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-8">
          <h1 className="text-center mb-5">Cover Letter</h1>
          {/* Cover Letter */}
          <div className="cover-letter px-5" style={{ fontSize: "1.5rem" }}>
            <EligibleText
              employer={employer}
              company={company}
              mission={mission}
              strength={strength}
              weakness={weakness}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
