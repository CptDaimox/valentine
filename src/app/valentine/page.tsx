"use client";
import { useState, useEffect } from "react";
import "../../styles/style.css";

const phrases = [
  "No",
  "Are you sure?",
  "Did you missclick?",
  "Don't do this to me :(",
  "You're breaking my heart",
  "I'm gonna cry...",
  "Love me pls",
  "Haha you accidently pressed the wrong button",
  "Oops, try again?",
  "That tickles!",
  "Pretty please with a cherry on top?",
  "Are we playing a game?",
  "I thought we were friends!",
  "Do you really mean that?",
  "Be gentle!",
  "I'm not sure I can handle that.",
  "You got me there!",
  "Is it too late to say sorry?",
  "I'm feeling a bit sensitive today.",
  "Let's not rush things.",
  "Are we dancing around the issue?",
  "I'm here for you, you know.",
  "That's a bit harsh, don't you think?",
  "I need a moment.",
  "Can we talk about this?",
  "I wasn't expecting that!",
  "You're full of surprises.",
  "Should I be worried?",
  "I'm starting to get mixed signals.",
  "Let's think this through.",
  "I promise I'll do better.",
  "Do you believe in second chances?",
  "That was unexpected.",
  "I'm trying my best here.",
  "Can you repeat that?",
  "I'm all ears.",
  "Your wish is my command.",
  "I'm at your service.",
  "Are you playing hard to get?",
  "I think we have a connection.",
  "Let's not make any hasty decisions.",
  "I'm getting mixed feelings.",
  "That's intriguing...",
  "I'm puzzled by your choice.",
  "Could you clarify?",
  "Let's take a deep breath.",
  "I'm ready when you are.",
  "Is this a test?",
  "I'm not sure how to respond.",
  "Let's start over, shall we?",
  "Your feedback is important to me."
];
export default function Home() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="container">
      {yesPressed ? (
        <>
          <img
            alt="yessir"
            src="https://media1.tenor.com/m/J3o-7E-2JGAAAAAd/emuahh.gif"
          ></img>
          <div className="title">LET&apos;S GOOOOOOO!!!!</div>
        </>
      ) : (
        <>
          <img
            alt="yessir"
            src="https://media.tenor.com/M-3dhXNRvWgAAAAi/peak-hi.gif"
          ></img>
          <div className="title">Will you be my valentine?</div>
          <div className="buttons">
            <button
              type="button"
              className="btn btn--yes"
              style={{ fontSize: yesButtonSize }}
              onClick={() => {
                setYesPressed(true);
              }}
            >
              Yes
            </button>
            <button
              type="button"
              className="btn btn--no"
              onClick={handleNoClick}
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
