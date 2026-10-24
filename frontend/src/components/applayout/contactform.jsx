import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaUser,
  FaBuilding,
  FaEnvelope,
  FaCommentDots,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";

// Form submissions are emailed to this address via FormSubmit
const FORM_ENDPOINT = "https://formsubmit.co/ajax/jhasmriti45@gmail.com";

const inputClass =
  "w-full rounded-xl border border-[#E5E7EB] bg-white py-3 pl-11 pr-4 text-sm text-[#111827] outline-none transition placeholder:text-[#9CA3AF] focus:border-[#10B981] focus:ring-4 focus:ring-[#10B981]/10";

function Field({ label, icon: Icon, required, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-[#374151]">
        {label}
        {required && <span className="text-[#10B981]"> *</span>}
      </span>
      <span className="relative block">
        <Icon
          className="pointer-events-none absolute left-4 top-3.5 text-[#9CA3AF]"
          size={14}
        />
        {children}
      </span>
    </label>
  );
}

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = Object.fromEntries(new FormData(form));

    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...data,
          _subject: `New Website Enquiry from ${data.name}`,
          _template: "table",
          _captcha: "false",
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <div className="mb-6">
        <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl font-bold text-[#111827]">
          Send Us a Message
        </h3>
        <p className="mt-1.5 text-sm text-[#6B7280]">
          Fill in the details below and our team will get back to you within 24
          hours.
        </p>
      </div>

      {status === "success" ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-[#D1FAE5] bg-[#ECFDF5] px-6 py-12 text-center">
          <FaCheckCircle className="text-[#10B981]" size={44} />
          <h4 className="mt-4 font-['Playfair_Display'] text-2xl font-bold text-[#111827]">
            Thank You!
          </h4>
          <p className="mt-2 max-w-sm text-sm text-[#4B5563]">
            Your message has been sent successfully. Our team will contact you
            shortly.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-6 text-sm font-semibold text-[#047857] hover:text-[#10B981] transition"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Honeypot field to block spam bots */}
          <input
            type="text"
            name="_honey"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" icon={FaUser} required>
              <input
                type="text"
                name="name"
                required
                placeholder="Your full name"
                className={inputClass}
              />
            </Field>

            <Field label="Company Name" icon={FaBuilding}>
              <input
                type="text"
                name="company"
                placeholder="Hospital / Organization"
                className={inputClass}
              />
            </Field>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Email" icon={FaEnvelope} required>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className={inputClass}
              />
            </Field>

            <Field label="Phone Number" icon={FaPhoneAlt}>
              <input
                type="tel"
                name="phone"
                placeholder="+91 XXXXX XXXXX"
                className={inputClass}
              />
            </Field>
          </div>

          <Field label="Message" icon={FaCommentDots} required>
            <textarea
              rows="4"
              name="message"
              required
              placeholder="Type your message here..."
              className={`${inputClass} resize-none`}
            ></textarea>
          </Field>

          {status === "error" && (
            <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
              Something went wrong. Please try again or call us at +91
              7701905739.
            </p>
          )}

          <motion.button
            type="submit"
            disabled={status === "sending"}
            whileHover={{ scale: status === "sending" ? 1 : 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#10B981] py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-[#047857] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "sending" ? (
              "Sending..."
            ) : (
              <>
                Send Message
                <FaPaperPlane size={14} />
              </>
            )}
          </motion.button>
        </form>
      )}
    </>
  );
}
