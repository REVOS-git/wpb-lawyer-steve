// Educational starter posts. Body is a simple block array rendered by
// app/blog/[slug]/page.tsx. Add posts by appending to this array.

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; text: string };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO
  dateLabel: string;
  readTime: string;
  body: Block[];
};

export const posts: Post[] = [
  {
    slug: "what-to-do-after-a-car-accident-in-florida",
    title: "What to Do After a Car Accident in Florida: A Step-by-Step Guide",
    excerpt:
      "The minutes and days after a crash matter more than most people realize. Here's a calm, practical checklist for protecting your health and your claim.",
    category: "Car Accidents",
    date: "2026-06-18",
    dateLabel: "June 18, 2026",
    readTime: "6 min read",
    body: [
      { type: "p", text: "A car accident is disorienting. Your heart is racing, you may be hurt, and you're suddenly expected to make good decisions. The steps below are worth reading now — before you need them — so they're familiar if the day ever comes." },
      { type: "h2", text: "1. Get to safety and check for injuries" },
      { type: "p", text: "If you can, move vehicles out of the flow of traffic and turn on your hazard lights. Check yourself and your passengers. If anyone is hurt, call 911 immediately and don't move a seriously injured person unless there's an immediate danger like fire." },
      { type: "h2", text: "2. Call the police — always" },
      { type: "p", text: "Even for what looks like a minor fender-bender, a police report creates an objective record of what happened. That record becomes important later if the other driver changes their story or the insurance company disputes fault. Ask the officer how to get the crash report number before you leave." },
      { type: "h2", text: "3. Document everything you safely can" },
      { type: "ul", items: [
        "Photos of all vehicles, damage, and their positions",
        "The other driver's license, insurance card, and license plate",
        "The scene: traffic signals, skid marks, road conditions, and weather",
        "Names and phone numbers of any witnesses",
        "Your own visible injuries",
      ] },
      { type: "h2", text: "4. See a doctor within 14 days — even if you feel fine" },
      { type: "callout", text: "Florida's no-fault (PIP) law requires you to seek medical care within 14 days of the crash to preserve your Personal Injury Protection benefits. Miss that window and you can lose up to $10,000 in coverage." },
      { type: "p", text: "Adrenaline masks pain. Injuries like whiplash, concussions, and disc problems often don't show their full severity until days later. A prompt medical visit protects both your health and the link between the crash and your injuries." },
      { type: "h2", text: "5. Be careful what you say — especially to the other insurer" },
      { type: "p", text: "You are not required to give a recorded statement to the other driver's insurance company, and you shouldn't before talking to a lawyer. Even an innocent 'I'm okay' or 'I didn't see them' can be twisted to reduce what you're owed. Stick to the facts with the police, and let your attorney handle the insurers." },
      { type: "h2", text: "6. Don't accept the first offer" },
      { type: "p", text: "Insurers often reach out quickly with a settlement that seems generous when you're stressed and facing bills. It's almost always less than your claim is worth — and once you sign a release, you can't reopen it, even if you need surgery months later." },
      { type: "p", text: "If you've been in a crash in Jupiter or anywhere in Palm Beach County, I'm happy to review what happened at no cost. Sometimes a five-minute call is all it takes to know where you stand." },
    ],
  },
  {
    slug: "florida-two-year-personal-injury-deadline",
    title: "Florida's 2-Year Personal Injury Deadline: Don't Let the Clock Run Out",
    excerpt:
      "Florida cut its injury filing deadline in half in 2023. If you were hurt by someone else's negligence, here's what the two-year statute of limitations means for you.",
    category: "Florida Law",
    date: "2026-05-30",
    dateLabel: "May 30, 2026",
    readTime: "5 min read",
    body: [
      { type: "p", text: "One of the most important — and least understood — rules in a personal injury case is the statute of limitations: the legal deadline to file a lawsuit. In Florida, that deadline changed dramatically, and a lot of people still aren't aware of it." },
      { type: "h2", text: "The deadline is now two years, not four" },
      { type: "p", text: "In March 2023, Florida enacted a sweeping tort-reform law that shortened the statute of limitations for most negligence-based personal injury claims from four years to two years from the date of the injury. For accidents that happened on or after that change, you generally have just two years to file suit." },
      { type: "callout", text: "Miss the deadline and the court will almost certainly dismiss your case — no matter how badly you were hurt or how clearly the other party was at fault. It is one of the few things that can end an otherwise strong claim outright." },
      { type: "h2", text: "Why waiting hurts your case long before the deadline" },
      { type: "p", text: "Two years can feel like plenty of time, but evidence doesn't wait. The practical clock is much shorter than the legal one:" },
      { type: "ul", items: [
        "Surveillance and dash-cam footage is often erased within days or weeks",
        "Witnesses move, forget details, or become hard to reach",
        "Skid marks, damaged property, and road conditions are cleaned up quickly",
        "Medical treatment gaps give insurers an argument that you weren't really hurt",
      ] },
      { type: "h2", text: "Some deadlines are even shorter" },
      { type: "p", text: "Certain claims have their own, tighter rules. Cases involving a government entity (a city vehicle, a public property hazard) require formal written notice — often within a strict window and long before the two years is up. Medical malpractice and other specialized claims follow their own timelines." },
      { type: "h2", text: "What this means for you" },
      { type: "p", text: "If you've been injured, the single most important thing you can do is not wait to at least understand your deadline. You don't have to file suit tomorrow — but you should know how much time you actually have, and you should preserve evidence before it disappears." },
      { type: "p", text: "A free consultation costs you nothing and can tell you exactly where your case stands and when your clock runs out. If you're unsure, call — it's always better to ask early." },
    ],
  },
  {
    slug: "florida-comparative-negligence-explained",
    title: "How Florida's Comparative Negligence Rule Affects Your Payout",
    excerpt:
      "\"But wasn't part of it my fault?\" It's the question I hear most. Here's how Florida's modified comparative negligence law really works — and why the fault percentage is worth fighting over.",
    category: "Florida Law",
    date: "2026-05-12",
    dateLabel: "May 12, 2026",
    readTime: "5 min read",
    body: [
      { type: "p", text: "Many people assume that if they were even a little bit responsible for an accident, they can't recover anything. In Florida, that's not quite true — but the rules did get stricter, and understanding them can be the difference between a fair recovery and nothing at all." },
      { type: "h2", text: "What 'comparative negligence' means" },
      { type: "p", text: "Comparative negligence is the legal idea that fault can be shared. After an accident, fault is assigned as a percentage among everyone involved. Your compensation is then reduced by your share of the blame." },
      { type: "callout", text: "Example: If your damages total $100,000 but you're found 20% at fault, you recover $80,000 — your award reduced by your 20% share." },
      { type: "h2", text: "Florida's 51% bar" },
      { type: "p", text: "Before 2023, Florida used a 'pure' comparative negligence system, where you could recover something even if you were 90% at fault. That changed. Under the current 'modified' comparative negligence rule, there's now a hard cutoff:" },
      { type: "ul", items: [
        "If you are found 50% or less at fault, you can recover — reduced by your percentage",
        "If you are found more than 50% at fault, you recover nothing",
      ] },
      { type: "h2", text: "Why insurers love to inflate your fault" },
      { type: "p", text: "Because a higher fault percentage directly lowers what the insurance company has to pay — and can wipe out your claim entirely if they push you past 50% — insurers have every incentive to pin as much blame on you as possible. This is exactly why the fault determination is so heavily contested." },
      { type: "p", text: "Common tactics include arguing you were speeding, distracted, not paying attention, or 'should have seen it coming.' Often these claims are exaggerated or simply unsupported by the evidence." },
      { type: "h2", text: "How the right evidence fights back" },
      { type: "p", text: "Fault isn't just the insurer's opinion. Police reports, witness statements, traffic-camera and surveillance footage, vehicle data, and accident reconstruction can all tell the real story. A big part of my job is building that record so an unfair fault percentage doesn't quietly shrink your recovery." },
      { type: "p", text: "If someone is telling you the accident was partly your fault, don't take that at face value — and don't assume it means you have no case. Let's look at the facts together." },
    ],
  },
  {
    slug: "do-i-have-a-personal-injury-case-checklist",
    title: "Do I Have a Case? A Plain-English Personal Injury Checklist",
    excerpt:
      "Not every accident is a lawsuit, and that's okay. Here's a straightforward way to think about whether you may have a valid personal injury claim in Florida.",
    category: "Getting Started",
    date: "2026-04-24",
    dateLabel: "April 24, 2026",
    readTime: "6 min read",
    body: [
      { type: "p", text: "People often hesitate to call a lawyer because they're not sure they even have a case. That's completely understandable — and honestly, part of my job is to give you a straight answer, even when the answer is 'you probably don't need me.' Here's the framework I use." },
      { type: "h2", text: "The four building blocks of a claim" },
      { type: "p", text: "Most personal injury cases come down to four questions. The stronger your answers, the stronger your case." },
      { type: "ol", items: [
        "Duty: Did someone owe you a duty of care? (Drivers owe it to other drivers; businesses owe it to customers.)",
        "Breach: Did they fail that duty — by careless, reckless, or negligent behavior?",
        "Causation: Did that failure actually cause your injury?",
        "Damages: Did you suffer real harm — medical bills, lost income, pain, or lasting injury?",
      ] },
      { type: "callout", text: "If you can answer 'yes' to all four, there's a good chance you have a claim worth discussing. Missing one — for example, real carelessness but no actual injury — usually means there's no case, and I'll tell you that honestly." },
      { type: "h2", text: "Signs your case may be worth pursuing" },
      { type: "ul", items: [
        "You needed medical treatment, or your injuries are ongoing",
        "Someone else was clearly careless or broke a rule of the road",
        "You've missed work or lost income because of the injury",
        "An insurance company is pressuring you to settle quickly",
        "The at-fault party is disputing what happened",
      ] },
      { type: "h2", text: "Things that don't automatically end your case" },
      { type: "p", text: "People count themselves out for reasons that often don't hold up:" },
      { type: "ul", items: [
        "\"It was partly my fault.\" — Florida lets you recover if you're 50% or less at fault.",
        "\"I didn't go to the ER right away.\" — What matters is getting proper treatment; earlier is better, but a gap isn't always fatal.",
        "\"The other driver had little insurance.\" — Your own uninsured/underinsured coverage or other policies may apply.",
        "\"It's been a while.\" — As long as you're within the two-year deadline, you may still have time.",
      ] },
      { type: "h2", text: "The easiest way to know for sure" },
      { type: "p", text: "This checklist is a guide, not a verdict. Every case turns on its specific facts, and a short conversation can usually settle the question. My consultations are free, and if you don't have a case, I'll say so — no pressure, no sales pitch." },
      { type: "p", text: "If you're on the fence, that's exactly the time to call. It costs nothing to find out where you stand." },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
