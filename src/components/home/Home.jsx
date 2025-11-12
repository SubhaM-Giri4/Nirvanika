import React from "react";
import image1 from "../../assets/mind-plan.png";
import "../../styles/home.css";
import { styled, Box } from "@mui/material";
import background from "../../assets/home-mental.jpg";
import { Link } from "react-router-dom";

const Image = styled(Box)`
  width: 100%;
  background: url(${background}) center/82%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Home = () => {
  return (
    <div style={{ marginTop: "15vh" }} className="home">
      <main>
        <Image>
          <section className="mental-health-intro">
            <h1 className="mental-health-intro-title">It's Okay Not to  Be Okay</h1>
            <article>
              <h2>What is mental health?</h2>
              <p >
                Good mental health allows us to live life to the fullest—unwinding with ease, accomplishing our goals, and finding joy in everyday moments. Small, consistent steps can make a big difference in how you feel. Start your journey today by taking our quick test. Get a personalized plan, expert-backed strategies, and simple tips to boost your wellbeing.
              </p>
            </article>
          </section>
        </Image>
        <section className="mind-plan">
          <div className="mind-plan-content">
            <div className="mind-plan-info">
              <h3>Get Your Mind Plan</h3>
              <p>
                Discover your mental health strengths and areas for growth with our specialized assessments. Get personalized insights on depression, happiness, workplace stress, and more – plus actionable strategies tailored just for you
              </p>
              <Link to="/test">
                <button>Take the Test</button>
              </Link>
            </div>
            <div className="mind-plan-image">
              <img src={image1} alt="Mind Plan" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
