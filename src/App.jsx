import React, { useState, useRef, useEffect } from "react";
import TemplateOne from "./components/TemplateOne";
import TemplateTwo from "./components/TemplateTwo";
import LetterEditor from "./components/LetterEditor";

const today = new Date().toISOString().split("T")[0];

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
  salutation: "Dear Sir / Madam",
  body: "",
  closing: "Yours faithfully,",
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
            <img src="/jod.jpeg" alt="logo" className="h-8 w-8 rounded object-contain bg-white p-0.5" />
            <div>
              <p className="font-serif font-bold text-lg leading-none tracking-wide">JOD TECH</p>
              <p className="text-[9px] text-green-200 tracking-widest uppercase">Letterpad</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="hidden sm:flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              Print
            </button>
            <button
              onClick={handleDownloadPDF}
              className="flex items-center gap-2 bg-white text-[#0A4F43] rounded-lg px-3 py-1.5 text-xs font-bold transition-all hover:bg-green-50 shadow"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
              PDF
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE TAB BAR */}
      <div className="no-print sm:hidden flex border-b border-gray-200 bg-white sticky top-0 z-10">
        <button
          onClick={() => setMobileView("edit")}
          className={`flex-1 py-3 text-sm font-bold transition-all ${mobileView === "edit" ? "text-[#0A4F43] border-b-2 border-[#0A4F43]" : "text-gray-400"}`}
        >
          ✏️ Edit
        </button>
        <button
          onClick={() => setMobileView("preview")}
          className={`flex-1 py-3 text-sm font-bold transition-all ${mobileView === "preview" ? "text-[#0A4F43] border-b-2 border-[#0A4F43]" : "text-gray-400"}`}
        >
          👁 Preview
        </button>
      </div>

      {/* MAIN LAYOUT */}
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row gap-0 sm:gap-6 px-0 sm:px-6 py-0 sm:py-6 min-h-[calc(100vh-56px)]">

        {/* LEFT — EDITOR */}
        <div
          className={`
            no-print sm:w-[360px] sm:shrink-0 bg-white sm:rounded-2xl shadow-md sm:h-[calc(100vh-90px)] overflow-y-auto sm:sticky sm:top-6
            ${mobileView === "edit" ? "block" : "hidden sm:block"}
          `}
        >
          <div className="bg-[#0A4F43] px-5 py-3 sm:rounded-t-2xl">
            <h2 className="text-white font-bold text-sm tracking-wide">✏️ Edit Letter</h2>
          </div>
          <LetterEditor data={data} onChange={setData} />

          {/* Mobile Print/PDF Buttons */}
          <div className="sm:hidden flex gap-3 px-5 pb-6">
            <button onClick={handlePrint} className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-700 rounded-lg py-2.5 text-sm font-bold">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              Print
            </button>
            <button onClick={handleDownloadPDF} className="flex-1 flex items-center justify-center gap-2 bg-[#0A4F43] text-white rounded-lg py-2.5 text-sm font-bold">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
              Download PDF
            </button>
          </div>
        </div>

        {/* RIGHT — PREVIEW */}
        <div
          className={`
            flex-1 overflow-auto pb-8
            ${mobileView === "preview" ? "block" : "hidden sm:block"}
          `}
        >
          <div className="bg-white sm:rounded-2xl shadow-md overflow-hidden sm:mb-0 mb-0">
            <div className="no-print bg-gray-800 px-5 py-3 sm:rounded-t-2xl flex items-center justify-between">
              <h2 className="text-white font-bold text-sm tracking-wide">👁 Live Preview</h2>
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
            </div>
            <div
              ref={previewContainerRef}
              className="no-print-bg bg-gray-200 p-4 sm:p-8 overflow-hidden"
            >
              {/* Scaled letter preview — fills the container on any screen size */}
              <div
                style={{
                  width: `${800 * previewScale}px`,
                  height: `${1131 * previewScale}px`,
                  position: "relative",
                  margin: "0 auto",
                }}
              >
                <div
                  ref={printRef}
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
    </div>
  );
}

export default App;
