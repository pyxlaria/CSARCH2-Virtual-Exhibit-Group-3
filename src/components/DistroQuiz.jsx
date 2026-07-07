/**
 * DistroQuiz.jsx
 *
 * An interactive, modern "Which Windows version fits you?" quiz. 
 * Optimized with performance animations and separate CSS configuration hooks.
 */

import { useState } from "react";
import "../styles/quiz.css";

// -- Complete Original Quiz Data Archetype --------------------------------------------
const questions = [
  {
    text: "How do you feel about computing nostalgia?",
    options: [
      { id: "retro", label: "Pure nostalgia", desc: "Chunky icons, dial-up sounds, the whole 90s vibe" },
      { id: "fond", label: "A little nostalgic", desc: "I remember XP fondly, but I don't need it back" },
      { id: "modern", label: "Mostly modern", desc: "I like new things, but I still want it to feel familiar" },
      { id: "cutting", label: "Give me the newest", desc: "I want whatever Microsoft ships today" },
    ],
  },
  {
    text: "What do you value most in an OS?",
    options: [
      { id: "stability", label: "Rock-solid stability", desc: "I want it to just work, always" },
      { id: "looks", label: "Fresh, modern visuals", desc: "Glass effects, rounded corners, eye candy" },
      { id: "control", label: "Control and customization", desc: "Deep settings, no hand-holding" },
      { id: "simplicity", label: "Simplicity", desc: "Turn it on and go" },
    ],
  },
  {
    text: "How do you feel about big UI redesigns?",
    options: [
      { id: "resist", label: "Please don't move my Start menu", desc: "Keep things exactly where I left them" },
      { id: "cautious", label: "I'll adjust, eventually", desc: "Give me a minute to complain first" },
      { id: "curious", label: "I like seeing what's new", desc: "Redesigns keep things interesting" },
      { id: "embrace", label: "Bring on the overhaul", desc: "Rebuild it from scratch, I'm in" },
    ],
  },
  {
    text: "What will you mainly use it for?",
    options: [
      { id: "everyday", label: "Everyday use", desc: "Browsing, office work, media" },
      { id: "gaming", label: "Gaming", desc: "DirectX, frame rates, the Game Bar" },
      { id: "dev", label: "Development", desc: "IDEs, terminals, WSL" },
      { id: "office", label: "Office & business", desc: "Domains, spreadsheets, meetings" },
    ],
  },
  {
    text: "How often do you want big feature updates?",
    options: [
      { id: "rare", label: "Rarely, if ever", desc: "Set it up once and leave it alone for years" },
      { id: "periodic", label: "Every few years", desc: "A big redesign now and then keeps it fresh" },
      { id: "continuous", label: "Constantly, as a service", desc: "Rolling updates, always current" },
    ],
  },
];

const distros = {
  win95: {
    name: "Windows 95",
    tagline: "Start me up",
    year: 1995,
    color: "#008080",
    desc: "The release that introduced the Start menu, taskbar, and Plug and Play to the mainstream, launched with a $300 million campaign built around the Rolling Stones' Start Me Up.",
  },
  win98: {
    name: "Windows 98",
    tagline: "Where do you want to go today?",
    year: 1998,
    color: "#5A7EA6",
    desc: "A refinement of 95 aimed at better hardware support, introducing USB and FAT32 and bundling Internet Explorer -- a decision that fed directly into Microsoft's antitrust case.",
  },
  winme: {
    name: "Windows Me",
    tagline: "Meet the Millennium Edition nobody asked for",
    year: 2000,
    color: "#8A6FBF",
    desc: "The last Windows built on the aging MS-DOS codebase, rushed out for the 2000 holiday season and remembered mostly for its instability before Windows 2000 replaced it for good.",
  },
  win2000: {
    name: "Windows 2000",
    tagline: "Built for business, quietly reliable",
    year: 2000,
    color: "#274B7A",
    desc: "An NT-kernel release built strictly for business desktops and servers, bringing Active Directory and Plug and Play to the professional line before XP merged it with consumer Windows.",
  },
  winxp: {
    name: "Windows XP",
    tagline: "Yes you can",
    year: 2001,
    color: "#2A66C8",
    desc: "The release that finally merged Microsoft's consumer and business lines onto the NT kernel. Its stability made it the longest-running Windows ever, with support lasting nearly 13 years.",
  },
  vista: {
    name: "Windows Vista",
    tagline: "The Wow starts now",
    year: 2007,
    color: "#3E8ED0",
    desc: "A five-year, multi-billion-dollar rebuild bringing Aero Glass visuals and User Account Control, but its heavy hardware demands and driver issues made it Microsoft's most criticized release.",
  },
  win7: {
    name: "Windows 7",
    tagline: "Windows 7 was my idea",
    year: 2009,
    color: "#3AA0DD",
    desc: "A faster, more polished follow-up to Vista built on the same foundation. It fixed most of Vista's complaints and became one of the most fondly remembered Windows releases.",
  },
  win8: {
    name: "Windows 8",
    tagline: "Reimagined for touch",
    year: 2012,
    color: "#00ADEF",
    desc: "A touch-first redesign that replaced the Start menu with a tile-based Start screen. Its steep learning curve on desktop PCs made it one of Windows' most divisive releases.",
  },
  win10: {
    name: "Windows 10",
    tagline: "The last version of Windows",
    year: 2015,
    color: "#0078D6",
    desc: "Free to upgrade to and pitched as 'Windows as a service' rather than a one-time release, it brought back the Start menu and folded in continuous rolling updates.",
  },
  win11: {
    name: "Windows 11",
    tagline: "A fresh new look for Windows",
    year: 2021,
    color: "#0067C0",
    desc: "A visual refresh centered on a redesigned Start menu, centered taskbar, and rounded corners, paired with stricter hardware requirements that left many older PCs unable to upgrade.",
  },
};

const scoring = {
  retro: { win95: 3, win98: 2 },
  fond: { winxp: 3, win2000: 1, win98: 1 },
  modern: { win7: 2, win10: 2, win8: 1 },
  cutting: { win11: 3, win10: 1 },
  stability: { win2000: 2, win7: 2, winxp: 1, win10: 1 },
  looks: { vista: 3, win11: 2, win8: 1 },
  control: { win98: 2, winxp: 2, win7: 1 },
  simplicity: { win95: 2, win10: 2, win11: 1 },
  resist: { win95: 2, winxp: 3, win2000: 1 },
  cautious: { win7: 2, win98: 1, winme: 1 },
  curious: { vista: 2, win10: 1, win8: 1 },
  embrace: { win8: 3, win11: 2, vista: 1 },
  everyday: { winxp: 2, win7: 2, win10: 1 },
  gaming: { win98: 1, win7: 2, win10: 2, win11: 1 },
  dev: { win10: 2, win11: 2, win7: 1, winxp: 1 },
  office: { win2000: 3, winxp: 2, win7: 1 },
  rare: { winxp: 3, win7: 2, win2000: 1 },
  periodic: { win98: 2, vista: 1, win8: 1, winme: 1 },
  continuous: { win10: 3, win11: 2 },
};

function getResult(answers) {
  const scores = Object.fromEntries(Object.keys(distros).map((d) => [d, 0]));
  answers.forEach((a) => {
    const pts = scoring[a] ?? {};
    Object.entries(pts).forEach(([d, v]) => { scores[d] += v; });
  });
  const winnerKey = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
  return distros[winnerKey];
}

export default function DistroQuiz() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selected, setSelected] = useState(null);

  const totalQ = questions.length;
  const isIntro = step === 0;
  const isResult = step > totalQ;
  const currentQ = questions[step - 1];

  function handleNext() {
    if (!selected) return;
    setAnswers((prev) => [...prev, selected]);
    setSelected(null);
    setStep((s) => s + 1);
  }

  function handleClose() {
    setIsOpen(false);
    setStep(0);
    setAnswers([]);
    setSelected(null);
  }

  function handleRestart() {
    setStep(0);
    setAnswers([]);
    setSelected(null);
  }

  const result = isResult ? getResult(answers) : null;

  if (!isOpen) {
    return (
      <div className="quiz-root-wrapper quiz-launcher-container">
        <button className="quiz-btn-primary" onClick={() => setIsOpen(true)}>
          START
        </button>
      </div>
    );
  }

  return (
    <div className="quiz-root-wrapper quiz-overlay-backdrop" onClick={handleClose}>
      <div className="quiz-modal-card" onClick={(e) => e.stopPropagation()}>
        
        <button className="quiz-close-x" onClick={handleClose} aria-label="Close quiz">×</button>

        {/* -- Screen 1: Intro Pass -- */}
        {isIntro && (
          <div className="quiz-animated-step">
            <h3 className="quiz-question-heading">Windows Timeline Explorer Quiz</h3>
            <p className="quiz-intro-text">
              Answer 5 quick questions to find the era of Windows that fits your configuration profile and computing preferences best.
            </p>
            <button className="quiz-btn-primary" onClick={() => setStep(1)}>
              Start the quiz →
            </button>
          </div>
        )}

        {/* -- Screen 2: Active Question Pass -- */}
        {!isIntro && !isResult && currentQ && (
          <div className="quiz-animated-step" key={step}>
            <div className="quiz-progress-track">
              {questions.map((_, i) => (
                <div 
                  key={i} 
                  className={`quiz-progress-segment ${i < step ? "is-filled" : ""}`} 
                />
              ))}
            </div>

            <p className="quiz-step-meta">Question {step} of {totalQ}</p>
            <h3 className="quiz-question-heading">{currentQ.text}</h3>

            <div className="quiz-options-grid">
              {currentQ.options.map((opt) => {
                const isSelected = selected === opt.id;
                return (
                  <button
                    key={opt.id}
                    className={`quiz-option-card ${isSelected ? "is-active" : ""}`}
                    onClick={() => setSelected(opt.id)}
                    aria-pressed={isSelected}
                  >
                    {isSelected && <span className="quiz-checkmark-icon">✓</span>}
                    <div className="quiz-option-card-title">{opt.label}</div>
                    <div className="quiz-option-card-desc">{opt.desc}</div>
                  </button>
                );
              })}
            </div>

            <button 
              className="quiz-btn-primary" 
              disabled={!selected} 
              onClick={handleNext}
            >
              {step === totalQ ? "See my result →" : "Next →"}
            </button>
          </div>
        )}

        {/* -- Screen 3: Minimalized Results Panel Pass -- */}
        {isResult && result && (
          <div className="quiz-animated-step">
            <p className="quiz-result-header-text">Your Recommended Matching Version</p>
            
            <div 
              className="quiz-modern-result-card"
              style={{ background: `linear-gradient(135deg, rgba(255,255,255,1) 0%, ${result.color}0A 100%), var(--color-background-primary, #ffffff)`, border: `2px solid ${result.color}` }}
            >
              <div className="quiz-result-identity-block">
                <div 
                  className="quiz-result-status-indicator" 
                  style={{ background: result.color, boxShadow: `0 0 12px ${result.color}80` }} 
                />
                <div>
                  <div className="quiz-result-main-title">{result.name}</div>
                  <div className="quiz-result-sub-tagline">“{result.tagline}”</div>
                </div>
              </div>

              <p className="quiz-result-body-desc">{result.desc}</p>
            </div>

            <div className="quiz-control-row">
              <button className="quiz-btn-primary" onClick={handleRestart}>
                ↺ Retake quiz
              </button>
              <button className="quiz-btn-primary quiz-btn-secondary" onClick={handleClose}>
                Close Window
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}