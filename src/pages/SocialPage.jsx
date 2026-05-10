import React from "react";
import "../styles/SocialMedian.css";

const SocialMedian = () => {
  const socialLinks = [
    {
      name: "Facebook",
      icon: `ri-facebook-circle-fill`,
      url: "https://facebook.com/sadmanmahmudtaofiq",
      color: "#1877f2",
    },
    {
      name: "Instagram",
      icon: "ri-instagram-line",
      url: "https://instagram.com/sadmanmahmudtaofik",
      color: "#e1306c",
    },
    {
      name: "X (Twitter)",
      icon: "ri-twitter-x-line",
      url: "https://x.com/taofiqqq",
      color: "#000000",
    },
    {
      name: "YouTube",
      icon: "ri-youtube-fill",
      url: "https://youtube.com/@TAOFIQQ",
      color: "#ff0000",
    },
    {
      name: "Threads",
      icon: "ri-threads-line",
      url: "https://threads.net/@sadmanmahmudtaofik",
      color: "#000000",
    },
    {
      name: "Pinterest",
      icon: "ri-pinterest-fill",
      url: "https://www.pinterest.com/sadmanmahmudtaofiq/",
      color: "#E60023",
    },
    {
      name: "Twitch",
      icon: "ri-twitch-fill",
      url: "https://www.twitch.tv/sadmanmahmudtaofiq",
      color: "#9147FF",
    },
    {
      name: "Reddit",
      icon: "ri-reddit-fill",
      url: "https://www.reddit.com/user/sadmanmahmudtaofiq/",
      color: "#FF4500",
    },
    {
      name: "GitHub",
      icon: "ri-github-fill",
      url: "https://github.com/sadmanmahmudtaofiq",
      color: "#25292E",
    },
    {
      name: "Website",
      icon: "ri-global-line",
      url: "https://taofiq.vercel.app/",
      color: "#6F34FE",
    },
  ];

  return (
    <div className="social-page">
      <div className="container-social">
        {/* Profile Picture & Info */}
        <div className="profile">
          <img
            src="https://avatars.githubusercontent.com/u/167799350?v=4"
            alt="Profile Picture"
            className="profile-pic"
          />

          <h1 className="name">Sadman Mahmud</h1>
          <p className="username">
            <a target="_blank" href="https://taofiq.vercel.app/">
              @taofiq
            </a>
          </p>

          <p className="description">
            Welcome
            <br />
            I'm a content creator passionate about technology, design, and
            digital culture. Follow me on all platforms to stay updated with my
            latest posts, projects, and behind-the-scenes content.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="links-container">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              style={{ borderLeftColor: link.color }}
            >
              <span className="icon">
                <i className={link.icon} style={{ color: link.color }}></i>
              </span>
              <span className="platform-name">{link.name}</span>
              <span className="arrow">→</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialMedian;
