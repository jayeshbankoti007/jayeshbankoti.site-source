import React, { Component } from "react";

export default class InfrastructureAIOpsImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <svg
        id="cloud-infra-devops-img"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        width="1098.75"
        height="632.37039"
        viewBox="0 0 1098.75 632.37039"
      >
        <title>Cloud Infrastructure & DevOps</title>

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

        {/* 1. DevOps Pipeline (CI/CD) */}
        {/* Code/Commit Stage */}
        <rect x="100" y="200" width="100" height="80" rx="10" ry="10" fill={theme.dark} opacity="0.9" />
        <path d="M120 220 H180 M120 235 H180 M120 250 H150" stroke={theme.text} strokeWidth="5" />
        <text x="120" y="270" fontSize="18" fill={theme.text}>Code</text>

        {/* Build Stage */}
        <rect x="250" y="200" width="100" height="80" rx="10" ry="10" fill={theme.dark} opacity="0.9" />
        <rect x="270" y="220" width="60" height="40" fill={theme.imageHighlight} rx="5" ry="5" />
        <rect x="280" y="230" width="40" height="20" fill={theme.dark} rx="2" ry="2" />
        <text x="270" y="270" fontSize="18" fill={theme.text}>Build</text>

        {/* Deploy Stage */}
        <rect x="400" y="200" width="100" height="80" rx="10" ry="10" fill={theme.dark} opacity="0.9" />
        <path d="M420 250 L450 220 L480 250" stroke={theme.imageHighlight} strokeWidth="5" fill="none" />
        <path d="M450 220 V250" stroke={theme.imageHighlight} strokeWidth="5" />
        <text x="420" y="270" fontSize="18" fill={theme.text}>Deploy</text>

        {/* Pipeline Arrows */}
        <path
          d="M200,240 H250"
          fill="none"
          stroke={theme.compImgHighlight}
          strokeWidth="4"
          markerEnd="url(#arrowhead)"
        />
        <path
          d="M350,240 H400"
          fill="none"
          stroke={theme.compImgHighlight}
          strokeWidth="4"
          markerEnd="url(#arrowhead)"
        />

        {/* 2. Cloud Infrastructure */}
        {/* Main Cloud shape */}
        <path
          d="M600,150 Q550,50 450,100 T400,200 Q400,280 500,300 Q600,350 700,300 Q800,280 800,200 T750,100 Q700,50 600,150Z"
          fill={theme.jacketColor}
          opacity="0.7"
        />
        <text x="600" y="220" fontSize="30" fontWeight="bold" fill={theme.dark}>Cloud</text>

        {/* Servers/Datacenter abstraction within cloud */}
        <rect x="500" y="250" width="100" height="40" rx="5" ry="5" fill={theme.dark} opacity="0.8" />
        <rect x="510" y="260" width="80" height="5" fill={theme.text} opacity="0.2" />
        <rect x="510" y="270" width="70" height="5" fill={theme.text} opacity="0.2" />

        <rect x="620" y="230" width="80" height="30" rx="5" ry="5" fill={theme.dark} opacity="0.8" />
        <rect x="630" y="240" width="60" height="5" fill={theme.text} opacity="0.2" />

        {/* Connection from Deploy to Cloud */}
        <path
          d="M500,240 H550 V200" /* Adjust V200 to connect to the cloud shape better */
          fill="none"
          stroke={theme.compImgHighlight}
          strokeWidth="4"
          markerEnd="url(#arrowhead)"
        />
        <path
          d="M500,240 Q550,260 600,250" /* Path into the cloud */
          fill="none"
          stroke={theme.compImgHighlight}
          strokeWidth="4"
          markerEnd="url(#arrowhead)"
        />

        {/* 3. Monitoring & Automation (DevOps aspects) */}
        {/* Monitoring Graph */}
        <rect x="750" y="400" width="180" height="100" rx="10" ry="10" fill={theme.dark} opacity="0.9" />
        <polyline
          points="760,490 790,450 820,470 850,430 880,460 910,420"
          fill="none"
          stroke={theme.imageHighlight}
          strokeWidth="3"
        />
        <line x1="760" y1="490" x2="920" y2="490" stroke={theme.text} strokeWidth="1" opacity="0.5" />
        <text x="780" y="420" fontSize="18" fill={theme.text}>Monitoring</text>

        {/* Automation Gear */}
        <path
          d="M300,450 A50,50 0 1 1 300,550 A50,50 0 1 0 300,450Z M300,500 L300,480 L320,480 L320,500 L300,500 Z M280,500 L280,480 L300,480 L300,500 L280,500 Z"
          fill={theme.jacketColor}
          transform="rotate(30 300 500)" /* Slightly rotate for effect */
          opacity="0.8"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 300 500"
            to="360 300 500"
            dur="8s"
            repeatCount="indefinite"
          />
        </path>
        <text x="280" y="580" fontSize="18" fill={theme.text}>Automate</text>

        {/* Connection from Cloud to Monitoring/Automation */}
        <path
          d="M650,300 C700,350 780,380 780,400"
          fill="none"
          stroke={theme.compImgHighlight}
          strokeWidth="4"
          markerEnd="url(#arrowhead)"
        />
        <path
          d="M500,300 C450,350 350,400 300,450"
          fill="none"
          stroke={theme.compImgHighlight}
          strokeWidth="4"
          markerEnd="url(#arrowhead)"
        />
      </svg>
    );
  }
}