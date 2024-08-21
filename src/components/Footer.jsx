import React from "react";
import {
  FaDribbble,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const styles = {
  icon: "cursor-pointer hover:text-[#a6a4f8]",
  footerItem: "py-2 text-sm cursor-pointer hover:text-[#a6a4f8]",
};

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-2 gap-8 md:grid-cols-1 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#a6a4f8]">Clustrix</h1>
        <p className="py-4">
          We can provide a range of database services to help businesses and
          organizations manage their data effectively, protect their data from
          loss or damage, and ensure that their data is secure and protected
          from unauthorized access or cyber-attacks. These services are
          essential for businesses and organizations that rely on data to
          operate and make informed decisions.
        </p>
        <div className="flex justify-between md:w-[45%] my-6 mx-2">
          <FaDribbble size={30} className={styles.icon} />
          <FaFacebookSquare size={30} className={styles.icon} />
          <FaGithubSquare size={30} className={styles.icon} />
          <FaInstagram size={30} className={styles.icon} />
          <FaTwitterSquare size={30} className={styles.icon} />
        </div>
      </div>
      <div className="flex justify-between mx-2 py-2">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className={styles.footerItem}>Analytics</li>
            <li className={styles.footerItem}>Marketing</li>
            <li className={styles.footerItem}>Commerce</li>
            <li className={styles.footerItem}>Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Contact</h6>
          <ul>
            <li className={styles.footerItem}>Customer Service</li>
            <li className={styles.footerItem}>Advertise</li>
            <li className={styles.footerItem}>Blog</li>
            <li className={styles.footerItem}>Need Help?</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">About</h6>
          <ul>
            <li className={styles.footerItem}>Privacy Notice</li>
            <li className={styles.footerItem}>Terms of Use</li>
            <li className={styles.footerItem}>Our Company</li>
            <li className={styles.footerItem}>Careers</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
