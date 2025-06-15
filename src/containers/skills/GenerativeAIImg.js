import React, { Component } from "react";

export default class GenerativeAIAgenticImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <svg
        id="generative-ai-agentic-img"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        width="1098.75"
        height="632.37039"
        viewBox="0 0 1098.75 632.37039"
      >
        <title>Generative AI, LLM, Agentic Systems, RAG</title>

        {/* Base shadow/highlight for depth */}
        <ellipse
          cx="549.375"
          cy="600.77366"
          rx="549.375"
          ry="31.59674"
          fill={theme.compImgHighlight}
        />

        {/* Define arrowhead marker for all paths */}
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

        {/* 1. LLM Core (Large Language Model) */}
        {/* A large, central brain-like/complex network structure */}
        <path
          d="M550,150 C450,100 350,200 400,300 C450,400 650,400 700,300 C750,200 650,100 550,150Z"
          fill={theme.dark}
          opacity="0.8"
        />
        <text x="510" y="270" fontSize="40" fontWeight="bold" fill={theme.text}>LLM</text>
        {/* Abstract text lines inside LLM to convey language/data processing */}
        <rect x="420" y="200" width="100" height="8" fill={theme.text} opacity="0.2" />
        <rect x="580" y="200" width="80" height="8" fill={theme.text} opacity="0.2" />
        <rect x="450" y="300" width="120" height="8" fill={theme.text} opacity="0.2" />
        <rect x="560" y="320" width="90" height="8" fill={theme.text} opacity="0.2" />

        {/* Input: "Prompt" to LLM */}
        <path
          d="M200,200 C280,180 350,200 400,220"
          fill="none"
          stroke={theme.imageHighlight}
          strokeWidth="5"
          markerEnd="url(#arrowhead)"
        />
        <text x="220" y="170" fontSize="18" fill={theme.text}>Prompt</text>

        {/* Output: "Generate" from LLM */}
        <path
          d="M700,220 C750,240 850,220 900,200 C950,180 980,200 950,250"
          fill="none"
          stroke={theme.imageHighlight}
          strokeWidth="5"
          markerEnd="url(#arrowhead)"
        />
        <text x="850" y="170" fontSize="18" fill={theme.text}>Generate</text>

        {/* 2. RAG (Retrieval-Augmented Generation) */}
        {/* Knowledge Base / Database */}
        <rect x="100" y="350" width="120" height="80" rx="10" ry="10" fill={theme.jacketColor} opacity="0.7" />
        <path d="M100 360 H220 V350 H100 Z" fill={theme.jacketColor} opacity="0.9" /> {/* Top lid of DB */}
        <circle cx="120" cy="365" r="5" fill={theme.dark} opacity="0.5" />
        <circle cx="140" cy="365" r="5" fill={theme.dark} opacity="0.5" />
        <text x="130" y="395" fontSize="18" fill={theme.dark} fontWeight="bold">DB</text>
        <text x="110" y="425" fontSize="16" fill={theme.text}>Knowledge Base</text>

        {/* Retrieval Path (Dashed line for retrieval) from KB to LLM */}
        <path
          d="M220,380 C280,350 350,300 400,270"
          fill="none"
          stroke={theme.compImgHighlight}
          strokeWidth="4"
          strokeDasharray="8,4" /* Dashed line for retrieval action */
          markerEnd="url(#arrowhead)"
        />
        <text x="280" y="340" fontSize="18" fill={theme.text}>Retrieve</text>

        {/* Augmentation/Integration symbol near LLM */}
        <circle cx="420" cy="270" r="20" fill={theme.dark} opacity="0.3" />
        <path
          d="M410,270 H430 M420,260 V280" /* Simple cross for "add" or "integrate" */
          stroke={theme.compImgHighlight}
          strokeWidth="2"
        />

        {/* 3. Agentic Systems */}
        {/* Agent Core / Control Panel */}
        <rect x="450" y="450" width="200" height="100" rx="20" ry="20" fill={theme.dark} opacity="0.9" />
        <text x="500" y="510" fontSize="30" fontWeight="bold" fill={theme.text}>Agent</text>
        <circle cx="480" cy="470" r="8" fill={theme.imageHighlight} /> {/* Indicator light */}
        <rect x="520" y="465" width="100" height="10" fill={theme.text} opacity="0.2" /> {/* Abstract task line */}

        {/* Connection from LLM to Agent (Decision/Thought Process) */}
        <path
          d="M550,350 V450"
          fill="none"
          stroke={theme.compImgHighlight}
          strokeWidth="4"
          markerEnd="url(#arrowhead)"
        />
        <text x="560" y="400" fontSize="18" fill={theme.text}>Decision</text>

        {/* Agentic Loop (Observe-Plan-Act Cycle) */}
        <path
          d="M600,420 A100,100 0 1 1 500,420" /* Large arc for the loop */
          fill="none"
          stroke={theme.imageHighlight}
          strokeWidth="3"
          strokeDasharray="6,3" /* Dashed for iterative process */
        />
        <polygon points="500 420 510 410 510 430 500 420" fill={theme.imageHighlight} /> {/* Arrow on loop path */}
        <text x="610" y="450" fontSize="18" fill={theme.text} transform="rotate(10 610 450)">Loop/Act</text>


        {/* Tools/Environment Interaction */}
        <rect x="750" y="400" width="100" height="60" rx="10" ry="10" fill={theme.jacketColor} opacity="0.7" />
        <text x="770" y="435" fontSize="20" fill={theme.dark}>Tool A</text>
        <path
          d="M650,480 Q700,460 750,430"
          fill="none"
          stroke={theme.compImgHighlight}
          strokeWidth="3"
          markerEnd="url(#arrowhead)"
        />
        
        <rect x="850" y="500" width="100" height="60" rx="10" ry="10" fill={theme.jacketColor} opacity="0.7" />
        <text x="870" y="535" fontSize="20" fill={theme.dark}>Tool B</text>
        <path
          d="M650,500 Q750,550 850,530"
          fill="none"
          stroke={theme.compImgHighlight}
          strokeWidth="3"
          markerEnd="url(#arrowhead)"
        />
        
        {/* Feedback from tools back to agent (Dashed for feedback) */}
        <path
          d="M840,440 Q750,400 650,470"
          fill="none"
          stroke={theme.imageHighlight}
          strokeWidth="2"
          strokeDasharray="4,2"
          markerEnd="url(#arrowhead)"
        />
         <path
          d="M940,540 Q850,580 650,520"
          fill="none"
          stroke={theme.imageHighlight}
          strokeWidth="2"
          strokeDasharray="4,2"
          markerEnd="url(#arrowhead)"
        />

      </svg>
    );
  }
}