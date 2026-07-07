import React, { useEffect } from 'react';
import './CorporateGovernance.css';
import { useNavigate } from 'react-router-dom';

const CorporateGovernance = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="corporate-gov-page">
      <div className="corporate-gov-hero">
        <header className="about-header">
          <div className="about-logo">
            <span className="about-logo-text">
              <span className="logo-icon"></span> Thangam
            </span>
          </div>
          <nav className="about-nav">
            <span className="about-nav-link" onClick={() => navigate('/about-us')} style={{cursor: 'pointer'}}>ABOUT US ˅</span>
            <span className="about-nav-link active">CORPORATE GOVERNANCE ˅</span>
            <span className="about-nav-link">CAREERS</span>
            <span className="about-nav-link">INVESTOR ˅</span>
          </nav>
        </header>
      </div>

      <div className="corporate-gov-content-section">
        <h2 className="corporate-gov-title">Corporate Governance</h2>
        <div className="corporate-gov-text-block">
          <p>
            <span className="drop-cap">T</span>he company has been practicing principles of good, ethical corporate governance over the years and lays strong emphasis on transparency, accountability and integrity. A separate section on corporate governance and a certificate from the statutory auditors of the company regarding compliance of conditions of corporate governance, as stipulated under Clause 49 of the Listing Agreement(s) with Stock Exchange(s), form part of this report.
          </p>
          <p>
            The Chairman-cum-Managing Director and Joint Managing Directors of the company have certified the board on financial statements and other matters in accordance with Clause 49 (V) of the Listing Agreement, pertaining to CEO certification for the financial year ended 31st March 2012.
          </p>
          <p>
            The Board is accountable for the overall stewardship of the conduct of the business of the Company and it may demonstrate its responsibility, in this regard, by both direct management of personnel or process and devolution of certain authority to senior management of the company and leaders of the organization. The Board of Directors along with senior management shall oversee and direct the workflow of the organization enabling it to realize its vision.
          </p>
        </div>

        <h2 className="corporate-gov-subtitle">COMPANY'S PHILOSOPHY ON CORPORATE GOVERNANCE</h2>
        <div className="corporate-gov-text-block">
          <p>
            <span className="drop-cap">T</span>he Company believes in transparency, professionalism and accountability, which are the founding principles of corporate governance. The Company would constantly endeavor to improve on these aspects. The Company's corporate governance philosophy has been further cemented by adopting a Code of Business Conduct and Ethics and the Code of Conduct for Prevention of Insider Trading for board and senior management personnel. The basic philosophy of corporate governance at TMJL is to achieve business excellence by creating and enhancing value for its stakeholders.
          </p>
        </div>
      </div>

      <div className="internal-policy-section">
        <h2 className="internal-policy-title">Internal Policy</h2>
        
        <div className="internal-policy-cards">
          {/* Card 1 */}
          <div className="policy-card">
            <div className="policy-icon">
              <svg viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" strokeWidth="2" fill="none">
                <circle cx="12" cy="7" r="4"></circle>
                <path d="M5 22v-2a7 7 0 0 1 14 0v2"></path>
              </svg>
            </div>
            <h3 className="policy-card-title">Philanthropy</h3>
            <p className="policy-card-text">
              TMJL not only expanded as a Jeweller but also made a substantial contribution on social platforms. It's thrust areas are ensuring environmental sustainability, animal welfare-including contribution towards Goshalas and other animal care, poverty alleviation, rural development projects, etc. As an extended activity, it has conducted blood donation camps in collaboration with Meenakshi Mission Hospital; served food to the devotees.
            </p>
          </div>

          {/* Card 2 */}
          <div className="policy-card">
            <div className="policy-icon">
              <svg viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" strokeWidth="2" fill="none">
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                <line x1="12" y1="19" x2="12" y2="22"></line>
              </svg>
            </div>
            <h3 className="policy-card-title">Whistle Blower & Anti-harassment</h3>
            <p className="policy-card-text">
              The company has adopted a Whistle Blower Policy as a mechanism for employees to report to the management about unethical behaviour, actual or suspected fraud, or violation of the company's code of conduct, and a similar policy with regard to sex discrimination and anti-harassment for both genders. Suitable guidelines have been framed to handle such cases and are periodically reviewed and revised, whenever necessary.
            </p>
          </div>

          {/* Card 3 */}
          <div className="policy-card">
            <div className="policy-icon">
              <svg viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" strokeWidth="2" fill="none">
                <path d="M12 2L2 22h20L12 2z"></path>
              </svg>
            </div>
            <h3 className="policy-card-title">Environment preservation</h3>
            <p className="policy-card-text">
              Environment preservation has always been an integral part of our business philosophy. As a testimony, TMJL staged a human chain in front of its showrooms and corporate office to promote the cause of judicious use of water and river water pathway integration to safeguard and pass on the essential resource for the forthcoming generations, on September 2017, in the wake of acute water scarcity in TamilNadu.
            </p>
          </div>

          {/* Card 4 */}
          <div className="policy-card">
            <div className="policy-icon">
              <svg viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" strokeWidth="2" fill="none">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
                <line x1="2" y1="3" x2="22" y2="17"></line>
              </svg>
            </div>
            <h3 className="policy-card-title">Recycling of e-wastes</h3>
            <p className="policy-card-text">
              Our System Administration team maintains an inventory of worn out hardware and networking items and hands over the same once in every few months to external vendors, accounting the transactions. The Management is particular that no harmful environmental effects arise from the in-house wastes of our trade.
            </p>
          </div>

          {/* Card 5 */}
          <div className="policy-card">
            <div className="policy-icon">
              <svg viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" strokeWidth="2" fill="none">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
            <h3 className="policy-card-title">Corporate Social Responsibility</h3>
            <p className="policy-card-text">
              The company believes strongly in the CSR policy as enunciated under the Companies Act, 2013. Accordingly, the CSR Committee has framed policies to comply with CSR guidelines.
            </p>
          </div>

          {/* Card 6 */}
          <div className="policy-card">
            <div className="policy-icon">
              <svg viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" strokeWidth="2" fill="none">
                <circle cx="12" cy="4" r="2"></circle>
                <path d="M16 12l-4-4-4 4"></path>
                <path d="M12 16v6"></path>
                <path d="M8 22h8"></path>
                <circle cx="8" cy="18" r="3"></circle>
              </svg>
            </div>
            <h3 className="policy-card-title">Social & Humanitarian Policy</h3>
            <p className="policy-card-text">
              The policy proclaims that we operate in a way that pays due reverence to the customs and traditions prevalent in the locality and human rights of the society and employees, as well.
            </p>
          </div>
        </div>
      </div>

      <div className="code-of-conduct-section">
        <div className="code-of-conduct-container">
          <div className="code-of-conduct-left">
            <h2 className="code-of-conduct-title">CORPORATE CODE OF CONDUCT</h2>
            <p className="code-of-conduct-text">
              The activities and conduct of the company and its employees are governed by the code of conduct of the company. The major salutary principles prescribed by the code of conduct are:
            </p>
            <ol className="code-of-conduct-list">
              <li>Conduct of business in consonance with National interest.</li>
              <li>Fair and accurate presentation of Financial Statements.</li>
              <li>Practicing political non-alignment.</li>
              <li>Maintaining quality of products and services.</li>
              <li>Being a good corporate citizen.</li>
              <li>Ethical conduct</li>
              <li>Commitment to enhance shareholder value & statutory compliance.</li>
            </ol>
          </div>
          <div className="code-of-conduct-right">
            <div className="code-of-conduct-image-wrapper">
              <img src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800" alt="Code of Conduct" className="code-of-conduct-image" />
              <div className="code-of-conduct-image-caption">Code of Conduct - Our values</div>
            </div>
          </div>
        </div>
      </div>

      <div className="board-commitments-section">
        <h2 className="board-commitments-title">
          The Board of Directors and the Management of TMJL commit themselves to:
        </h2>
        <div className="board-commitments-content">
          <div className="commitment-block">
            <strong>A. Strive towards enhancement of Shareholder value through;</strong>
            <ul className="commitment-sublist">
              <li>i) Sound business decisions</li>
              <li>ii) Prudent financial management and</li>
              <li>iii) High standards of ethics throughout the organization.</li>
            </ul>
          </div>

          <div className="commitment-block">
            <strong>B. Ensure transparency and professionalism in all decisions and transactions of the company.</strong>
          </div>

          <div className="commitment-block">
            <strong>C. Achieve excellence in Corporate Governance by</strong>
            <ul className="commitment-sublist">
              <li>i) Conforming to and exceeding wherever possible, the prevalent mandatory guidelines on Corporate Governance.</li>
              <li>ii) Regularly reviewing the Board processes and the management systems for further improvement.</li>
            </ul>
          </div>

          <div className="commitment-paragraph">
            <p>
              Thus, in TMJL we are committed to conduct our business in a manner which will ensure long-term growth thereby maximizing value to shareholders, Customers, Employees and Society at large. The company recognizes that good corporate governance is essential to build and retain the confidence of its shareholders. Therefore, the company ensures that various disclosure requirements are complied with for effective corporate governance.
            </p>
            <p>
              To this end, the company's philosophy on corporate governance is to endeavor to ensure:
            </p>
            <ul className="commitment-numbered-list">
              <li>(1) That system procedure which monitors compliance with laws, rules and regulations are in place in each area of its Business.</li>
              <li>(2) That relevant information regarding the company and its operations is disclosed, disseminated and easily available to its shareholders and</li>
              <li>(3) That the Board of Directors is kept fully informed of all material developments in the company, the risks in its business and its operations and the rationale for management's decisions and recommendations, so that the Board of Directors can effectively discharge their responsibilities to our shareholders.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="corporate-gov-final-paragraph">
        <p>
          The Company continues to undertake an Audit of its secretarial records and documents by a Practicing Company Secretary in respect of compliance with the applicable provisions of the Act, Listing Agreement with the Indian Stock Exchanges and the applicable regulations and guidelines issued by Securities and Exchange Board of India. A copy of the Secretarial Audit Report for the period under review is a part of the Annual Report.
        </p>
      </div>

      {/* Custom Corporate Governance Footer */}
      <footer className="about-custom-footer">
        <div className="about-footer-container">
          <div className="about-footer-col">
            <h4 className="about-footer-title">Contact Us</h4>
            <ul className="about-footer-list">
              <li><span className="footer-icon">📍</span> Palami Center (2nd & 3rd Floor), Near Ramakrishna Mutt, 25/6, New Natham Road, Narayanapuram, Madurai, Tamilnadu 625014</li>
              <li><span className="footer-icon">📞</span> 0452 2565553</li>
              <li><span className="footer-icon">✉️</span> care@thangam.com</li>
            </ul>
          </div>
          
          <div className="about-footer-col">
            <h4 className="about-footer-title">Corporate Info</h4>
            <ul className="about-footer-list">
              <li><a href="/about-us">About Thangam</a></li>
              <li><a href="/corporate-governance">Corporate Governance</a></li>
              <li><a href="/">Investor Relationship</a></li>
              <li><a href="/">Management Team</a></li>
              <li><a href="/news-and-media">News and Media</a></li>
              <li><a href="/">careers</a></li>
            </ul>
          </div>

          <div className="about-footer-col">
            <h4 className="about-footer-title">Policies</h4>
            <ul className="about-footer-list">
              <li><a href="/">Annual General Meeting</a></li>
              <li><a href="/">Share</a></li>
              <li><a href="/">Dividend</a></li>
              <li><a href="/">Our History</a></li>
              <li><a href="/faq">FAQ</a></li>
            </ul>
          </div>

          <div className="about-footer-col">
            <h4 className="about-footer-title">Newsletter Sign Up!</h4>
            <div className="about-newsletter">
              <label>Email</label>
              <input type="email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <div className="about-footer-bottom">
          Copyright © 2026
        </div>
      </footer>
    </div>
  );
};

export default CorporateGovernance;
