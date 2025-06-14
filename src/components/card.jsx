import React from 'react'
import '../assets/css/componentsCss/card.css';

const card = () => {
  return (
    <div>
        <main className="card-row">
        {/* Card 1 */}
        <div className="card">
          <div className="card-header">Trainee Network Engineers</div>
          <div className="card-body">
            <p>
              We are hiring new training network engineers for SLTMobitel. Only
              an associate degree, a bachelor’s degree in computer science,
              information technology, computer engineering, or a related field
              undergraduates (3rd year, 4th year), and fresh graduates are
              preferred.
            </p>
            <ul>
              <li>No job experiences are needed.</li>
              <li>Networking knowledge.</li>
              <li>Operating systems knowledge.</li>
              <li>Network devices and security knowledge.</li>
              <li>Networking device configuration knowledge.</li>
            </ul>
          </div>
          <div className="card-footer">
            <a href="/apply">
              <button className="apply-btn">Apply Now</button>
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card">
          <div className="card-header">Accountant - Financial Accounting</div>
          <div className="card-body">
            <p>
              Sri Lanka Telecom is in search of high caliber, result-oriented
              and qualified individuals capable of playing a key role in the
              finance team. You will be engaged in a range of tasks in financial
              accounting in a highly IT-backed work environment and expected to
              collaborate with subsidiary companies and cross-functional
              departments.
            </p>
            <ul>
              <li>Associate Membership of ICA/CIMA/ACCA</li>
              <li>Preference to prize winners.</li>
              <li>Excellent communication and leadership skills.</li>
            </ul>
          </div>
          <div className="card-footer">
            <a href="/apply">
              <button className="apply-btn">Apply Now</button>
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card">
          <div className="card-header">Engineers</div>
          <div className="card-body">
            <p>
              As an Engineer of the pioneering ICT solutions provider, you will
              be a distinguished member of our team, responsible for planning,
              designing, operating and maintaining our state-of-the-art ICT
              infrastructure.
            </p>
            <ul>
              <li>Four-year Degree in BSc Engineering/ Bachelor of Technology from a University/Institute recognized by UGC - Sri Lanka and Institute of Engineers -Sri Lanka, equivalent to SLQF 6. OR.</li>
              <li>Associate Member of the Institute of Engineers, Sri Lanka. 
AND</li>
              <li>
                Thorough knowledge and experience in the field of Data Centre Network Security/IDC Storage Systems/ Hybrid Cloud Deployment & Management and the area of IT & Digital Platforms would be a definite advantage.
              </li>
            </ul>
          </div>
          <div className="card-footer">
            <a href="/apply">
              <button className="apply-btn">Apply Now</button>
            </a>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card">
          <div className="card-header">Technicians</div>
          <div className="card-body">
            <p>
              Technicians  are  mainly  responsible  in  install, maintain and   repair   electronic  communications  equipment   in telecommunication    networks    and    internet    supply systems.  Examine  telecommunications  equipment and systems to find and repair faults.

            </p>
            <ul>
              <li>06 passes at the G.C.E. (O/L) exam including Sinhala Tamil and English Language and Mathematics and 03 credit passes in one sitting AND
</li>
              <li>Should have obtained Skilled Competence Certificate -NAITA in the relevant field equivalent to NVQ Level 4 (Telecommunication / Electrical/Electronic/ ICT/Power / Air Conditioning etc). </li>
              
            </ul>
          </div>
          <div className="card-footer">
            <a href="/apply">
              <button className="apply-btn">Apply Now</button>
            </a>
          </div>
        </div>
      </main>
      
    </div>
  )
}

export default card;
