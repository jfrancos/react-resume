import "./App.css";
import React, { Suspense, lazy } from "react";
import { isMobile } from "react-device-detect";
import { Link, Route } from "react-router-dom";

const oggmentedContent = () => import("./OggmentedContent");
const OggmentedContent = lazy(oggmentedContent);
// delay needed for preload for react-snap + lazy + preload:
setTimeout(oggmentedContent, 2000);

// seems to work in dev mode but doesn't do the right thing when published?
// oggmentedContent()

//  const section1 =  {
//     trio: [
//       "DITR Field Service Engineer",
//       "MIT",
//       "Aug 2019 – Present",
//     ],
//     points: [
//       'Provide IT support to astronauts and rocket scientists, their students, and staff',
//       'Wrote Python script to automate reformatting, and consolidating nmap scans and ldap info, for CrashPlan reports'
//     ]
//   }

function App() {
  return (
    <div className="content">
      <div id="header">
        <div className="header0">
          <div className="print">
            <Clickable>https://linkedin.com/in/justinfrancos</Clickable>
            <br />
            <Clickable>https://github.com/jfrancos</Clickable>
            <br />
            <Clickable>https://francosjust.in</Clickable>
          </div>
          <div className="screen">
            <Clickable>https://github.com/jfrancos/react-resume</Clickable>
            <br />
            <Clickable>https://linkedin.com/in/justinfrancos</Clickable>
            <br />
            <Clickable>https://github.com/jfrancos</Clickable>
          </div>
        </div>
        <div className="header1">
          <h1>Justin Francos</h1>
        </div>
        <div className="header2">
          <a href="mailto:justinfrancos@gmail.com">justinfrancos@gmail.com</a>
          <br />
          Cambridge, MA
          <br />
          {isMobile ? (
            <a href="tel:6178385268">(617) 838-5268</a>
          ) : (
            "(617) 838-5268"
          )}
        </div>
      </div>
      <div id="content">
        <Route path="/oggmented">
          <Suspense fallback={null}>
            <OggmentedContent />
          </Suspense>
        </Route>
        <Route exact path="/">
          <Section title="Skills">
            <div className="subsection">
              <div style={{ marginRight: "-1.75rem", marginLeft: "-1.75rem" }}>
                React, Javascript, Tailwind, Stripe, Snowpack, Fauna, GraphQL,
                Magic, RxDB, Offline-first, WebAudio/WebMidi, Python, Linux
              </div>
              <div></div>
              <div></div>
            </div>
          </Section>
          <Section title="Employment">
            <SubSection
              boldHeader
              header={[
                "DITR Field Service Engineer @ AeroAstro",
                "MIT",
                "Aug 2019 – Dec 2020",
              ]}
            >
              <ul>
                <li>
                  Provide IT support to astronauts and rocket scientists, their
                  students, and staff
                </li>
                <li>
                  <a href="https://github.com/jfrancos/fix_cp/blob/master/fix_report.py3">
                    Wrote Python script
                  </a>{" "}
                  to automate: reformatting, and consolidating nmap scans and
                  ldap info, for CrashPlan reports
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
                  Remediated devices with static 18.x IPs in preparation for
                  MIT’s sale of most of their 18.0.0.0/8
                </li>
                <li>
                  Helped faculty/staff/students decide on dynamic vs persistent
                  IPs, private vs public IPs
                </li>
                <li>
                  Wrote Python script to automate nmap scans and MAC/vendor
                  translations
                </li>
                <li>
                  <a href="https://github.com/jfrancos/DuelingDHCP/blob/master/compare.py">
                    Wrote Python script
                  </a>{" "}
                  to compile a list of conflicting IPs for IS&amp;T’s “dueling
                  DHCP servers” issue
                </li>
              </ul>
            </SubSection>
            <SubSection
              header={[
                "Freelance Software Engineer",
                "Calero Software / ComView",
                "Oct 2017 – Jan 2018",
              ]}
            >
              <ul>
                <li>Updated SSRS reports: fonts, colors, formatting, etc.</li>
                <li>
                  Wrote Python script, using lxml and xpath2 libraries to
                  automate most of the updates
                </li>
              </ul>
            </SubSection>
            <SubSection
              header={[
                "Freelance Software Engineer",
                "Upwork.com",
                "May 2017 – July 2017",
              ]}
            >
              <ul>
                <li>
                  Created a browser-based MIDI recorder/player using WebMidi,
                  WebAudio, and jQuery
                </li>
                <li>
                  Created a Node.js service which rendered MIDI data into an
                  audio file the user could download
                </li>
                <li>
                  <a href="https://www.upwork.com/o/profiles/users/~0178bd0f2e45bd432f/">
                    Client review excerpts:
                  </a>{" "}
                  “Highly skilled in both MIDI and JavaScript. Excellent
                  adherence to deadlines and great to work with” “Completed the
                  job on time and with excellent communication throughout”
                </li>
              </ul>
            </SubSection>
            <SubSection
              header={[
                "Freelance Software Engineer",
                "The Globe Institute",
                "Oct 2016 – Jan 2017",
              ]}
            >
              <ul>
                <li>
                  For each class, instructor Ryan Moore drew diagrams consisting
                  of equilateral polygons inscribed in a circle
                </li>
                <li>
                  These diagrams varied but always conformed to a set of
                  constraints, and took multiple hours to create by hand
                </li>
                <li>
                  Automated the creation of these with a simple SPA, rendering
                  to SVG/PDF and reducing his prep work to minutes
                </li>
              </ul>
            </SubSection>
            <SubSection
              header={["IT Director", "Epiphany School", "Sep 2006 – Jun 2016"]}
            >
              <ul>
                <li>Network, Linux, Windows administrator</li>
                <li>
                  Maintained and repaired SMART Boards, printers, 150 computers
                </li>
                <li>
                  Provided emotionally sensitive help desk support to overworked
                  teachers
                </li>
                <li>Maintained website, performed data recovery</li>
              </ul>
            </SubSection>
          </Section>
          <Section
            title="
        Solo/independent side projects"
          >
            <SubSection
              header={[
                <a href="https://github.com/jfrancos/crancos">crancos</a>,
                "Javascript, React, Stripe, RxDB, Tailwind, Fauna, Magic",
                "Published on npm, 2021",
              ]}
            >
              <ul>
                <li>
                  CRA style template creates reactive, offline-first user-document React apps with Fauna, RxDB, and Magic
                </li>
                <li>
                  Scripts provision Fauna to work with RxDB, and setup Stripe
                  with customer-portal-managed subscriptions
                </li>
                <li>
                  Put Fauna, Magic, and Stripe keys in a dotenv file and have a
                  working demo running in under five minutes
                </li>
              </ul>
            </SubSection>
            <SubSection
              header={[
                <a href="https://github.com/jfrancos/oggmented/blob/master/src/em/pre.js">
                  oggmented-audio-context
                </a>,
                "Emscripten/Wasm, C, JavaScript, karma/chai",
                "Published on npm, 2020",
              ]}
            >
              <ul>
                <li>
                  Augments AudioContext: WebKit’s decodeAudioData doesn’t work
                  with ogg vorbis, Blink’s ogg decoding is buggy
                </li>
                <li>
                  AudioContext subclass / Emscripten transpiling of libvorbis,
                  overrides decodeAudio to decode ogg in any browser
                </li>
                <li>
                  <a href="https://github.com/jfrancos/oggmented/blob/d2bfabcaae75668a15374f47e4dc3d88684cc021/src/em/pre.js#L38">
                    Breaks out of the decode loop periodically
                  </a>{" "}
                  to keep the event loop going without needing WebWorkers
                </li>
              </ul>
              <div className="screen">
                <div style={{ display: "flex" }}>
                  <Link
                    className="button"
                    style={{ textDecoration: "none" }}
                    to="oggmented"
                  >
                    Tell me more about oggmented
                  </Link>
                </div>
              </div>
            </SubSection>
            <SubSection
              header={[
                "Ear Sharpener",
                "SPA (2019 – present), iOS (2009 – 2018)",
                "2009 – present",
              ]}
            >
              <ul>
                <li>
                  Automates and gamifies a musical ear-training technique that
                  would otherwise require hours of preparation
                </li>
                <li>
                  SPA: React, WebAudio
                  <ul>
                    <li>
                      Designed an SVG component that combines and symbolically
                      describes the four main configuration settings
                    </li>
                    <li>
                      Built audio engine to get higher quality sounds from fewer
                      piano samples using transposition
                    </li>
                    <li>
                      In-progress at:{" "}
                      <Clickable>https://earsnacks.app</Clickable>
                    </li>
                  </ul>
                </li>
                <li>
                  iOS
                  <ul>
                    <li>
                      Written in Objective-C, later rewritten in Swift, used
                      low-level audio API
                    </li>
                    <li>
                      Removed from store in 2018, had 4.6 stars / 1.72K units
                      sold / $5.31K in sales
                    </li>
                  </ul>
                </li>
              </ul>
            </SubSection>
            <SubSection
              header={[
                "Piano Punisher",
                "React, TypeScript, Ruby on Rails, Stripe, PostgreSQL",
                "Feb 2018 – Apr 2018",
              ]}
            >
              <ul>
                <li>
                  Browser based MIDI filter helps improve musicians’ technical
                  skills
                </li>
                <li>
                  Notes played outside the given velocity and timing parameters
                  are filtered out, and the silence that occurs when one presses
                  a note and it doesn’t sound, feels uncomfortable (is a
                  punishment)
                </li>
                <li>
                  Try it out at:{" "}
                  <Clickable>https://pianocandy.com/punisher</Clickable>
                </li>
              </ul>
            </SubSection>
          </Section>

          <Section title="Education">
            <SubSection
              header={[
                "Bachelor of Arts",
                "State University of New York at Potsdam",
                "2002",
              ]}
            >
              <ul>
                <li>
                  Majors Philosophy (GPA 3.55), Computer and Information
                  Sciences (GPA 3.44), minor Linguistics (GPA 3.63)
                </li>
                <li>
                  Created/hosted an open mic night, booked bands, sound
                  engineered, as a student government committee chair
                </li>
              </ul>
            </SubSection>
          </Section>
        </Route>
      </div>
    </div>
  );
}

const SubSection = ({ header, children }) => (
  <div className="subsection">
    <div className="trio">
      {header.map((text, i) => (
        <div key={text} className={`column${i}`}>
          {text}
        </div>
      ))}
    </div>
    {children}
  </div>
);

const Section = ({ title, children }) => (
  <>
    {/* <div className="section"> */}
    <div className="section-title">{title}</div>
    <hr />
    {/* {children[0]} */}
    {/* </div> */}
    <div className="section">{children}</div>
  </>
);

const Clickable = ({ children }) => <a href={children}>{children}</a>;

export default App;
