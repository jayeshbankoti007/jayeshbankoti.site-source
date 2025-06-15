import React, { Component } from "react";

export default class ModelDeploymentOptImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <svg
        id="deployment-optimization-img"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        width="1098.75"
        height="632.37039"
        viewBox="0 0 1098.75 632.37039"
      >
        <title>Deployment & Optimization</title>

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

        {/* 1. Code & Build Stage */}
        <rect x="100" y="200" width="100" height="80" rx="10" ry="10" fill={theme.dark} opacity="0.9" />
        <path d="M120 220 H180 M120 235 H180 M120 250 H150" stroke={theme.text} strokeWidth="5" />
        <text x="120" y="270" fontSize="18" fill={theme.text}>Code</text>

        <path
          d="M200,240 H250"
          fill="none"
          stroke={theme.compImgHighlight}
          strokeWidth="4"
          markerEnd="url(#arrowhead)"
        />

        <rect x="250" y="200" width="100" height="80" rx="10" ry="10" fill={theme.dark} opacity="0.9" />
        <rect x="270" y="220" width="60" height="40" fill={theme.imageHighlight} rx="5" ry="5" />
        <rect x="280" y="230" width="40" height="20" fill={theme.dark} rx="2" ry="2" />
        <text x="270" y="270" fontSize="18" fill={theme.text}>Build</text>

        {/* 2. Deployment Stage */}
        <path
          d="M350,240 H400"
          fill="none"
          stroke={theme.compImgHighlight}
          strokeWidth="4"
          markerEnd="url(#arrowhead)"
        />

        <path
          d="M400,220 A50,50 0 0 1 450,170 V150 A50,50 0 0 1 500,100 H700 A50,50 0 0 1 750,150 V170 A50,50 0 0 1 800,220 H900" /* Cloud/Server outline */
          fill="none"
          stroke={theme.jacketColor}
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M550,150 L580,180 L520,180 L550,150Z" fill={theme.imageHighlight} /> {/* Upload icon */}
        <text x="590" y="160" fontSize="20" fill={theme.text}>Deploy</text>

        {/* Live Application/Production */}
        <circle cx="700" cy="270" r="60" fill={theme.jacketColor} opacity="0.7" />
        <circle cx="700" cy="270" r="40" fill={theme.dark} opacity="0.9" />
        <text x="670" y="280" fontSize="25" fontWeight="bold" fill={theme.text}>Live</text>

        {/* Arrow to Live System */}
        <path
          d="M750,220 Q730,250 700,270"
          fill="none"
          stroke={theme.compImgHighlight}
          strokeWidth="4"
          markerEnd="url(#arrowhead)"
        />

        {/* 3. Optimization & Monitoring */}
        {/* Performance Speedometer */}
        <path
          d="M250,450 A100,100 0 1 1 450,450 L350,450 Z"
          fill={theme.jacketColor}
          opacity="0.7"
        />
        <circle cx="350" cy="450" r="10" fill={theme.dark} />
        <line x1="350" y1="450" x2="420" y2="400" stroke={theme.imageHighlight} strokeWidth="3" />
        <text x="310" y="520" fontSize="18" fill={theme.text}>Optimize</text>

        {/* Monitoring Graph */}
        <rect x="700" y="400" width="200" height="120" rx="10" ry="10" fill={theme.dark} opacity="0.9" />
        <polyline
          points="710,500 740,460 770,480 800,440 830,470 860,430 890,460"
          fill="none"
          stroke={theme.imageHighlight}
          strokeWidth="4"
        />
        <line x1="710" y1="500" x2="890" y2="500" stroke={theme.text} strokeWidth="1" opacity="0.5" />
        <text x="730" y="420" fontSize="18" fill={theme.text}>Monitor</text>

        {/* Flow from Live to Monitoring & Optimization */}
        <path
          d="M640,290 C600,350 450,400 350,450"
          fill="none"
          stroke={theme.compImgHighlight}
          strokeWidth="4"
          markerEnd="url(#arrowhead)"
        />
        <path
          d="M760,300 C780,350 800,380 800,400"
          fill="none"
          stroke={theme.compImgHighlight}
          strokeWidth="4"
          markerEnd="url(#arrowhead)"
        />

        {/* Feedback Loop for Continuous Improvement (from Monitor/Optimize back to Code) */}
        <path
          d="M350,520 C300,550 150,550 150,500 V280"
          fill="none"
          stroke={theme.imageHighlight}
          strokeWidth="3"
          strokeDasharray="6,3" /* Dashed line for feedback/iteration */
          markerEnd="url(#arrowhead)"
        />
         <path
          d="M800,520 C750,550 600,550 550,500 V400" // A separate feedback path from monitoring
          fill="none"
          stroke={theme.imageHighlight}
          strokeWidth="3"
          strokeDasharray="6,3"
          markerEnd="url(#arrowhead)"
        />
        <text x="400" y="560" fontSize="18" fill={theme.text}>Iterate</text>
      </svg>
    );
  }
}