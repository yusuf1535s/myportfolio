import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.E. Computer Science</h4>
                <h5>VTU, Belagavi</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Current CGPA: 7.8/10 (First Class with Distinction). Learning core computer science principles with a strong focus on Python and analytical problem solving.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Data Analyst</h4>
                <h5>Retail Supermarket</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Designed end-to-end data cleaning pipelines in Python and Excel. Built interactive dashboards to track inventory and sales, directly informing procurement strategy and earning a 4-star rating.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Science Certification</h4>
                <h5>Internshala Online</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Completing a 6-month comprehensive programme in Data Science. Exploring Machine Learning, predictive modelling, and AI automation to solve real-world analytical challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
