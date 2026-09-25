import Image from "next/image";

// Subtle Jupiter Inlet Lighthouse backdrop for interior page heroes.
// The photo shows through (it's not dimmed to nothing); a sapphire *gradient*
// — darker on the left where the text sits, lighter on the right — keeps the
// white copy legible while letting the lighthouse read. Parent must be
// `relative overflow-hidden` (the section keeps `bg-sapphire` as a fallback).
export default function PageHeroBg() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Mirrored so the lighthouse (left in the source photo) lands on the RIGHT
          of the hero — away from the text, under the lighter part of the overlay. */}
      <Image
        src="/jupiter-lighthouse.jpg"
        alt=""
        fill
        quality={95}
        sizes="100vw"
        className="scale-x-[-1] object-cover object-[center_38%]"
      />
      {/* Horizontal: darkest at the left (text) → lets the lighthouse show at right */}
      <div className="absolute inset-0 bg-gradient-to-r from-sapphire-dark/94 from-30% via-sapphire-dark/70 to-sapphire/20" />
      {/* Vertical: gentle darkening top & bottom for depth and edge blending */}
      <div className="absolute inset-0 bg-gradient-to-b from-sapphire-dark/30 via-transparent to-sapphire-dark/55" />
    </div>
  );
}
