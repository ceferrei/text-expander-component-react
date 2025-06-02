"use client";

import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      {/* Header */}
      <div className="header">
        <h1 className="main-title">Interactive Text Expander</h1>
        <p className="subtitle">
          A modern, customizable React component for expanding and collapsing
          text content with smooth animations.
        </p>
      </div>

      {/* Examples */}
      <div className="examples-container">
        {/* Example 1 - Default */}
        <div className="example-card">
          <div className="example-header">
            <h3 className="example-title">Default Configuration</h3>
            <p className="example-description">
              Basic usage with default settings (10 words, default button text)
            </p>
          </div>
          <TextExpander>
            Space travel is the ultimate adventure! Imagine soaring past the
            stars and exploring new worlds. It's the stuff of dreams and science
            fiction, but believe it or not, space travel is a real thing. Humans
            and robots are constantly venturing out into the cosmos to uncover
            its secrets and push the boundaries of what's possible.
          </TextExpander>
        </div>

        {/* Example 2 - Custom */}
        <div className="example-card">
          <div className="example-header">
            <h3 className="example-title">Custom Configuration</h3>
            <p className="example-description">
              Custom word limit (20), button text, and orange accent color
            </p>
          </div>
          <TextExpander
            collapsedNumWords={20}
            expandButtonText="Show text"
            collapseButtonText="Collapse text"
            buttonColor="#ff6622"
          >
            Space travel requires some seriously amazing technology and
            collaboration between countries, private companies, and
            international space organizations. And while it's not always easy
            (or cheap), the results are out of this world. Think about the first
            time humans stepped foot on the moon or when rovers were sent to
            roam around on Mars.
          </TextExpander>
        </div>

        {/* Example 3 - Expanded */}
        <div className="example-card highlighted">
          <div className="example-header">
            <h3 className="example-title">Always Expanded</h3>
            <p className="example-description">
              Pre-expanded state with custom styling
            </p>
          </div>
          <TextExpander expanded={true} className="highlighted-box">
            Space missions have given us incredible insights into our universe
            and have inspired future generations to keep reaching for the stars.
            Space travel is a pretty cool thing to think about. Who knows what
            we'll discover next!
          </TextExpander>
        </div>
      </div>

      {/* Features */}
      <div className="features-section">
        <h2 className="features-title">Component Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon blue">📝</div>
            <h3 className="feature-name">Customizable Word Limit</h3>
            <p className="feature-desc">
              Set how many words to show when collapsed
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon green">✨</div>
            <h3 className="feature-name">Custom Button Text</h3>
            <p className="feature-desc">
              Personalize expand/collapse button labels
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon purple">🎨</div>
            <h3 className="feature-name">Flexible Styling</h3>
            <p className="feature-desc">
              Custom colors and CSS classes support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextExpander({
  collapsedNumWords = 10,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "#1f09cd",
  expanded = false,
  className = "",
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);
  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";

  return (
    <div className={`text-expander ${className}`}>
      <span className="text-content">{displayText}</span>
      <button
        onClick={() => setIsExpanded((exp) => !exp)}
        className="expand-button"
        style={{ color: buttonColor }}
      >
        {isExpanded ? collapseButtonText : expandButtonText}
        <span className="button-icon">{isExpanded ? "↑" : "↓"}</span>
      </button>
    </div>
  );
}
