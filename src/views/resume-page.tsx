'use client'
import { useEffect } from 'react';

export default function ResumePage() {
  useEffect(() => {
    document.title = 'My Resume';
  }, []);

  return (
    <div style={{ height: '100vh' }}>
      <iframe
        src="/Resume.pdf"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
        }}
        title="Resume"
      />
    </div>
  );
}
