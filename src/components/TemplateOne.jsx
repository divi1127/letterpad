import React from "react";

const TemplateOne = ({ data = {} }) => {
  const {
    date = "",
    refNo = "",
    toName = "",
    toTitle = "",
    toCompany = "",
    toAddress = "",
    subject = "",
    heading = "",
    salutation = "",
    body = "",
    signatoryName = "",
    signatoryTitle = "",
    letterType = "General Letter",
  } = data;

  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })
    : "";

  const bodyParagraphs = body.split("\n").filter((p) => p.trim() !== "");

  return (
    <div className="w-full max-w-[800px] min-h-[1131px] bg-white shadow-2xl relative overflow-hidden flex flex-col mx-auto font-['Times_New_Roman']">

      {/* TOP SHAPES & HEADER */}
      <div className="relative pt-12 px-12 pb-4">
        <div className="absolute top-10 right-0 flex flex-col items-end w-3/5 z-0 overflow-hidden">
          <div className="h-10 w-[90%] bg-[#0A4F43] -skew-x-[45deg] translate-x-8"></div>
          <div className="h-8 w-[50%] bg-black -skew-x-[45deg] translate-x-6 mt-0"></div>
        </div>
        <div className="relative z-10 flex flex-col pb-2">
          <div className="flex items-center gap-3">
            <img src="/jod.jpeg" alt="logo" className="h-16 object-contain" />
            <div>
              <h1 className="font-serif font-bold text-4xl text-[#0A4F43] tracking-widest uppercase">JOD TECH</h1>
              <p className="text-xs text-gray-500 font-bold tracking-[0.2em] uppercase mt-0.5">IT Solution</p>
            </div>
          </div>
          {/* Company Details */}
          <div className="mt-4 text-[9.5px] text-gray-600 flex flex-wrap gap-x-6 gap-y-1.5 font-medium">
            <div className="flex items-center gap-1.5">
              <svg className="w-3 h-3 text-[#0A4F43] shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>
              <span>78679 08377</span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="w-3 h-3 text-[#0A4F43] shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              <span>jodtech11@gmail.com | https://www.jodtech.in/</span>
            </div>
            <div className="flex items-center gap-1.5 font-bold text-black">
              <span>GSTIN: 33FAVPR3433JIZ5</span>
            </div>
          </div>
          <div className="h-[2px] w-full bg-[#0A4F43] mt-3 rounded-full"></div>
        </div>
      </div>

      {/* BODY */}
      <div className="px-12 py-6 flex-grow flex flex-col z-10">

        {/* Ref & Date */}
        <div className="flex justify-between text-[14px] text-gray-600 mb-5">
          {refNo && <span><span className="font-bold">Ref:</span> {refNo}</span>}
          {formattedDate && <span><span className="font-bold">Date:</span> {formattedDate}</span>}
        </div>


        {/* To */}
        {(toName || toCompany || toAddress) && (
          <div className="mb-5 text-[14px] text-gray-700 leading-relaxed">
            <p className="font-bold text-black text-[16px]">{toName}</p>
            {toTitle && <p className="text-gray-500">{toTitle}</p>}
            {toCompany && <p>{toCompany}</p>}
            {toAddress && <p className="whitespace-pre-line">{toAddress}</p>}
          </div>
        )}

        {/* Subject */}
        {subject && (
          <div className="mb-5">
            <p className="text-[14px] font-bold text-black underline underline-offset-2">
              Sub: {subject}
            </p>
          </div>
        )}

        {/* Heading */}
        {heading && (
          <div className="mb-5">
            <p className="text-[18px] font-bold text-black text-center">
              {heading}
            </p>
          </div>
        )}

        {/* Salutation */}
        {salutation && <p className="text-[14px] text-gray-700 mb-4">{salutation},</p>}

        {/* Body */}
        <div className="text-[14px] text-gray-700 space-y-3 leading-relaxed flex-grow text-justify">
          {bodyParagraphs.length > 0
            ? bodyParagraphs.map((p, i) => <p key={i}>{p}</p>)
            : <p className="text-gray-300 italic">Your letter content will appear here...</p>
          }
        </div>

        {/* Signature */}
        <div className="mt-10 pb-4">
          <div className="flex justify-end">
            <div className="flex flex-col items-center">
              <div className="w-48 border-t-2 border-black"></div>
              <p className="text-[14px] mt-1.5 text-black font-bold">
                {signatoryName || "Authorized Signatory"}
              </p>
              {signatoryTitle && <p className="text-[10px] text-gray-500">{signatoryTitle}</p>}
              <p className="text-[10px] text-[#0A4F43] font-serif font-bold uppercase mt-0.5 tracking-wider">JOD TECH IT SOLUTION</p>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="relative h-36 w-full mt-auto overflow-hidden">
        <div className="absolute bottom-10 left-0 flex flex-col items-start w-1/2 z-0">
          <div className="h-8 w-[340px] bg-black -skew-x-[45deg] -translate-x-6"></div>
          <div className="flex w-96">
            <div className="h-6 w-60 bg-[#0A4F43] -skew-x-[45deg] -translate-x-8 mt-1"></div>
            <div className="h-6 w-16 ml-3 bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,#0A4F43_2px,#0A4F43_4px)] -skew-x-[45deg] -translate-x-8 mt-1"></div>
          </div>
        </div>
        <div className="absolute bottom-6 right-12 text-right flex flex-col gap-2 z-10">
          <div className="flex items-center justify-end gap-3">
            <div className="text-[9px] text-gray-600 font-medium leading-tight max-w-[200px]">
              <p>No 10, Chitharanjan Street, Chinna Chokkikulam, Madurai - 625002</p>
            </div>
            <div className="w-7 h-7 bg-[#0A4F43] flex items-center justify-center text-white shrink-0">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            </div>
          </div>
          <div className="flex items-center justify-end gap-3">
            <div className="text-[9px] text-gray-600 font-medium leading-tight">
              <p>78679 08377 | GSTIN: 33FAVPR3433JIZ5</p>
            </div>
            <div className="w-7 h-7 bg-black flex items-center justify-center text-white shrink-0">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>
            </div>
          </div>
          <div className="flex items-center justify-end gap-3">
            <div className="text-[9px] text-gray-600 font-medium leading-tight">
              <p>jodtech11@gmail.com | https://www.jodtech.in/</p>
            </div>
            <div className="w-7 h-7 bg-[#0A4F43] flex items-center justify-center text-white shrink-0">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default TemplateOne;
