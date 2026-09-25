"use client";

import { useState } from "react";

export type Testimonial = {
  id: string;
  name: string;
  relation: string;
  highlight: string;
  letter: string;
  badge?: string;
};

const letters: Testimonial[] = [
  {
    id: "marie",
    name: "Marie C.",
    relation: "Client Family · 2-Year Litigation",
    badge: "Extended Case Dedication",
    highlight:
      "We were able to get in touch with you at anytime, anywhere... I don’t think that we could have found a greater firm to handle this case.",
    letter:
      "Dear Steve: More than two years have gone by since you accepted Joe’s case. During this time, it has been my absolute pleasure to get to know you. The endless hard work and professionalism that you shared working on this case has been impeccable. My admiration towards you grew every day, as we were able to get in touch with you at anytime, anywhere. Your good friend Taylor referred your firm to us. Well, thank you Taylor, I don’t think that we could have found a greater firm to handle this case.",
  },
  {
    id: "jill",
    name: "Jill",
    relation: "Personal Injury Client",
    badge: "Direct Contact & Care",
    highlight:
      "You made a point to check on me, even when negotiations were at a stand-still. You made the process bearable and mostly stress free.",
    letter:
      "Dear Steve, Just wanted to take a moment and thank you for doing a fantastic job on my case. I hope you know you are not just an excellent lawyer, but a caring, compassionate person. You know this experience was a first for me, but when talking with others that have gone through things similar, I realize that more and more, I never felt like you didn’t have time to listen to me. You made a point to check on me, even when negotiations were at a stand-still. You made the process bearable and mostly stress free.",
  },
  {
    id: "janice",
    name: "Janice",
    relation: "Mother of Injured Client",
    badge: "Life-Changing Advocacy",
    highlight:
      "Thank you seems inadequate for the service you rendered. What you have done for Kathryn will never be forgotten. You have helped to get her life back.",
    letter:
      "Dear Steve: Thank you seems inadequate for the service you rendered. Thank you for all your hard work. What you have done for Kathryn will never be forgotten. You have helped to get her life back. Gratefully, Janice.",
  },
  {
    id: "patty",
    name: "Patty",
    relation: "Personal Injury Client",
    badge: "Genuine Empathy",
    highlight:
      "You truly stand-out as the extraordinary person in my life and I am still amazed at my good fortune to have found you.",
    letter:
      "Dear Steve: I think of you so often and although I am so happy not to be dealing with my lawsuit, I will always never forget the kindness you displayed to me at all throughout. You truly stand-out as the extraordinary person in my life and I am still amazed at my good fortune to have found you. Yours truly, Patty.",
  },
  {
    id: "harris",
    name: "The Harris Family",
    relation: "Client & Family",
    badge: "Family Support",
    highlight:
      "Thank you for your caring and support. You have been so good to me, my family, and granddaughters.",
    letter:
      "Steven, I want to thank you for everything you have done. Thank you for your caring and support. You have been so good to me, my family, and granddaughters. May God bless you and that you may prosper and be in good health. Thank you, The Harris Family.",
  },
  {
    id: "lisa",
    name: "Lisa Morgan Phipps",
    relation: "Personal Injury Client",
    badge: "Professional Excellence",
    highlight:
      "I truly appreciate you and the excellent representation you have provided. Thank you for your professionalism, and the genuine care you have shown.",
    letter:
      "Hi Steve, I want to take a moment to sincerely express my heartfelt gratitude and appreciation for you and all that you have done on my behalf. I truly appreciate you and the excellent representation you have provided. Thank you for your professionalism, and the genuine care you have shown throughout this process.",
  },
  {
    id: "kat",
    name: "Kat",
    relation: "Personal Injury Client · 2-Year Case",
    badge: "Relentless Persistence",
    highlight:
      "Thank you so much for all the hard work you did over these last 2 years. I know at times it was definitely a struggle. You were a Rockstar.",
    letter:
      "Thank you so much for all the hard work you did over these last 2 years. I know at times it was definitely a struggle. You were a Rockstar. Thank you again, Kat.",
  },
  {
    id: "alice",
    name: "Alice",
    relation: "Returning Client & Referral",
    badge: "Trusted Counsel",
    highlight:
      "Once again, you have saved me. I will highly recommend you and your special talents to my friends and family.",
    letter:
      "Dear Steve: Once again, you have saved me. I will highly recommend you and your special talents to my friends and family. God bless you Steve. Sincerely, Alice.",
  },
];

export default function Testimonials() {
  const [showAll, setShowAll] = useState(false);
  const displayedLetters = showAll ? letters : letters.slice(0, 3);

  return (
    <div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {displayedLetters.map((t) => (
          <article
            key={t.id}
            className="flex flex-col justify-between rounded-2xl border border-white/15 bg-white p-7 text-ink shadow-lift transition-all duration-300 hover:-translate-y-1 hover:border-amber hover:shadow-2xl"
          >
            <div>
              {/* Badge & Stamp Header */}
              <div className="flex items-center justify-between border-b border-line/70 pb-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-sapphire/10 px-2.5 py-0.5 text-xs font-semibold text-sapphire">
                  <svg
                    className="h-3.5 w-3.5 text-amber-dark"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Client Thank-You Letter
                </span>
                {t.badge && (
                  <span className="text-[11px] font-medium text-amber-dark">
                    {t.badge}
                  </span>
                )}
              </div>

              {/* Bold Excerpt */}
              <blockquote className="mt-4 font-serif text-lg font-medium leading-snug text-ink">
                &ldquo;{t.highlight}&rdquo;
              </blockquote>

              {/* Full letter text */}
              <p className="mt-4 text-xs leading-relaxed text-ink-muted">
                {t.letter}
              </p>
            </div>

            {/* Client Signature / Figcaption */}
            <footer className="mt-6 border-t border-line/70 pt-4 flex items-center justify-between">
              <div>
                <span className="block font-serif font-semibold text-base text-ink">
                  {t.name}
                </span>
                <span className="block text-xs text-ink-muted">
                  {t.relation}
                </span>
              </div>
              <span className="font-serif text-xs italic text-amber-dark">
                Verified Note
              </span>
            </footer>
          </article>
        ))}
      </div>

      {/* Toggle Button to view all 8 client letters */}
      <div className="mt-10 flex flex-col items-center justify-center gap-3 text-center">
        <button
          type="button"
          onClick={() => setShowAll((prev) => !prev)}
          className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-white hover:text-sapphire-dark focus:outline-none focus:ring-2 focus:ring-amber focus:ring-offset-2 focus:ring-offset-sapphire-dark"
        >
          {showAll ? (
            <>
              Show Fewer Letters
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
              </svg>
            </>
          ) : (
            <>
              Read All {letters.length} Client Thank-You Letters
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </>
          )}
        </button>
        <p className="text-xs text-white/60">
          Transcribed directly from original handwritten and typed thank-you notes sent to Steven Kuveikis.
        </p>
      </div>
    </div>
  );
}
