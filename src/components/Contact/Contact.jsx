import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";

import "./Contact.scss";
function Contact() {
  return (
    <section className="contact">
      <div className="contact-heading">
        <p>Want to collaborate?</p>
        <h2>Contact me!</h2>
      </div>

      <div className="social">
        <a
          href="https://www.linkedin.com/in/mahmoud-aidia-605298224/"
          className="item"
          target="_blank"
        >
          <span>LinkedIn</span>
          <LinkedInIcon />
        </a>{" "}
        <a
          href="https://x.com/MahmoudAid50353"
          className="item"
          target="_blank"
        >
          <span>Twitter</span>
          <TwitterIcon />
        </a>{" "}
        <a
          href="https://github.com/MahmoudAidia"
          className="item"
          target="_blank"
        >
          <span>GitHub</span>
          <GitHubIcon />
        </a>
      </div>

      <div></div>
    </section>
  );
}

export default Contact;
