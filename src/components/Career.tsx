import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My education <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Matriculation (CBSE)</h4>
                <h5>Amenity Public School, Rudrapur</h5>
              </div>
              <h3>2022–2023</h3>
            </div>
            <p>
              Scored 93.5% in CBSE Board Examinations. Built a strong academic
              foundation with excellence in science and mathematics.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intermediate (CBSE)</h4>
                <h5>Amenity Public School, Rudrapur</h5>
              </div>
              <h3>2024–2025</h3>
            </div>
            <p>
              Completed Intermediate with 79.8% in CBSE. Developed interest in
              computer science and programming fundamentals.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech — Computer Science & Engineering</h4>
                <h5>University of Petroleum and Energy Studies, Dehradun</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently pursuing B.Tech CSE with SGPA 7.86. Leading research on
              vehicle surveillance systems, building data-driven projects, and
              actively participating in hackathons and developer communities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
