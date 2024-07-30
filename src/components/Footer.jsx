import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  FaSquareXTwitter,
  FaSquareInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa6";

const Footer = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  return (
    <>
      <footer>
        <div style={{color:'white'}}> 
          <img src="/logo.png" alt="logo" />
        </div>
        <div>
          <h4>Support</h4>
          <ul>
            <li>HQ in New Delhi, India</li>
            <li>ishaanbhugra2@gmail.com</li>
            <li>+91-7011025720</li>
          </ul>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li >
              <Link to={"/"}>Home</Link>
            </li>
            <li >
              <Link to={"/jobs"}>Jobs</Link>
            </li>
            <li >
              <a href="https://github.com/ishaanbhugra">GitHub</a>
            </li>
            {isAuthenticated && (
              <li>
                <Link to={"/dashboard"}>Dashboard</Link>
              </li>
            )}
          </ul>
        </div>
        <div>
          <h4>Follow Us</h4>
          <ul>
            <li>
              <Link to={"/"}>
                <span>
                  <FaSquareXTwitter />
                </span>
                <span>Twitter (X)</span>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <span>
                  <FaSquareInstagram />
                </span>
                <span>Instagram</span>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <span>
                  <FaYoutube />
                </span>
                <span>Youtube</span>
              </Link>
            </li>
            <li>
              {/* <Link to={"/"}> */}
<a href="https://www.linkedin.com/in/ishaan-bhugra-a1b563213/">
                <span>
                  <FaLinkedin />
                </span>
                <span>LinkedIn</span>
              {/* </Link> */}
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <div className="copyright">
        &copy; COPYRIGHT // ISHAAN BHUGRA // 2024
      </div>
    </>
  );
};

export default Footer;
