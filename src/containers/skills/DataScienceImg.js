import React, { Component } from "react";

export default class NLPMLImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <svg
        id="nlp-ml-img"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        width="1098.75"
        height="632.37039"
        viewBox="0 0 1098.75 632.37039"
      >
        <title>Natural Language Processing & Machine Learning</title>

        {/* Base shadow/highlight */}
        <ellipse
          cx="549.375"
          cy="600.77366"
          rx="549.375"
          ry="31.59674"
          fill={theme.compImgHighlight}
        />

        {/* Define arrowhead marker */}
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="0"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill={theme.compImgHighlight} />
          </marker>
        </defs>

        {/* 1. Natural Language Input */}
        <rect x="100" y="150" width="150" height="100" rx="10" ry="10" fill={theme.dark} opacity="0.9" />
        <path d="M120 180 H230 M120 200 H200 M120 220 H170" stroke={theme.text} strokeWidth="5" opacity="0.8" />
        <text x="140" y="170" fontSize="18" fill={theme.text}>Text</text>

        {/* 2. NLP Processing (Understanding/Features) */}
        <rect x="300" y="150" width="150" height="100" rx="10" ry="10" fill={theme.jacketColor} opacity="0.7" />
        <path d="M320 180 L350 200 L320 220 M380 180 L410 200 L380 220" stroke={theme.dark} strokeWidth="4" opacity="0.6" />
        <text x="340" y="200" fontSize="20" fill={theme.dark}>NLP</text>
        <text x="320" y="230" fontSize="16" fill={theme.text}>Understand</text>

        {/* Flow from Text to NLP */}
        <path
          d="M250,200 H300"
          fill="none"
          stroke={theme.compImgHighlight}
          strokeWidth="4"
          markerEnd="url(#arrowhead)"
        />

        {/* 3. Machine Learning Model (Training/Learning) */}
        <path
          d="M700,100 C600,50 500,150 550,250 C600,350 800,350 850,250 C900,150 800,50 700,100Z"
          fill={theme.dark}
          opacity="0.8"
        />
        <text x="650" y="200" fontSize="35" fontWeight="bold" fill={theme.text}>ML Model</text>
        {/* Neural network abstraction */}
        <circle cx="600" cy="170" r="8" fill={theme.imageHighlight} />
        <circle cx="650" cy="200" r="8" fill={theme.imageHighlight} />
        <circle cx="700" cy="170" r="8" fill={theme.imageHighlight} />
        <line x1="600" y1="170" x2="650" y2="200" stroke={theme.imageHighlight} strokeWidth="1" opacity="0.5" />
        <line x1="650" y1="200" x2="700" y2="170" stroke={theme.imageHighlight} strokeWidth="1" opacity="0.5" />

        {/* Flow from NLP to ML Model (Features/Input) */}
        <path
          d="M450,200 H550"
          fill="none"
          stroke={theme.compImgHighlight}
          strokeWidth="4"
          markerEnd="url(#arrowhead)"
        />
        <text x="470" y="190" fontSize="18" fill={theme.text}>Features</text>

        {/* 4. Prediction / Generation / Output */}
        <rect x="850" y="250" width="150" height="100" rx="10" ry="10" fill={theme.jacketColor} opacity="0.7" />
        <path d="M870 280 H980 M870 300 H950 M870 320 H920" stroke={theme.dark} strokeWidth="5" opacity="0.8" />
        <text x="880" y="270" fontSize="18" fill={theme.dark}>Output</text>
        <text x="870" y="340" fontSize="16" fill={theme.text}>Prediction/Text</text>

        {/* Flow from ML Model to Output */}
        <path
          d="M750,250 H850"
          fill="none"
          stroke={theme.compImgHighlight}
          strokeWidth="4"
          markerEnd="url(#arrowhead)"
        />
        <text x="780" y="240" fontSize="18" fill={theme.text}>Predict</text>

        {/* 5. Learning/Feedback Loop */}
        <path
          d="M500,300 C400,380 400,500 500,550 C600,600 750,550 800,450 C850,350 750,300 700,300"
          fill="none"
          stroke={theme.imageHighlight}
          strokeWidth="3"
          strokeDasharray="8,4" /* Dashed for learning loop */
        />
        <polygon points="700 300 710 310 690 310 700 300" fill={theme.imageHighlight} /> {/* Arrow on loop */}
        <text x="550" y="570" fontSize="18" fill={theme.text}>Learning Loop</text>
        
        {/* Additional NLP focus: Sentiment, Translation */}
        <rect x="150" y="350" width="120" height="80" rx="10" ry="10" fill={theme.jacketColor} opacity="0.6" />
        <path d="M170,390 L230,390 M200,370 L200,410" stroke={theme.dark} strokeWidth="3" /> {/* Cross for analysis */}
        <text x="170" y="380" fontSize="16" fill={theme.dark}>Analyze</text>
        <text x="170" y="410" fontSize="14" fill={theme.text}>Sentiment</text>

        <rect x="350" y="400" width="120" height="80" rx="10" ry="10" fill={theme.jacketColor} opacity="0.6" />
        <path d="M370,430 L430,430 M370,450 L430,450" stroke={theme.dark} strokeWidth="3" /> {/* Dual lines for translation */}
        <text x="370" y="440" fontSize="16" fill={theme.dark}>Translate</text>

        <path
          d="M270,390 C300,370 320,380 350,400"
          fill="none"
          stroke={theme.compImgHighlight}
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
        />
      </svg>
    );
  }
}