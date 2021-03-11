import React from "react";

const EligibleText = ({ employer, company, mission, strength, weakness }) => {
  return (
    <>
      <p>
        Dear {employer ? employer : "EMPLOYER_NAME"}, I'm a very passionate and
        hardworking React frontend developer. People often see me as a friendly,
        motivational, and optimistic person.
      </p>

      <p>
        I love what {company ? company : "COMPANY_NAME"} is doing about{" "}
        {mission ? mission : "COMPANY_MISSION"} and I'm excited to become a part
        of the team.
      </p>

      <p>
        I'm experienced in {strength ? strength : "YOUR_STRENGTHS"}.
        {weakness
          ? ` I'm not familiar with ${weakness} but I'm so willing to learn them.`
          : ""}
      </p>

      <p>
        Please have a look at my portfolio:
        <br />
        https://yewkangwei.com/
      </p>

      <p>
        I'm also a high-energy person, I would work 90 hours per week, and I'm
        ready to bring the development of {company ? company : "COMPANY_NAME"}{" "}
        to the next level!
      </p>

      <p>I look forward to hearing back from you. Thank you in advance.</p>

      <p>
        Best regards,
        <br />
        Yew
      </p>

      <p>
        **If you have decided that I'm not a good fit, please let me know how
        I can improve, thank you!
      </p>
    </>
  );
};

export default EligibleText;
