import React from 'react';
import './About.css'; // Import your CSS file for styling

export const About = () => {
  return (
    <>
    <h1>About us</h1>
    <div>
    <section className="about-description">
        <p>Welcome to our tourism website! We are dedicated to providing memorable travel experiences to our customers.</p>
        <p>At <b>TRAVEL</b>, we believe that travel has the power to transform lives, broaden horizons, and foster connections between people and cultures.</p>
        <p>Our mission is to promote responsible tourism practices while offering a diverse range of packages that cater to the unique interests and preferences of our travelers.</p>
      </section>
      <section className="our-approach">
        <h2>Our Approach</h2>
        <p>At the heart of our approach is a commitment to sustainability, authenticity, and community engagement.</p>
        <ul>
          <li><strong>Sustainability:</strong> We strive to minimize our environmental impact by partnering with eco-conscious accommodations, promoting responsible wildlife viewing, and supporting local conservation efforts.</li>
          <li><strong>Authenticity:</strong> We believe in providing authentic experiences that allow travelers to immerse themselves in the culture, history, and traditions of the destinations they visit. Whether it's staying in a family-owned guesthouse, dining at a local eatery, or participating in cultural activities, we prioritize authenticity in every aspect of our tours.</li>
          <li><strong>Community Engagement:</strong> We are committed to supporting local communities and economies by working with local guides, artisans, and businesses. Through community-based tourism initiatives, we aim to empower local residents and foster meaningful connections between travelers and hosts.</li>
        </ul>
      </section>
      <section className="meet-the-team">
        <h2>Meet the Team</h2>
        <div className="team-member">
          <img src="team-member1.jpg" alt="Team Member 1" />
          <div>
            <p>John Doe</p>
            <p>Founder & CEO</p>
          </div>
        </div>
        <div className="team-member">
          <img src="team-member2.jpg" alt="Team Member 2" />
          <div>
            <p>Jane Smith</p>
            <p>Marketing Manager</p>
          </div>
        </div>
        {/* Add more team members as needed */}
      </section>
    </div>
    </>
  )
}
