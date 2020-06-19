import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <div id="header">
        <div style={{ width: "30%" }}>
          <p>Cambridge, MA</p>
          <p>https://github.com/jfrancos</p>
          <p>https://linkedin.com/in/justinfrancos</p>
        </div>
        <div>
          <p>Justin Francos</p>
        </div>
        <div style={{ width: "30%" }}>
          <p className="right">(617) 838-5268</p>
          <p className="right">justinfrancos@gmail.com</p>
        </div>
      </div>
      <div id="content">
        <Section title="Skills">
          <div className='section'>Python, JavaScript, React, TypeScript, Emscripten, Linux, WebAudio/WebMidi, Node.js</div>
        </Section>
        <Section title="Employment">
          <SubSection
            boldHeader
            header={[
              "DITR Field Service Engineer",
              "MIT",
              "Aug 2019 – Present",
            ]}
          >
            <ul>
              <li>
                Provide IT support to astronauts and rocket scientists, their
                students, and staff
              </li>
              <li>
                Wrote Python script to automate reformatting, and consolidating
                nmap scans and ldap info, for CrashPlan reports
              </li>
            </ul>
          </SubSection>
          <SubSection
            boldHeader
            header={[
              "Specialized Field Service Engineer",
              "MIT",
              "May 2018 – Aug 2019",
            ]}
          >
            <ul>
              <li>
                Remediated devices with static 18.x IPs in preparation for MIT’s
                sale of most of their 18.0.0.0/8
              </li>
              <li>
                Wrote Python script to automate nmap scans and MAC/vendor
                translations
              </li>
              <li>
                Wrote Python script to compile a list of conflicting IPs for
                IS&amp;T’s “dueling DHCP servers” issue
              </li>
            </ul>
          </SubSection>
          <SubSection
            header={[
              "Technical Consultant",
              "Calero Software / ComView",
              "Oct 2017 – Jan 2018",
            ]}
          >
            <ul>
              <li>Updated SSRS reports</li>
              <li>
                Wrote Python script, using lxml and xpath2 libraries, to
                automate much of the process.
              </li>
            </ul>
          </SubSection>
          <SubSection
            header={["Software Engineer", "Upwork.com", "May 2017 – July 2017"]}
          >
            <ul>
              <li>
                Created a crude browser-based MIDI sequencer using WebMidi,
                WebAudio, and jQuery
              </li>
              <li>
                Created a Node.js service which rendered MIDI data into an
                audio file the user could download
              </li>
              <li>
                Client review excerpts: “Highly skilled in both MIDI and
                JavaScript. Excellent adherence to deadlines and great to work
                with” “Completed the job on time and with excellent
                communication throughout”
              </li>
            </ul>
          </SubSection>
          <SubSection
            header={["IT Director", "Epiphany School", "Sep 2006 – Jun 2016"]}
          >
            <ul>
              <li>Network, Linux, Windows administrator</li>
              <li>
                Maintained and repaired smartboards, printers, 150 computers
              </li>
              <li>Helpdesk and data recovery</li>
              <li>
                Maintained library circulation software and legacy fundraising
                software
              </li>
            </ul>
          </SubSection>
        </Section>
        <Section title="Projects">
          <SubSection
            header={[
              "search-children",
              "TypeScript, React",
              "Published on npm, 2020",
            ]}
          >
            <ul>
              <li>
                React component that lets you specify text to find and mark
              </li>
              <li>
                Searches elements recursively for children that are strings,
                then searches those strings for the specifed text
              </li>
              <li>
                Companion component Pierce allows non-children text (generated
                by the component) to be searched and marked
              </li>
            </ul>
          </SubSection>
          <SubSection
            header={[
              "OggmentedAudioContext",
              "Emscripten/Wasm, C, JavaScript, karma/chai",
              "Published on npm, 2020",
            ]}
          >
            <ul>
              <li>
                AudioContext subclass / Emscripten transpiling of libvorbis, overrides decodeAudio to  decode ogg in any browser
              </li>
              <li>
                Breaks out of the decode loop periodically, to keep the event loop going without the need for WebWorkers
              </li>
            </ul>
          </SubSection>
          <SubSection header={["Ear Sharpener", "React, iOS", "2009 – present"]}>
            <ul>
              <li></li>
              <li></li>
            </ul>
          </SubSection>
          <SubSection header={["Piano Punisher", "React, RoR, Stripe", "2018"]}>
            <ul>
              <li></li>
              <li></li>
            </ul>
          </SubSection>
        </Section>

        <Section title="Education">
          <SubSection
            header={["State University of New York at Potsdam", "", "2002"]}
          >
            <ul>
              <li>
                Majors Philosophy (GPA 3.55), Computer and Information Sciences
                (GPA 3.44), minor Linguistics (GPA 3.63)
              </li>
              <li>
                Booked bands, sound engineered, started and hosted an open mic
                night, as a chair under the student government
              </li>
            </ul>
          </SubSection>
        </Section>
      </div>
    </div>
  );
}

const SubSection = ({ header, boldHeader = true, children }) => (
  <div className="section">
    <div className={`trio ${boldHeader && "bold"}`}>
      {header.map((text) => (
        <div>{text}</div>
      ))}
    </div>
    {children}
  </div>
);

const Section = ({ title, children }) => (
  <>
    <div className="section-title">{title}</div>
    <hr />
    <div className="section">{children}</div>
  </>
);

export default App;
