import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/siteConfig";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const {
      formType = "Lead Form",
      name = "Anonymous",
      email = "",
      phone = "",
      incidentType = "",
      injurySeverity = "",
      timing = "",
      caseType = "",
      message = "",
      notes = "",
    } = data;

    const accessKey =
      process.env.WEB3FORMS_ACCESS_KEY ||
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    const formspreeUrl = process.env.FORMSPREE_URL;

    const isQualifier = formType === "Case Qualifier";
    const subject = isQualifier
      ? `🚨 New Priority Case Qualifier Lead: ${name} (${incidentType || "Injury Case"})`
      : `New Consultation Request: ${name} (${caseType || "General Inquiry"})`;

    // 1. Formspree Integration (if configured)
    if (formspreeUrl) {
      const response = await fetch(formspreeUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          subject,
          "Form Type": formType,
          Name: name,
          Phone: phone || "Not provided",
          Email: email || "Not provided",
          ...(isQualifier
            ? {
                "Incident Type": incidentType,
                "Injury Severity": injurySeverity,
                "Statutory Timing": timing,
                "Client Notes": notes || "None",
              }
            : {
                "Case Category": caseType,
                "Message / What Happened": message || "None",
              }),
        }),
      });

      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        return NextResponse.json(
          { error: "Formspree submission failed", details: result },
          { status: response.status }
        );
      }
      return NextResponse.json({ success: true, provider: "formspree" });
    }

    // 2. Web3Forms Integration (if configured)
    if (accessKey) {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject,
          from_name: "Kuveikis Law Leads",
          to_email: siteConfig.email,
          name,
          phone: phone || "Not provided",
          email: email || siteConfig.email,
          ...(isQualifier
            ? {
                "Incident Type": incidentType,
                "Injury Severity": injurySeverity,
                "Statutory Timing": timing,
                "Client Notes": notes || "None",
              }
            : {
                "Case Category": caseType,
                "Message / What Happened": message || "None",
              }),
        }),
      });

      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.success) {
        return NextResponse.json(
          { error: "Web3Forms submission failed", details: result },
          { status: response.status || 400 }
        );
      }
      return NextResponse.json({ success: true, provider: "web3forms" });
    }

    // 3. Fallback / Dev Mode Logger (when API key not yet set in environment)
    console.log("\n=======================================================");
    console.log(`📩 [LEAD FORM SUBMISSION RECEIVED] - ${formType}`);
    console.log(`Subject: ${subject}`);
    console.log(`Name:    ${name}`);
    console.log(`Phone:   ${phone}`);
    console.log(`Email:   ${email}`);
    if (isQualifier) {
      console.log(`Type:    ${incidentType}`);
      console.log(`Injury:  ${injurySeverity}`);
      console.log(`Timing:  ${timing}`);
      console.log(`Notes:   ${notes}`);
    } else {
      console.log(`Category:${caseType}`);
      console.log(`Message: ${message}`);
    }
    console.log(`Destination: ${siteConfig.email}`);
    console.log("ℹ️  To activate live email delivery, add WEB3FORMS_ACCESS_KEY or FORMSPREE_URL in .env.local");
    console.log("=======================================================\n");

    return NextResponse.json({
      success: true,
      provider: "dev-logger",
      message: "Lead processed. Add WEB3FORMS_ACCESS_KEY to .env.local for live email delivery.",
    });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    console.error("API /api/lead error:", errorMessage);
    return NextResponse.json(
      { error: "Internal Server Error", message: errorMessage },
      { status: 500 }
    );
  }
}
