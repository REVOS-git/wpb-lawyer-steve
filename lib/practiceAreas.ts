// Data-driven practice areas. One template (components/PracticeAreaLayout.tsx)
// renders every page below, so content lives here — not in copy-pasted pages.

export type Faq = { q: string; a: string };

export type PracticeArea = {
  slug: string;
  navLabel: string; // used in header dropdown
  title: string; // H1
  shortTitle: string; // cards / breadcrumbs
  icon: IconKey;
  metaTitle: string;
  metaDescription: string;
  heroSummary: string; // 1–2 sentence lede under the H1
  cardBlurb: string; // grid card description
  intro: string[]; // opening paragraphs
  localAngle: string; // Jupiter / PBC specific paragraph
  whatToDo: { title: string; body: string }[];
  commonInjuries: string[];
  floridaLaw: { title: string; body: string }[];
  howIHelp: string[];
  faqs: Faq[];
  ctaHeading?: string; // overrides the default "Hurt in {area}?" closing CTA heading
};

export type IconKey =
  | "car"
  | "truck"
  | "motorcycle"
  | "slip"
  | "security"
  | "wrongful-death"
  | "rideshare"
  | "delivery";

export const practiceAreas: PracticeArea[] = [
  {
    slug: "car-accidents",
    navLabel: "Car Accidents",
    shortTitle: "Car Accidents",
    icon: "car",
    title: "Jupiter Car Accident Attorney",
    metaTitle: "Jupiter Car Accident Lawyer | Kuveikis Injury Attorney",
    metaDescription:
      "Injured in a car accident in Jupiter or Palm Beach County? Steven Kuveikis handles your claim personally — free consultation, no fee unless you win.",
    heroSummary:
      "A crash can upend your health, your finances, and your peace of mind overnight. I handle the insurance company so you can focus on getting better.",
    cardBlurb:
      "Rear-end, intersection, and highway collisions on I-95, the Turnpike, and local roads.",
    intro: [
      "Car accidents are the most common reason people call my office — and no two are alike. A low-speed fender-bender can still leave you with a herniated disc that flares up months later, while a high-speed collision on I-95 can change a family's life in an instant.",
      "What they have in common is an insurance company that starts building its defense within hours. An adjuster may call you the same day, sound friendly, and ask for a 'quick recorded statement.' That call is not for your benefit. Before you give any statement or accept any check, it is worth understanding what your claim is actually worth.",
    ],
    localAngle:
      "I grew up here and drive these roads every day — Indiantown Road at rush hour, the I-95 and Florida's Turnpike interchanges, Military Trail, US-1 through Jupiter and Palm Beach Gardens, and the always-busy stretches near the Gardens Mall and Abacoa. Knowing where and how local crashes happen helps me reconstruct what really occurred and hold the right party accountable.",
    whatToDo: [
      { title: "Call 911 and report the crash", body: "A police report creates an official record. Ask how to obtain a copy of the crash report number before you leave." },
      { title: "Get checked by a doctor promptly", body: "Adrenaline hides injuries. Florida's PIP law also requires you to seek care within 14 days to preserve certain benefits." },
      { title: "Photograph everything", body: "Vehicle damage, the scene, skid marks, traffic signals, and your visible injuries — from several angles." },
      { title: "Exchange information, not opinions", body: "Get names, insurance, and plate numbers. Do not apologize or admit fault at the scene." },
      { title: "Don't give a recorded statement", body: "You are not required to speak to the other driver's insurer. Talk to a lawyer first." },
    ],
    commonInjuries: [
      "Whiplash and soft-tissue neck/back injuries",
      "Herniated and bulging discs",
      "Concussions and traumatic brain injury",
      "Broken bones and fractures",
      "Shoulder and knee tears",
      "Lacerations and scarring",
    ],
    floridaLaw: [
      { title: "Florida is a no-fault (PIP) state", body: "Your own Personal Injury Protection coverage pays the first $10,000 of medical bills and lost wages regardless of fault — but only if you seek treatment within 14 days. Serious injuries can move your claim outside the no-fault system and against the at-fault driver directly." },
      { title: "You have two years to file", body: "Florida shortened the deadline for most car-accident injury lawsuits to two years from the date of the crash. Miss it and your claim is usually gone forever." },
      { title: "Modified comparative negligence", body: "Under Florida's 2023 law, if you are found more than 50% at fault you recover nothing. If you are 50% or less at fault, your recovery is reduced by your share. How fault gets assigned matters enormously — and it is often disputed." },
    ],
    howIHelp: [
      "Deal directly with the adjusters so you never have to.",
      "Gather the crash report, camera footage, and witness statements before they disappear.",
      "Work with your doctors to document the full extent of your injuries.",
      "Value your claim honestly — including future care and lost earning capacity — and fight for it.",
    ],
    faqs: [
      { q: "The insurance company already offered me money. Should I take it?", a: "Almost never on the first offer. Early offers are designed to close your claim before the full cost of your injuries is known. Once you sign a release, you cannot ask for more — even if you need surgery later. Let me review it first; the consultation is free." },
      { q: "What if the accident was partly my fault?", a: "You may still recover. Florida uses modified comparative negligence — as long as you are 50% or less at fault, you can recover a reduced amount. Insurers routinely exaggerate your share of the blame, which is exactly what I push back on." },
      { q: "How much does it cost to hire you?", a: "Nothing up front. I work on a contingency fee, meaning I only get paid if I recover money for you. The first consultation is always free." },
      { q: "Do I really need a lawyer for a minor accident?", a: "If you were not hurt, maybe not. But 'minor' crashes cause real injuries all the time, and a five-minute call costs you nothing. If there's no case, I'll tell you." },
    ],
  },
  {
    slug: "truck-accidents",
    navLabel: "Truck Accidents",
    shortTitle: "Truck Accidents",
    icon: "truck",
    title: "Jupiter Truck Accident Attorney",
    metaTitle: "Jupiter Truck Accident Lawyer | Kuveikis Injury Attorney",
    metaDescription:
      "18-wheeler and commercial truck crashes cause devastating injuries. Steven Kuveikis investigates trucking cases personally across Palm Beach County. Free consultation.",
    heroSummary:
      "A fully loaded semi can weigh 20 to 30 times more than your car. When they collide, the injuries — and the stakes — are on a different scale entirely.",
    cardBlurb:
      "18-wheeler, box-truck, and commercial-vehicle collisions on I-95 and the Turnpike.",
    intro: [
      "Truck accident cases are not just bigger car accident cases. They involve federal safety regulations, professional drivers, trucking companies, and their insurers — all of whom move quickly to protect themselves after a serious crash.",
      "The trucking company may send an investigator to the scene the same day. Critical evidence — the driver's logs, the truck's electronic data, maintenance records — can be lawfully overwritten or lost within weeks. Acting fast to preserve it is often the difference between a strong case and a stalled one.",
    ],
    localAngle:
      "South Florida's freight corridors — I-95, Florida's Turnpike, and Beeline Highway — carry heavy commercial traffic through Palm Beach County day and night. I know these routes and the recurring hazards on them, from merging chaos at interchanges to fatigued long-haul drivers pushing to make a delivery window.",
    whatToDo: [
      { title: "Call 911 immediately", body: "Serious truck crashes require police and often paramedics. The official report is a cornerstone of your case." },
      { title: "Do not let anyone move evidence", body: "The truck, its cargo, and debris tell the story. Photograph the scene widely if you safely can." },
      { title: "Get names of the driver and company", body: "Note the trucking company name, DOT number on the cab, trailer, and any placards." },
      { title: "Seek medical care right away", body: "Truck-crash injuries are frequently severe and can worsen. Get evaluated even if you feel 'okay.'" },
      { title: "Call a lawyer before the trucking company's insurer calls you", body: "Preserving the truck's black-box data may require a legal preservation letter within days." },
    ],
    commonInjuries: [
      "Traumatic brain and spinal cord injuries",
      "Multiple and complex fractures",
      "Internal organ damage and internal bleeding",
      "Amputations and crush injuries",
      "Severe burns",
      "Catastrophic, life-changing disability",
    ],
    floridaLaw: [
      { title: "Multiple parties may be responsible", body: "Liability can extend beyond the driver to the trucking company, the cargo loader, a maintenance contractor, or a parts manufacturer. Identifying every responsible party often means more available insurance coverage for your recovery." },
      { title: "Federal trucking regulations apply", body: "Interstate carriers must follow FMCSA rules on driver hours, rest, inspections, and maintenance. A violation of these rules can be powerful evidence of negligence." },
      { title: "Two-year deadline — but evidence expires sooner", body: "You have two years to file suit, but the physical and electronic evidence that proves fault can vanish in weeks. Early investigation is essential." },
    ],
    howIHelp: [
      "Move immediately to preserve the truck's data, driver logs, and maintenance records.",
      "Identify every responsible party and every applicable insurance policy.",
      "Bring in accident-reconstruction and medical experts when a case calls for it.",
      "Handle the pressure from well-funded trucking insurers so it never falls on you.",
    ],
    faqs: [
      { q: "Why are truck accident cases more complicated?", a: "More parties, more insurance, more regulations, and far more at stake. Trucking companies and their insurers have teams that respond within hours. Your case needs someone doing the same on your side." },
      { q: "How soon should I call after a truck crash?", a: "As soon as you're able. Some evidence — like the truck's electronic control module data — can be legally overwritten quickly. The sooner I can send a preservation letter, the better." },
      { q: "The trucking company's insurer seems helpful. Is that a problem?", a: "Their job is to limit what the company pays. Being friendly is part of that. Don't give a recorded statement or sign anything before speaking with your own attorney." },
    ],
  },
  {
    slug: "motorcycle-accidents",
    navLabel: "Motorcycle Accidents",
    shortTitle: "Motorcycle Accidents",
    icon: "motorcycle",
    title: "Jupiter Motorcycle Accident Attorney",
    metaTitle: "Jupiter Motorcycle Accident Lawyer | Kuveikis Injury Attorney",
    metaDescription:
      "Motorcycle riders face bias and severe injuries after a crash. Steven Kuveikis fights that bias and fights for riders across Palm Beach County. Free consultation.",
    heroSummary:
      "Riders don't have crumple zones or airbags. When a driver doesn't see you, the consequences are severe — and too often the rider is unfairly blamed.",
    cardBlurb:
      "Crashes caused by drivers who 'never saw' the rider on A1A, US-1, and beyond.",
    intro: [
      "Most motorcycle crashes are not the rider's fault. They happen because a driver turns left across a rider's path, changes lanes without looking, or simply isn't paying attention. Yet riders routinely face an unfair assumption that they were reckless or speeding.",
      "That bias can seep into how an insurer values your claim. Overcoming it takes a clear, well-documented account of what actually happened — and someone willing to push back hard on the 'the biker must have been at fault' narrative.",
    ],
    localAngle:
      "South Florida is a rider's paradise — A1A along the coast, the bridges over the Intracoastal, and the open stretches out west. It's also full of distracted drivers, tourists, and heavy seasonal traffic. I know the roads riders love and the intersections where drivers most often fail to yield.",
    whatToDo: [
      { title: "Get to safety and call 911", body: "Move out of traffic if you can. Report the crash and request medical evaluation." },
      { title: "Keep your gear as evidence", body: "Your helmet and protective gear can show the force of impact. Don't discard them." },
      { title: "Document the scene", body: "Photos of the roadway, both vehicles, and the point of impact help counter the 'reckless rider' assumption." },
      { title: "Get medical care immediately", body: "Even with gear, riders suffer serious injuries. A prompt medical record ties your injuries to the crash." },
      { title: "Say little to the other driver's insurer", body: "Anything you say may be used to shift blame onto you. Let your attorney handle it." },
    ],
    commonInjuries: [
      "Road rash and severe abrasions",
      "Traumatic brain injury (even with a helmet)",
      "Spinal cord injuries and paralysis",
      "Broken bones, especially legs, arms, and collarbones",
      "'Biker's arm' nerve damage",
      "Internal injuries",
    ],
    floridaLaw: [
      { title: "Helmets and the law", body: "Florida allows riders over 21 with adequate insurance to ride without a helmet. Not wearing one does not automatically bar your claim, but insurers will try to use it against you. I know how to handle that argument." },
      { title: "PIP usually doesn't cover motorcycles", body: "Florida's no-fault PIP system generally does not apply to motorcycles, which changes how medical bills get paid and makes pursuing the at-fault driver even more important." },
      { title: "Comparative negligence and the two-year deadline", body: "As with other crashes, your recovery can be reduced by your share of fault, and you generally have two years to file. Fighting an inflated fault percentage is central to a rider's case." },
    ],
    howIHelp: [
      "Confront the anti-rider bias head-on with facts and reconstruction.",
      "Establish the driver's negligence clearly and early.",
      "Account for the severity of rider injuries, including long-term care.",
      "Deal with an insurer that may be looking for any reason to blame you.",
    ],
    faqs: [
      { q: "I wasn't wearing a helmet. Do I still have a case?", a: "Very possibly. Riders over 21 with the required insurance may legally ride without a helmet in Florida. An insurer may argue it affected your injuries, but that's an argument I know how to meet. Call and let's talk about the specifics." },
      { q: "The driver says I was speeding. What now?", a: "That's a common — and often baseless — claim. Physical evidence, witness accounts, and reconstruction frequently tell a different story. Don't accept the blame just because it's being pushed on you." },
      { q: "How are motorcycle injury claims paid if PIP doesn't apply?", a: "Typically through the at-fault driver's bodily injury coverage, your own uninsured/underinsured motorist coverage, and health insurance. I'll map out every source of recovery available to you." },
    ],
  },
  {
    slug: "slip-and-fall",
    navLabel: "Slip & Fall",
    shortTitle: "Slip & Fall",
    icon: "slip",
    title: "Jupiter Slip and Fall Attorney",
    metaTitle: "Jupiter Slip & Fall Lawyer | Premises Liability | Kuveikis Injury Attorney",
    metaDescription:
      "Hurt by a wet floor, uneven walkway, or hidden hazard? Steven Kuveikis handles slip-and-fall and premises liability claims in Palm Beach County. Free consultation.",
    heroSummary:
      "A fall on someone else's property can cause serious, lasting injury. When a business ignores a known hazard, it can be held responsible.",
    cardBlurb:
      "Wet floors, uneven surfaces, and hidden hazards at stores, hotels, and rentals.",
    intro: [
      "Slip-and-fall claims sound simple but are among the hardest injury cases to prove. It isn't enough that you fell and got hurt. You generally have to show the property owner knew — or should have known — about the hazard and failed to fix or warn about it.",
      "Businesses and their insurers know this, and they defend these cases aggressively. Surveillance video gets overwritten, incident reports get filed away, and 'the floor was clearly marked' becomes their story. Moving quickly to preserve evidence is critical.",
    ],
    localAngle:
      "From the Gardens Mall and Downtown at the Gardens to grocery stores, restaurants, and the resorts and rentals that fill up during season, Palm Beach County sees countless preventable falls. I know how local businesses and property managers operate — and how to get the video before it disappears.",
    whatToDo: [
      { title: "Report the fall right away", body: "Tell a manager and ask for a written incident report. Get a copy or the report number." },
      { title: "Photograph the hazard immediately", body: "The wet floor, torn mat, broken step, or missing sign — before it's cleaned up or fixed." },
      { title: "Get names of witnesses", body: "Anyone who saw the fall or the hazard can be invaluable later." },
      { title: "Keep what you were wearing", body: "Especially your shoes — insurers often blame footwear." },
      { title: "See a doctor and call a lawyer", body: "A prompt medical record and quick action to preserve video make a real difference." },
    ],
    commonInjuries: [
      "Broken hips, wrists, and ankles",
      "Head injuries and concussions",
      "Back and spinal injuries",
      "Torn ligaments and knee injuries",
      "Shoulder injuries",
      "Deep bruising and lacerations",
    ],
    floridaLaw: [
      { title: "You must prove notice of the hazard", body: "Under Florida Statute 768.0755, for a transitory foreign substance (like a spill) you generally must show the business knew or should have known about it and had time to address it. Evidence of how long the hazard existed is often decisive." },
      { title: "Comparative negligence applies", body: "The property owner will often argue you weren't watching where you were going. Your recovery can be reduced by your share of fault, and barred if you're found more than 50% responsible." },
      { title: "Two years to file", body: "Premises-liability injury claims are subject to Florida's two-year deadline. The practical clock is shorter — video evidence can be gone in weeks." },
    ],
    howIHelp: [
      "Move fast to preserve surveillance video and incident reports.",
      "Establish that the property owner knew or should have known about the hazard.",
      "Document your injuries and how the fall has affected your life.",
      "Counter the standard defenses — 'it was obvious,' 'you weren't looking,' 'your shoes.'",
    ],
    faqs: [
      { q: "I fell in a store — isn't the store automatically liable?", a: "No. You generally have to prove the store knew or should have known about the hazard and didn't act. That's why evidence of how long the spill or defect existed is so important, and why quick action matters." },
      { q: "The store had a 'wet floor' sign. Do I still have a case?", a: "Possibly. A sign doesn't automatically end a claim, especially if it was poorly placed, put out after the fact, or the hazard was worse than the sign suggested. Let me look at the specifics." },
      { q: "How long do I have to bring a slip-and-fall claim?", a: "Generally two years in Florida. But the surveillance video that could prove your case is often erased within days or weeks, so the sooner you call, the better." },
    ],
  },
  {
    slug: "negligent-security",
    navLabel: "Negligent Security",
    shortTitle: "Negligent Security",
    icon: "security",
    title: "Jupiter Negligent Security Attorney",
    metaTitle: "Jupiter Negligent Security Lawyer | Kuveikis Injury Attorney",
    metaDescription:
      "Assaulted or injured by crime on someone else's property? Inadequate security can make the property owner liable. Steven Kuveikis handles negligent security claims in Palm Beach County.",
    heroSummary:
      "When a business ignores a known safety risk and someone is hurt by a foreseeable crime, the property owner can share responsibility for what happened.",
    cardBlurb:
      "Injuries from assaults, robberies, and violence enabled by inadequate property security.",
    intro: [
      "Negligent security is a type of premises-liability claim. The idea is straightforward: property owners who invite the public onto their property — apartment complexes, hotels, bars, parking garages, shopping centers — have a duty to take reasonable steps to keep visitors safe from foreseeable harm.",
      "When a business knows an area has a history of violent crime and does nothing — no lighting, no cameras, no security, broken gates left unrepaired — and someone is then assaulted or worse, the law may hold that business accountable alongside the criminal.",
    ],
    localAngle:
      "These cases require knowing the local landscape — crime patterns, prior incidents at a property, and what reasonable security looks like for a given business in Palm Beach County. That local knowledge is central to proving a crime was foreseeable and preventable.",
    whatToDo: [
      { title: "Call 911 and report the crime", body: "A police report is essential. It documents what happened and often the property's known history." },
      { title: "Get medical care", body: "Treat your injuries and create a medical record connected to the incident." },
      { title: "Note the security conditions", body: "Broken lights, disabled cameras, propped-open gates, missing guards — photograph what you safely can." },
      { title: "Preserve any evidence", body: "Keep clothing, note witnesses, and don't post details on social media." },
      { title: "Call a lawyer promptly", body: "Security footage and prior-incident records must be requested before they're gone." },
    ],
    commonInjuries: [
      "Injuries from physical or sexual assault",
      "Gunshot and stabbing wounds",
      "Traumatic brain injury",
      "Broken bones and internal injuries",
      "Emotional trauma and PTSD",
      "Wrongful death",
    ],
    floridaLaw: [
      { title: "Foreseeability is the key question", body: "Liability usually turns on whether the crime was foreseeable — often shown through prior crimes at or near the property that the owner knew or should have known about." },
      { title: "Reasonable security measures", body: "Courts weigh whether the owner took reasonable steps: adequate lighting, functioning locks and gates, cameras, and security personnel where warranted." },
      { title: "Florida's evolving law and the two-year deadline", body: "Florida has specific statutes addressing security at certain properties, and comparative negligence and the two-year filing deadline apply. These are complex cases where early, careful investigation matters." },
    ],
    howIHelp: [
      "Investigate the property's crime history and prior incidents.",
      "Obtain security footage and records before they disappear.",
      "Establish that the harm was foreseeable and preventable.",
      "Handle these sensitive cases with the discretion and care they require.",
    ],
    faqs: [
      { q: "The person who attacked me is the criminal — how is the property owner responsible?", a: "Both can bear responsibility. The criminal is responsible for the crime; the property owner may be separately responsible if they ignored a known, foreseeable risk and failed to provide reasonable security. Often the property owner is the party with insurance to compensate you." },
      { q: "What makes a crime 'foreseeable'?", a: "Usually a history of similar crime at or near the property that the owner knew or should have known about. Establishing that pattern is a core part of the investigation." },
      { q: "These cases feel overwhelming. Will I have to relive it constantly?", a: "I handle these matters with care and discretion, and I take on the legal burden so you can focus on healing. You'll never be pushed further than you're ready to go." },
    ],
    ctaHeading: "Hurt due to negligent security? Let's talk today.",
  },
  {
    slug: "wrongful-death",
    navLabel: "Wrongful Death",
    shortTitle: "Wrongful Death",
    icon: "wrongful-death",
    title: "Jupiter Wrongful Death Attorney",
    metaTitle: "Jupiter Wrongful Death Lawyer | Kuveikis Injury Attorney",
    metaDescription:
      "Losing a loved one to someone else's negligence is devastating. Steven Kuveikis handles wrongful death claims in Palm Beach County with compassion and care. Free, private consultation.",
    heroSummary:
      "No claim can undo your loss. But holding the responsible party accountable can bring a measure of justice — and protect your family's future.",
    cardBlurb:
      "Compassionate representation for families after a preventable, fatal accident.",
    intro: [
      "There is nothing harder than losing someone you love because of another person's carelessness. In the middle of grief, families are often forced to think about medical bills, funeral costs, and lost income — the practical weight of an unthinkable loss.",
      "A wrongful death claim exists to ease that burden and to hold the responsible party accountable. My role is to carry the legal work quietly and respectfully in the background, so your family has the space to grieve.",
    ],
    localAngle:
      "I've lived in this community my whole life, and I treat these cases the way I'd want my own family treated — with patience, honesty, and respect. There is no pressure and no rush. When you're ready to talk, I'm here.",
    whatToDo: [
      { title: "Take care of your family first", body: "There is no deadline that requires you to act this week. Grieve. The legal steps can follow." },
      { title: "Preserve any records you have", body: "Accident reports, medical records, and correspondence may matter later. Keep them together." },
      { title: "Be cautious with insurers", body: "An insurer may reach out early with an offer. Please don't sign anything before speaking with an attorney." },
      { title: "Keep account of expenses", body: "Funeral costs, medical bills, and other losses can be part of the claim." },
      { title: "Reach out when you're ready", body: "A conversation costs nothing and carries no obligation. I'll explain your options plainly." },
    ],
    commonInjuries: [
      "Fatal car, truck, and motorcycle crashes",
      "Fatal falls and premises hazards",
      "Fatal acts of violence (negligent security)",
      "Pedestrian and bicycle fatalities",
      "Drowning and pool incidents",
      "Any preventable, fatal accident",
    ],
    floridaLaw: [
      { title: "Who may bring a claim", body: "Under Florida's Wrongful Death Act, the claim is filed by the personal representative of the estate on behalf of surviving family members — typically a spouse, children, and parents." },
      { title: "What can be recovered", body: "Damages can include lost support and services, loss of companionship and guidance, mental pain and suffering of survivors, medical and funeral expenses, and the estate's losses." },
      { title: "The filing deadline", body: "Florida's wrongful death statute of limitations is generally two years from the date of death. There are nuances, so it's worth confirming your specific deadline early." },
    ],
    howIHelp: [
      "Handle every legal detail with compassion and discretion.",
      "Identify all responsible parties and available insurance.",
      "Pursue full and fair compensation for your family's losses.",
      "Move at a pace that respects your grief — never the other way around.",
    ],
    faqs: [
      { q: "Who is allowed to file a wrongful death claim in Florida?", a: "The claim is brought by the personal representative of the deceased's estate, on behalf of surviving family members such as a spouse, children, and parents. If no representative has been named, I can help your family navigate that step." },
      { q: "We're still grieving. Is it too early to call?", a: "It's never wrong to ask questions, and there's no pressure to act. A short, private conversation can simply help you understand your options and the deadlines involved. You decide what happens next." },
      { q: "What can a wrongful death claim recover?", a: "Depending on the circumstances, it may cover lost financial support, loss of companionship and guidance, survivors' mental pain and suffering, and medical and funeral expenses. I'll walk you through what applies to your family." },
    ],
  },
  {
    slug: "rideshare-accidents",
    navLabel: "Uber & Lyft Accidents",
    shortTitle: "Rideshare Accidents",
    icon: "rideshare",
    title: "Jupiter Uber & Lyft Accident Attorney",
    metaTitle: "Jupiter Uber & Lyft Accident Lawyer | Kuveikis Injury Attorney",
    metaDescription:
      "Injured in an Uber or Lyft crash — as a passenger, driver, or in another car? Rideshare insurance is complicated. Steven Kuveikis sorts it out. Free consultation in Palm Beach County.",
    heroSummary:
      "Rideshare crashes come with a tangle of insurance policies. Which one pays depends on exactly what the app was doing at the moment of the crash.",
    cardBlurb:
      "Passenger, driver, or third-party injuries involving Uber and Lyft vehicles.",
    intro: [
      "Rideshare accidents have become common as Uber and Lyft fill the roads of South Florida. Whether you were a passenger, the rideshare driver, or in another vehicle, the injuries are real — but the insurance picture is unusually complicated.",
      "Uber and Lyft carry large insurance policies, but coverage turns on the driver's status in the app at the moment of the crash: offline, waiting for a ride request, or actively carrying a passenger. Each phase triggers different coverage, and the companies are quick to point fingers.",
    ],
    localAngle:
      "Rideshare traffic is heavy around Palm Beach County's nightlife, the airport, hotels, and event venues. I understand how these crashes tend to happen locally and how to untangle which policy — the driver's, Uber's, Lyft's, or another driver's — should pay for your injuries.",
    whatToDo: [
      { title: "Report the crash and call 911", body: "Get a police report. If you're a passenger, report the incident in the app as well." },
      { title: "Screenshot the ride", body: "Capture the trip details, driver info, and app status. This proves the driver's status at the time." },
      { title: "Get medical attention", body: "As with any crash, prompt treatment protects both your health and your claim." },
      { title: "Collect information from all drivers", body: "The rideshare driver and any other drivers involved — names, insurance, and plates." },
      { title: "Call a lawyer before dealing with the insurers", body: "Multiple insurers may be involved, each hoping another one pays. Let me coordinate them." },
    ],
    commonInjuries: [
      "Whiplash and neck/back injuries",
      "Herniated discs",
      "Concussions and head injuries",
      "Broken bones",
      "Knee and shoulder injuries",
      "Seat-belt and airbag injuries",
    ],
    floridaLaw: [
      { title: "Coverage depends on app status", body: "When a rideshare driver is carrying a passenger or en route to one, Uber and Lyft generally provide up to $1 million in liability coverage. When the app is on but no ride is accepted, lower limits apply. When the app is off, only the driver's personal policy applies." },
      { title: "Passengers are almost never at fault", body: "If you were a passenger, you generally have a strong claim — the only real question is which policy pays. That question is exactly where these cases get contested." },
      { title: "Comparative negligence and two-year deadline", body: "Florida's fault and two-year filing rules apply here too. Determining and preserving proof of app status early is key." },
    ],
    howIHelp: [
      "Determine the driver's app status and which policies apply.",
      "Deal with Uber's or Lyft's insurers and any other driver's insurer.",
      "Make sure no company shifts blame onto another to avoid paying you.",
      "Pursue the full coverage available for your injuries.",
    ],
    faqs: [
      { q: "I was a passenger in an Uber that crashed. Who pays?", a: "As a passenger you're rarely at fault, so you usually have a solid claim — but the responsible policy depends on the circumstances and which driver caused the crash. Uber's coverage, the driver's coverage, or another driver's policy may apply. I'll sort out which." },
      { q: "I drive for Lyft and was hurt on the job. What are my options?", a: "It depends on your app status at the time and the details of the crash. Rideshare drivers have coverage options that are easy to overlook. Let's review your specific situation." },
      { q: "Can I sue Uber or Lyft directly?", a: "These companies classify drivers as independent contractors, which complicates direct claims — but their insurance policies are often what provides your recovery. The key is identifying and accessing the right coverage, which is what I do." },
    ],
  },
  {
    slug: "delivery-driver-accidents",
    navLabel: "Delivery Driver Accidents",
    shortTitle: "Delivery Accidents",
    icon: "delivery",
    title: "Jupiter Delivery Driver Accident Attorney",
    metaTitle: "Jupiter Delivery Driver Accident Lawyer | DoorDash, Amazon | Kuveikis Injury Attorney",
    metaDescription:
      "Hit by a DoorDash, Amazon, UPS, or delivery driver? Rushing drivers cause serious crashes. Steven Kuveikis handles delivery-vehicle claims in Palm Beach County. Free consultation.",
    heroSummary:
      "The explosion of on-demand delivery has put more rushing, distracted drivers on our roads — and made the question of who pays more complicated than ever.",
    cardBlurb:
      "Crashes involving DoorDash, Amazon, UPS, FedEx, and other delivery vehicles.",
    intro: [
      "DoorDash, Uber Eats, Amazon, UPS, FedEx, and countless local couriers have flooded South Florida's streets with delivery drivers under constant pressure to move fast. That pressure — tight windows, app distractions, unfamiliar routes — leads to crashes.",
      "When a delivery driver hits you, who pays can be surprisingly complicated. It depends on whether the driver was an employee or a gig worker, whether they were actively on a delivery, and whose insurance applies. These are exactly the details that determine your recovery.",
    ],
    localAngle:
      "Delivery vehicles are everywhere in Jupiter and Palm Beach Gardens — residential streets, apartment complexes, and busy commercial corridors. I know how these crashes happen locally and how to trace the web of employers, contractors, and insurers behind a delivery driver.",
    whatToDo: [
      { title: "Call 911 and report the crash", body: "Get a police report documenting the delivery vehicle and driver." },
      { title: "Identify the company", body: "Note the delivery company — DoorDash, Amazon, UPS, a local courier — and any markings, uniforms, or vehicle branding." },
      { title: "Photograph the scene", body: "Vehicles, damage, delivery signage or bags, and the surroundings." },
      { title: "Get medical care", body: "Prompt treatment protects your health and links your injuries to the crash." },
      { title: "Call a lawyer to untangle the insurance", body: "Employee vs. gig worker, on-duty vs. off — these details change who pays. I'll investigate them." },
    ],
    commonInjuries: [
      "Whiplash and spinal injuries",
      "Herniated discs",
      "Concussions and head trauma",
      "Broken bones",
      "Pedestrian and cyclist injuries",
      "Soft-tissue injuries",
    ],
    floridaLaw: [
      { title: "Employee or independent contractor?", body: "If the driver was an employee (as with many UPS/FedEx drivers) acting within their job, the employer may be liable through vicarious liability. Gig workers (DoorDash, many Amazon Flex drivers) are often classified as contractors, which changes the analysis and the available coverage." },
      { title: "Multiple possible insurers", body: "The driver's personal policy, a commercial policy, and the company's coverage may all be in play depending on the facts. Identifying every source of coverage is essential." },
      { title: "Comparative negligence and the two-year deadline", body: "Florida's fault rules and two-year filing deadline apply. Investigating the driver's employment status early can make or break the claim." },
    ],
    howIHelp: [
      "Determine the driver's employment status and duty status at the time.",
      "Identify every company and insurer potentially responsible.",
      "Pursue the employer or platform where the law allows.",
      "Handle the multi-party insurance fight so you don't have to.",
    ],
    faqs: [
      { q: "A DoorDash driver hit me. Can I sue DoorDash?", a: "It's complicated. Gig platforms classify drivers as independent contractors, which can limit direct claims, but their insurance may still provide coverage when the driver was actively delivering. The key is identifying which policies apply — that's what I investigate." },
      { q: "A delivery driver hit me and had little insurance. Am I out of luck?", a: "Not necessarily. There may be a commercial policy, an employer's coverage, or your own uninsured/underinsured motorist coverage. I look for every available source of recovery." },
      { q: "How do I know if the driver was an employee or a gig worker?", a: "That's part of the investigation. UPS and FedEx drivers are often employees; DoorDash and many Amazon Flex drivers are typically contractors. The distinction affects who's responsible, and I'll dig into the facts to establish it." },
    ],
  },
];

export function getPracticeArea(slug: string): PracticeArea | undefined {
  return practiceAreas.find((p) => p.slug === slug);
}
