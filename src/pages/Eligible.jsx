import React, { useState } from 'react'
import { Link } from 'react-router'

export default function Eligible() {
  const [employer, setEmployer] = useState('')
  const [company, setCompany] = useState('')
  const [mission, setMission] = useState('')
  const [timezone, setTimezone] = useState('North America')
  const [familiarity, setFamiliarity] = useState('')
  const [needW8Form, setNeedW8Form] = useState('Yes')

  function clearFields() {
    setEmployer('')
    setCompany('')
    setMission('')
    setTimezone('')
    setFamiliarity('')
    setNeedW8Form('')
  }
  return (
    <div className="mx-5 px-5">
      <div className="row">
        <div className="col-4">
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
                placeholder="in... / of..."
                value={mission}
                onChange={(e) => setMission(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="timezone" className="d-block">
                Timezone
              </label>
              <input
                id="timezone"
                type="text"
                className="form-control"
                placeholder="country"
                value={timezone}
                onChange={(e) => setTimezone(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="familiarity" className="d-block">
                Tech Stack Familiarity
              </label>
              <input
                id="familiarity"
                type="text"
                className="form-control"
                placeholder="I'm not familiar with..."
                value={familiarity}
                onChange={(e) => setFamiliarity(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="needW8Form" className="d-block">
                Need a W-8 form to work (Default: Yes)
              </label>
              <div className="radio-box">
                <input
                  type="radio"
                  value="Yes"
                  name="needW8Form"
                  className="mr-2"
                  onChange={(e) => setNeedW8Form(e.target.value)}
                />
                <span>Yes</span>
              </div>

              <div className="radio-box">
                <input
                  type="radio"
                  value="No"
                  name="needW8Form"
                  className="mr-2"
                  onChange={(e) => setNeedW8Form(e.target.value)}
                />
                <span>No</span>
              </div>
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

        <div className="col-8">
          <h1 className="text-center mb-5">Cover Letter</h1>
          {/* Cover Letter */}
          <div className="cover-letter px-5" style={{ fontSize: '1.5rem' }}>
            <p>
              Hi {employer}, I’m a very hardworking developer and I’m so excited
              about {company}’s mission {mission}!
            </p>
            <p>
              Please take a look at my portfolio:{' '}
              <Link className="text-danger">kangwei.dev</Link> (I’m willing to
              take other position that benefits my skillset)
            </p>
            <p>
              I love everything related to ReactJS, from static to server-side.
              I can code up to 11 hours every day just because I love it.
              {familiarity
                ? ` I'm not familiar with ${familiarity}, but `
                : ' '}
              I would be happy to learn anything if I could get a chance to be a
              part of {company}.
            </p>
            <p>
              I’m willing to take $15k per year of salary and work fully in the
              {` ${timezone}`} time zones. Besides that, I will also
              {needW8Form === 'Yes' ? ' fill up the W-8 form and ' : ' '} manage
              all the taxes myself.
            </p>

            <p>
              I really love what {company} is doing and I look forward to being
              interviewed.
            </p>
            <p>
              Best regards, <br />
              Yew
            </p>

            <p>
              **If you decided not to move forward with me, please provide me a
              reason or tell me how can I improve, thank you!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
