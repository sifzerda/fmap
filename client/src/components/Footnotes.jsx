// FootnoteRef.jsx
import { useState } from 'react';

function Footnotes({ text }) {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      className="footnote-ref"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <sup className="footnote-marker">†</sup>
      {hovered && (
        <span className="footnote-tooltip">
          {text}
        </span>
      )}
    </span>
  );
}

export default Footnotes;
