import React from "react";

const LetterEditor = ({ data, onChange }) => {
  const handle = (field, value) => onChange({ ...data, [field]: value });

  return (
    <div className="flex flex-col gap-5 p-5">

      {/* Template Select */}
      <div>
        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Template</label>
        <div className="flex gap-3">
          {[1, 2].map((t) => (
            <button
              key={t}
              onClick={() => handle("template", t)}
              className={`flex-1 py-2 rounded-lg text-sm font-bold border-2 transition-all ${
                data.template === t
                  ? "bg-[#0A4F43] text-white border-[#0A4F43]"
                  : "bg-white text-gray-600 border-gray-200 hover:border-[#0A4F43]"
              }`}
            >
              Template {t}
            </button>
          ))}
        </div>
      </div>

      {/* Letter Type */}
      <div>
        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Letter Type</label>
        <select
          value={data.letterType}
          onChange={(e) => handle("letterType", e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#0A4F43]"
        >
          <option>General Letter</option>
          <option>Project Proposal</option>
          <option>Service Agreement</option>
          <option>Quotation</option>
          <option>Invoice</option>
          <option>Offer Letter</option>
          <option>Experience Letter</option>
          <option>NOC Letter</option>
          <option>NDA Letter</option>
          <option>Work Order</option>
          <option>Appointment Letter</option>
          <option>Resignation Acceptance</option>
          <option>Warning Letter</option>
          <option>Recommendation Letter</option>
        </select>
      </div>

      {/* Date & Ref */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Date</label>
          <input
            type="date"
            value={data.date}
            onChange={(e) => handle("date", e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#0A4F43]"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Ref. No.</label>
          <input
            type="text"
            placeholder="JT/2024/001"
            value={data.refNo}
            onChange={(e) => handle("refNo", e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#0A4F43]"
          />
        </div>
      </div>

      {/* To Section */}
      <div className="bg-gray-50 rounded-xl p-4 flex flex-col gap-3">
        <h3 className="text-xs font-bold text-[#0A4F43] uppercase tracking-widest">To</h3>
        <input
          type="text"
          placeholder="Recipient Name"
          value={data.toName}
          onChange={(e) => handle("toName", e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#0A4F43] bg-white"
        />
        <input
          type="text"
          placeholder="Designation / Title"
          value={data.toTitle}
          onChange={(e) => handle("toTitle", e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#0A4F43] bg-white"
        />
        <input
          type="text"
          placeholder="Company Name"
          value={data.toCompany}
          onChange={(e) => handle("toCompany", e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#0A4F43] bg-white"
        />
        <textarea
          rows={2}
          placeholder="Address"
          value={data.toAddress}
          onChange={(e) => handle("toAddress", e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#0A4F43] bg-white resize-none"
        />
      </div>

      {/* Subject */}
      <div>
        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Subject</label>
        <input
          type="text"
          placeholder="e.g. Website Development Proposal"
          value={data.subject}
          onChange={(e) => handle("subject", e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#0A4F43]"
        />
      </div>

      {/* Salutation */}
      <div>
        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Salutation</label>
        <input
          type="text"
          placeholder="Dear Sir / Dear Madam"
          value={data.salutation}
          onChange={(e) => handle("salutation", e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#0A4F43]"
        />
      </div>

      {/* Body */}
      <div>
        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Letter Body</label>
        <textarea
          rows={8}
          placeholder="Type your letter content here..."
          value={data.body}
          onChange={(e) => handle("body", e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#0A4F43] resize-none"
        />
      </div>

      {/* Closing */}
      <div>
        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Closing</label>
        <input
          type="text"
          placeholder="Yours faithfully / Regards"
          value={data.closing}
          onChange={(e) => handle("closing", e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#0A4F43]"
        />
      </div>

      {/* Signatory */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Signatory Name</label>
          <input
            type="text"
            placeholder="Name"
            value={data.signatoryName}
            onChange={(e) => handle("signatoryName", e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#0A4F43]"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Designation</label>
          <input
            type="text"
            placeholder="CEO / Manager"
            value={data.signatoryTitle}
            onChange={(e) => handle("signatoryTitle", e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#0A4F43]"
          />
        </div>
      </div>

    </div>
  );
};

export default LetterEditor;
