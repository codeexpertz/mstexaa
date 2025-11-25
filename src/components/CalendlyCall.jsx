"use client";

export default function CalendlyCall() {
  return (
    <div className="w-full h-[60vh] md:h-[700px] mt-20 md:mt-4">
      <iframe
        src="https://calendly.com/codeexpertss/call"
        width="100%"
        height="100%"
        frameBorder="0"
        allow="camera; microphone; fullscreen; payment"
        className="rounded-lg shadow-md"
      ></iframe>
    </div>
  );
}