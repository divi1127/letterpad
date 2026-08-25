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
    headingSize = "18",
    salutation = "",
    body = "",
    bodySize = "14",
    signatoryName = "",
    signatoryTitle = "",
    letterType = "General Letter",
  } = data;

  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })
    : "";

  const bodyParagraphs = body.split("\n").filter((p) => p.trim() !== "");

  const renderBody = (text) => {
    const html = text
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/_(.+?)_/g, "<em>$1</em>");
    return <span dangerouslySetInnerHTML={{ __html: html }} />;
  };

  return (
    <div className="w-full max-w-[800px] min-h-[1131px] bg-white shadow-2xl relative overflow-hidden flex flex-col mx-auto font-['Times_New_Roman']">

      {/* HEADER */}
      <div className="w-full pt-12 flex items-center">
        <div className="h-12 w-28 bg-black"></div>
        <div className="flex items-center gap-4 px-6">
          <img src="/jod.jpeg" alt="logo" className="h-16 object-contain" />
          <div>
            <h1 className="font-serif font-bold text-3xl text-[#0A4F43] tracking-widest uppercase leading-tight">JOD TECH</h1>
            <p className="text-[13px] text-gray-500 font-bold tracking-[0.2em] uppercase">IT Solution</p>
          </div>
        </div>
        <div className="h-12 flex-grow bg-[#0A4F43]"></div>
      </div>

      {/* Company Details Top */}
      <div className="px-12 mt-4">
        <div className="text-[13px] text-gray-600 flex items-center justify-between font-medium">
          <div className="flex items-center gap-1.5">
            <svg className="w-3 h-3 text-[#0A4F43] shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>
            <span>78717 70070</span> | <span>96298 72195</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-3 h-3 text-[#0A4F43] shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            <span>support@jodtech.in | www.jodtech.in</span>
          </div>
          <div className="flex items-center gap-1.5 font-bold text-black">
            <span>GSTIN: 33FAVPR3433JIZ5</span>
          </div>
        </div>
        <div className="h-[2px] w-full bg-[#0A4F43] mt-3 rounded-full"></div>
      </div>

      {/* Watermark Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <img
          src="/jod.jpeg"
          alt=""
          className="w-150 h-150 object-contain opacity-[0.08]"
        />
      </div>

      {/* BODY */}
      <div className="px-12 pt-[22px] pb-6 flex-grow flex flex-col z-10">

        {/* Date */}
        {formattedDate && (
          <div className="text-right text-[14px] text-gray-600 mb-5">
            <span className="font-bold">Date:</span> {formattedDate}
          </div>
        )}

        {/* To */}
        {(toName || toCompany || toAddress) && (
          <div className="mb-5 text-[14px] text-black leading-relaxed">
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

        {/* Salutation */}
        {salutation && <p className="text-[14px] text-black mb-4">{salutation},</p>}

        <div className="flex-grow flex flex-col justify-center">
          {/* Heading */}
          {heading && (
            <div className="mb-5">
              <p className="font-bold text-black text-center" style={{ fontSize: `${headingSize}px` }}>
                {heading}
              </p>
            </div>
          )}

          {/* Body */}
          <div className="text-black space-y-3 leading-relaxed text-justify" style={{ fontSize: `${bodySize}px` }}>
            {bodyParagraphs.length > 0
              ? bodyParagraphs.map((p, i) => <p key={i}>{renderBody(p)}</p>)
              : <p className="text-gray-300 italic">Your letter content will appear here...</p>
            }
          </div>
        </div>

        {/* Signature */}
        <div className="mt-10 pb-4">
          <div className="flex justify-between">
            {letterType === "Offer Letter" && (
              <div className="flex flex-col items-center">
                <div className="w-48 border-t-2 border-black"></div>
                <p className="text-[14px] mt-1.5 text-black font-bold">
                  Acceptance Signature
                </p>
                <p className="text-[10px] text-gray-500">Candidate Name</p>
              </div>
            )}
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
            <div className="text-[12px] text-gray-600 font-medium leading-tight max-w-[200px]">
              <p>No 10, Chitharanjan Street, Chinna Chokkikulam, Madurai - 625002</p>
            </div>
            <div className="w-7 h-7 bg-[#0A4F43] flex items-center justify-center text-white shrink-0">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            </div>
          </div>
          <div className="flex items-center justify-end gap-3">
            <div className="text-[12px] text-gray-600 font-medium leading-tight">
              <span>78717 70070</span> | <span>96298 72195</span>
            </div>
            <div className="w-7 h-7 bg-black flex items-center justify-center text-white shrink-0">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>
            </div>
          </div>
          <div className="flex items-center justify-end gap-3">
            <div className="text-[12px] text-gray-600 font-medium leading-tight">
              <p>support@jodtech.in | www.jodtech.in</p>
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
