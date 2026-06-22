import React, { useState, useRef, useEffect } from "react";
import TemplateOne from "./components/TemplateOne";
import TemplateTwo from "./components/TemplateTwo";
import LetterEditor from "./components/LetterEditor";

const today = new Date().toISOString().split("T")[0];

const certBody = `This is to certify that Mr./Ms. __________, a __________ student of _______________, has successfully completed an Internship/Training in __________ at JOD TECH \u2013 IT Solutions, from ____ to ____.

During the tenure with our organization, the candidate demonstrated dedication, sincerity, and a willingness to learn. Their performance, character, and conduct were found to be satisfactory.

We wish him/her every success in future assignments.`;

const defaultData = {
  template: 1,
  letterType: "General Letter",
  date: today,
  refNo: "",
  toName: "",
  toTitle: "",
  toCompany: "",
  toAddress: "",
  subject: "",
  heading: "TO WHOMSOEVER IT MAY CONCERN",
  salutation: "Dear Sir / Madam",
  body: certBody,
  signatoryName: "",
  signatoryTitle: "",
};

function App() {
  const [data, setData] = useState(defaultData);
  const [mobileView, setMobileView] = useState("edit"); // "edit" | "preview"
  const [previewScale, setPreviewScale] = useState(1);
  const printRef = useRef();
  const previewContainerRef = useRef();

  // Dynamically scale the letter preview to fit the available container width
  useEffect(() => {
    const LETTER_WIDTH = 800; // px — the fixed A4 letter width
    const updateScale = () => {
      if (previewContainerRef.current) {
        const containerWidth = previewContainerRef.current.offsetWidth;
        const padding = 32; // 16px each side
        const available = containerWidth - padding;
        const scale = Math.min(1, available / LETTER_WIDTH);
        setPreviewScale(scale);
      }
    };
    updateScale();
    const ro = new ResizeObserver(updateScale);
    if (previewContainerRef.current) ro.observe(previewContainerRef.current);
    return () => ro.disconnect();
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    window.print();
  };

  const TemplateComponent = data.template === 1 ? TemplateOne : TemplateTwo;

  return (
    <div className="min-h-screen bg-[#f0f4f3] font-sans">

      {/* TOP NAV */}
      <header className="no-print bg-[#0A4F43] text-white shadow-lg">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
          <div className="flex items-center gap-3">
            <div className="bg-white p-1 rounded-lg shadow-sm">
              <img src="/jod.jpeg" alt="logo" className="h-7 w-7 object-contain" />
            </div>
            <div>
              <p className="font-serif font-bold text-lg leading-none tracking-wide">JOD TECH</p>
              <p className="text-[9px] text-green-200 tracking-widest uppercase mt-0.5">Professional Letterpad</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="hidden sm:flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl px-4 py-1.5 text-xs font-bold transition-all hover:scale-105 active:scale-95"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/><path d="M6 14h12v8H6z"/></svg>
              Print
            </button>
            <button
              onClick={handleDownloadPDF}
              className="flex items-center gap-2 bg-white text-[#0A4F43] rounded-xl px-4 py-1.5 text-xs font-bold transition-all hover:bg-green-50 shadow-md hover:scale-105 active:scale-95"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
              Download PDF
            </button>
          </div>
        </div>
      </header>


      {/* MAIN LAYOUT */}
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row gap-0 sm:gap-6 px-0 sm:px-6 py-0 sm:py-6 min-h-[calc(100vh-56px)]">

        {/* LEFT — EDITOR */}
        <div
          className={`
            no-print sm:w-[380px] sm:shrink-0 bg-white sm:rounded-2xl shadow-sm sm:h-[calc(100vh-100px)] overflow-y-auto sm:sticky sm:top-6
            ${mobileView === "edit" ? "block" : "hidden sm:block"}
          `}
        >
          <div className="bg-[#0A4F43] px-5 py-4 sm:rounded-t-2xl flex items-center gap-2">
            <svg className="w-4 h-4 text-white/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 113 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
            <h2 className="text-white font-bold text-sm tracking-wide">Editor</h2>
          </div>
          <LetterEditor data={data} onChange={setData} />
          <div className="h-20 sm:hidden"></div> {/* Spacer for bottom nav */}
        </div>

        {/* RIGHT — PREVIEW */}
        <div
          className={`
            flex-1 overflow-auto pb-24 sm:pb-8
            ${mobileView === "preview" ? "block" : "hidden sm:block"}
          `}
        >
          <div className="bg-white sm:rounded-2xl shadow-sm overflow-hidden border border-gray-100">
            <div className="no-print bg-gray-50 border-b border-gray-100 px-5 py-3 sm:rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center gap-2 text-gray-700">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                <h2 className="font-bold text-sm tracking-wide uppercase text-[10px]">Live Preview</h2>
              </div>
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-300"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-300"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-300"></div>
              </div>
            </div>
            <div
              ref={previewContainerRef}
              className="no-print-bg bg-[#eaefee] p-4 sm:p-10 overflow-hidden flex justify-center items-start min-h-[600px]"
            >
              {/* Scaled letter preview */}
              <div
                className="shadow-2xl"
                style={{
                  width: `${800 * previewScale}px`,
                  height: `${1131 * previewScale}px`,
                  position: "relative",
                  backgroundColor: "white"
                }}
              >
                <div
                  ref={printRef}
                  id="letter-preview"
                  style={{
                    transform: `scale(${previewScale})`,
                    transformOrigin: "top left",
                    width: "800px",
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                >
                  <TemplateComponent data={data} />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* MOBILE BOTTOM NAV */}
      <nav className="no-print sm:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[400px] h-16 glass-nav rounded-2xl shadow-2xl z-[100] flex items-center justify-around px-2 border border-white/50">
        <button
          onClick={() => setMobileView("edit")}
          className={`flex flex-col items-center gap-1 px-4 py-2 transition-all ${mobileView === "edit" ? "text-[#0A4F43]" : "text-gray-400"}`}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={mobileView === "edit" ? "2.5" : "2"} strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 113 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          <span className="text-[10px] font-bold uppercase tracking-tighter">Edit</span>
          {mobileView === "edit" && <div className="w-1 h-1 bg-[#0A4F43] rounded-full"></div>}
        </button>

        <button
          onClick={() => setMobileView("preview")}
          className={`flex flex-col items-center gap-1 px-4 py-2 transition-all ${mobileView === "preview" ? "text-[#0A4F43]" : "text-gray-400"}`}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={mobileView === "preview" ? "2.5" : "2"} strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          <span className="text-[10px] font-bold uppercase tracking-tighter">Preview</span>
          {mobileView === "preview" && <div className="w-1 h-1 bg-[#0A4F43] rounded-full"></div>}
        </button>

        <div className="w-px h-8 bg-gray-200 mx-1"></div>

        <button
          onClick={handlePrint}
          className="flex flex-col items-center gap-1 px-4 py-2 text-gray-600 active:scale-90 transition-transform"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/><path d="M6 14h12v8H6z"/></svg>
          <span className="text-[10px] font-bold uppercase tracking-tighter">Print</span>
        </button>

        <button
          onClick={handleDownloadPDF}
          className="flex flex-col items-center gap-1 px-4 py-2 text-gray-600 active:scale-90 transition-transform"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
          <span className="text-[10px] font-bold uppercase tracking-tighter">PDF</span>
        </button>
      </nav>
    </div>
  );
}

export default App;
