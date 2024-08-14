import React, { useState } from "react";
 import img5 from './Ellipse 321.png';
import logo from './Group 39512.png';
import check from './check_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24 2.png';
import data1 from '../assets/data science1.png'
import data2 from '../assets/data science2.png'
import data3 from '../assets/datascience3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto p-5">
      <h2 className="text-2xl font-bold mb-4">FAQ</h2>
      <div className="divide-y divide-gray-200">
        {[
          {
            question: "What are the prerequisites for this workshop?",
            answer:
              "It's recommended to have a basic understanding of programming, especially in Python, and familiarity with statistics and linear algebra. Experience with data manipulation and visualization tools will be helpful. A curious mindset and problem-solving skills are key for tackling data-driven challenges.",
          },
          {
            question: "Is this workshop suitable for beginners?",
            answer:
               "Yes, the workshop is designed to accommodate beginners, providing foundational knowledge in data science concepts and tools. It's structured to progressively build skills, making it suitable for those new to the field and eager to learn.",
          },
          {
            question: "Will I get a certificate after completing the workshop?",
            answer:
              "Yes, you will receive a certification upon successful completion of the workshop. This certificate will recognize your participation and the skills you've gained, which can be valuable for career advancement and showcasing your expertise in the field.",
          },
          {
            question: "Can I cancel my enrollment and get a refund?",
            answer:
              'Yes, you can cancel your enrollment. For checking the refund policy, please  <span className= "underline"> <a href="https://example.com/refund-policy" className="text-blue-500 underline hover:text-blue-700">click here</a>  </span> .',
          },
        ].map((faq, index) => (
          <div key={index} className="py-4">
            <button
              className="w-full flex  justify-between items-center text-lg font-medium text-gray-700 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <svg
                className={`w-6 h-6 transform transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {openIndex === index && (
              <div
                className="mt-2 text-blue-600 font-normal"
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              ></div>
            )}
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto p-5">
      <h2 className="text-2xl font-bold mb-8 mt-8">Upcoming Workshops</h2>
      <div className="flex flex-col md:flex-row md:space-x-4">
        {/* Workshop Card 1 */}
        <div className="flex-1 mb-6 md:mb-0">
          <img src={data1} alt="Employee Relations workshop" className="h-80 w-full object-cover rounded-xl mx-auto" />
          <div className="font-bold text-lg mt-2 text-center">
            Employee Relations workshop <br />

          </div>
        </div>

        {/* Workshop Card 2 */}
        <div className="flex-1 mb-6 md:mb-0">
          <img src={data2} alt="Talent Management workshop" className="h-80 w-full object-cover rounded-xl mx-auto" />
          <div className="font-bold text-lg mt-2 text-center">
            Talent Management workshop <br />

          </div>
        </div>

        {/* Workshop Card 3 */}
        <div className="flex-1 mb-6 md:mb-0">
          <img src= {data3} alt="Diversity and Inclusion workshop" className="h-80 w-full object-cover rounded-xl mx-auto" />
          <div className="font-bold text-lg mt-2 text-center">
            Diversity and Inclusion workshop <br />
           
          </div>
        </div>
      </div>
    </div>
    <footer className="footer bg-black text-white py-5 px-4">
        <div className="newsletter mb-5 text-right">
          <h2 className="flex items-center gap-2 text-left text-2xl font-bold">
            <img src={logo} alt="logo" className="w-16 h-16" />
            Hubnex Educate
          </h2>
          <div className="flex items-center footer-responsive flex-col  justify-end gap-2">
            <p className="md:text-lg  text-md font-normal">Signup for our <span className="font-bold">Newsletter</span></p>
            <input
              className="input1 px-4 py-2 w-68 md:w-72 rounded-lg border-none"
              type="search"
              placeholder="Enter your email"
            />
            <img className="w-6 h-6" src={check} alt="icon" />
          </div>
        </div>
        <hr className="border-t border-white opacity-50" />
        <div className="footer-info flex flex-col md:flex-row gap-8 md:gap-24 mt-4">
          <div className="company-info text-left">
            <h3 className="text-xl font-bold">COMPANY</h3>
            <ul className="list-none mt-4">
              <li className="my-4">
                <a href="#about" className="text-white no-underline">About Us</a>
              </li>
              <li className="my-4">
                <a href="#privacy" className="text-white no-underline">Privacy policy</a>
              </li>
              <li className="my-4">
                <a href="#blog" className="text-white no-underline">Blog</a>
              </li>
              <li className="my-4">
                <a href="#careers" className="text-white no-underline">Careers</a>
              </li>
            </ul>
          </div>
          <div className="support text-left">
            <h3 className="text-xl font-bold">Support</h3>
            <ul className="list-none mt-4">
              <li className="my-4">
                <a href="#contact" className="text-white no-underline">Contact Us</a>
              </li>
              <li className="my-4">
                <a href="#community" className="text-white no-underline">Community</a>
              </li>
            </ul>
          </div>
          <div className="socials text-center">
            <h3 className="text-xl font-bold">Socials</h3>
            <ul className="flex justify-center mt-4 gap-3">
              <li>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebookF} className="w-4 h-4 p-2 bg-white rounded-full text-black hover:scale-110 transition-transform flex items-center justify-center" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedinIn} className="w-4 h-4 p-2 bg-white rounded-full text-black hover:scale-110 transition-transform flex items-center justify-center" />
                </a>
              </li>
              <li>
                <a href="https://x.com/i/flow/login" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} className="w-4 h-4 p-2 bg-white rounded-full text-black hover:scale-110 transition-transform flex items-center justify-center" />
                </a>
              </li>
            </ul>
          </div>
          <div className="fotter-img flex justify-end">
            <img src={img5} alt="footer-img" className="w-52 h-48" />
          </div>
        </div>
        <div>
          <p className="text-sm font-normal text-center mt-4">2024 Hubnex Educate. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default FAQ;
