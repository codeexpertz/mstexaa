"use client"
export default function CalendlyMeeting() {
  return (
    <div className="w-full h-[700px] mt-20 md:mt-4">
      <iframe
        src="https://calendly.com/codeexpertss/15-minutes-meeting"
        width="100%"
        height="100%"
        frameBorder="0"
        allow="camera; microphone; fullscreen; payment"
      ></iframe>
    </div>
  );
}
