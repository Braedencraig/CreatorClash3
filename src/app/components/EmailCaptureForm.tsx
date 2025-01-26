"use client";

import React, { useState } from "react";
import { appendToSheet } from "@/app/actions/google-sheets.action";
import { AiFillTikTok } from "react-icons/ai";
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";

export const EmailCaptureForm = () => {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    if (!email) {
      setError("Email is required.");
      return;
    }

    if (!consent) {
      setError("You must agree to the terms to subscribe.");
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("email", email);

      const result = await appendToSheet(formData);

      if (result.success) {
        setSuccess(true);
        setEmail("");
        setConsent(false);
        setError("");
      } else {
        setError("Failed to submit. Please try again.");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
      console.error("Submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      style={{ fontFamily: '"geom-graphic", sans-serif' }}
      className="flex flex-col items-center justify-center p-6  text-white rounded-lg shadow-lg max-w-md mx-auto space-y-4 mt-16 md:mt-24 border border-white"
    >
      {success ? (
        <p className="text-white text-lg md:text-xl font-semibold text-center">
          Thank you for subscribing! We&apos;ll keep you updated.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col space-y-4"
        >
          <h2 className="text-lg md:text-xl font-bold text-center">
            Want updates?
          </h2>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-3 text-md md:text-lg rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-white text-black transition duration-300"
          />
          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              id="consent"
              checked={consent}
              onChange={() => setConsent(!consent)}
              className="w-5 h-5 text-white bg-gray-800 border-gray-700 rounded transition duration-300"
              required
            />
            <label htmlFor="consent" className="text-xs">
              I consent to my email being used for purposes related to The
              Creator Clash 3 updates and notifications.
            </label>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`text-md md:text-lg w-full p-3 border border-white bg-black text-white font-bold rounded-lg transition-all duration-300 shadow-lg transform ${
              isSubmitting
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-white hover:text-black hover:-translate-y-1"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Subscribe"}{" "}
          </button>
          {error && <p className="text-red-500 text-center text-sm">{error}</p>}
        </form>
      )}
      <div className="flex justify-center gap-4 mt-6">
        <a
          href="https://www.tiktok.com/@creatorclashofficial?lang=en"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-200 transition-all text-3xl md:text-6xl"
        >
          <AiFillTikTok />
        </a>
        <a
          href="https://www.instagram.com/thecreatorclash/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-200 transition-all text-3xl md:text-6xl"
        >
          <FaSquareInstagram className="p-[1px]" />
        </a>
        <a
          href="https://x.com/TheCreatorClash?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-200 transition-all text-3xl md:text-6xl"
        >
          <FaSquareXTwitter className="p-[1px]" />
        </a>
      </div>
    </div>
  );
};
