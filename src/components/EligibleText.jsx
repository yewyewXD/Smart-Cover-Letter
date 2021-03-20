import React from "react";

const EligibleText = ({ employer, company, mission, strength, weakness }) => {
  return (
    <>
      <p>Dear {employer ? employer : "EMPLOYER_NAME"},</p>

      <p>
        I love what {company ? company : "COMPANY_NAME"} is doing about{" "}
        {mission ? mission : "COMPANY_MISSION"}. I really want to work for{" "}
        {company ? company : "COMPANY_NAME"} in France for free for 1 year, and
        I'm excited to become a part of the team!
      </p>

      <p>
        I'm a very passionate and hardworking React frontend developer. People
        often see me as a friendly, motivational, and optimistic person.
      </p>

      <p>
        I'm also a high-energy person, I would work at least 90 hours a week,
        and I'm willing to learn anything!
      </p>

      <p>
        Please have a look at my portfolio:
        <br />
        https://yewkangwei.com/
      </p>

      <p>I look forward to hearing back from you. Thank you in advance.</p>

      <p>
        Best regards,
        <br />
        Yew
      </p>

      <br />
    </>
  );
};

export default EligibleText;
