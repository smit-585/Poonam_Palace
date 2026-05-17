"use client";

import { AlertCircle, CheckCircle2 } from "lucide-react";

export default function TermsAndConditions() {
  const terms = [
    "50% advance payment is required at the time of booking.",
    "Remaining payment must be completed before the event.",
    "Advance payment is non-refundable in case of cancellation.",
    "Any damage to property or materials will be chargeable.",
    "Extra charges will apply if the event exceeds the allotted time.",
    "Final charges may vary based on event requirements and availability."
  ];

  return (
    <section className="pt-16 pb-8 md:pt-20 md:pb-10 px-4 bg-white relative">
      <div className="max-w-3xl mx-auto">
        <div className="bg-[#FFF8EC] rounded-2xl p-6 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-[#C9A227]/20 relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A227]/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10">
            <div className="mb-8 pb-5 border-b border-[#C9A227]/20">
              <div className="flex items-center gap-3 mb-2">
                <AlertCircle className="w-7 h-7 text-[#7A0F24]" />
                <h2 className="text-2xl md:text-3xl font-bold text-[#7A0F24]">Terms & Conditions</h2>
              </div>
              <p className="text-gray-600 font-medium ml-10 text-sm md:text-base">
                Please review the basic booking terms before confirming your event.
              </p>
            </div>
            
            <ul className="space-y-4">
              {terms.map((term, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <CheckCircle2 className="w-5 h-5 text-[#C9A227] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 font-medium leading-relaxed">{term}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
