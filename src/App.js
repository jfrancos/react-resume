import React from "react";
import "./App.css";
import { isMobile } from "react-device-detect";

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
    <div>
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
        <Section title="Skills">
          <div className="subsection">
            <div>
              React +hooks, JavaScript, TypeScript, Emscripten,
              WebAudio/WebMidi, Python, Linux, Web Scraping
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
              "Aug 2019 – Present",
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
                to automate: reformatting, and consolidating nmap scans and ldap
                info, for CrashPlan reports
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
                Helped users decide on dynamic vs persistent IPs, public vs
                private IPs
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
              "Technical Consultant",
              "Calero Software / ComView",
              "Oct 2017 – Jan 2018",
            ]}
          >
            <ul>
              <li>Updated SSRS reports: fonts, colors, formatting, etc.</li>
              <li>
                Wrote Python script, using lxml and xpath2 libraries, to
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
                Created a Node.js service which rendered MIDI data into an audio
                file the user could download
              </li>
              <li>
                <a href="https://www.upwork.com/o/profiles/users/~0178bd0f2e45bd432f/">
                  Client review excerpts:
                </a>{" "}
                “Highly skilled in both MIDI and JavaScript. Excellent adherence
                to deadlines and great to work with” “Completed the job on time
                and with excellent communication throughout”
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
              <a href="https://github.com/jfrancos/search-children/blob/master/src/index.tsx">
                search-children
              </a>,
              "TypeScript, React",
              "Published on npm, 2020",
            ]}
          >
            <ul>
              <li>
                React component allows SPA-wide text search and highlight,
                callback indicates number of results
              </li>
              <li>
                Searches elements recursively for children that are strings,
                then searches those strings for the specified text
              </li>
              <li>
                Companion component Pierce allows non-children text (generated
                by the component) to be searched and marked
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
                Augments AudioContext: WebKit's decodeAudioData doesn't work
                with ogg vorbis, Blink's ogg decoding is buggy
              </li>
              <li>
                AudioContext subclass / Emscripten transpiling of libvorbis,
                overrides decodeAudio to decode ogg in any browser
              </li>
              <li>
                <a href="https://github.com/jfrancos/oggmented/blob/d2bfabcaae75668a15374f47e4dc3d88684cc021/src/em/pre.js#L38">
                  Breaks out of the decode loop periodically
                </a>
                , to keep the event loop going without the need for WebWorkers
              </li>
            </ul>
          </SubSection>
          <SubSection
            header={[
              "Ear Sharpener",
              "SPA (2019-present), iOS (2009-2018)",
              "2009 – present",
            ]}
          >
            <ul>
              <li>
                Automates and gamifies an ear-training technique that would
                otherwise require hours of preparation
              </li>
              <li>
                SPA: React, WebAudio
                <ul>
                  <li>
                    Musical ear-training app, in-progress at:{" "}
                    <Clickable>https://earsnacks.app</Clickable>
                  </li>
                  <li>
                    Designed an SVG component that combines and symbolically
                    describes the four main configuration settings
                  </li>
                  <li>
                    Built audio engine to get higher quality sounds from fewer
                    piano samples using transposition
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
                    Removed from store in 2018, had 4.6 stars / 1.72K units sold
                    / $5.31K in sales
                  </li>
                </ul>
              </li>
            </ul>
          </SubSection>
          <SubSection
            header={[
              "Piano Punisher",
              "React, TypeScript, Ruby on Rails, Stripe",
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
                are filtered out, and the silence that occurs when one presses a
                note and it doesn’t sound, feels uncomfortable (is a punishment)
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
            header={["State University of New York at Potsdam", "", "2002"]}
          >
            <ul>
              <li>
                Majors Philosophy (GPA 3.55), Computer and Information Sciences
                (GPA 3.44), minor Linguistics (GPA 3.63)
              </li>
              <li>
                Created/hosted an open mic night, booked bands, sound
                engineered, as a student government committee chair
              </li>
            </ul>
          </SubSection>
        </Section>
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
    <div className="section-title">{title}</div>
    <hr />
    <div className="section">{children}</div>
  </>
);

const Clickable = ({ children }) => <a href={children}>{children}</a>;

export default App;
