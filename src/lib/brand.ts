// Brand config — hydrated at scaffold time by build_site.py from
// plan-input.json and the client record. All {{TOKENS}} are replaced
// by the scaffold step; this file should not be hand-edited after that.

export const brand = {
  slug: "flood-fixers",
  displayName: "Flood Fixers",
  shortName: "Flood Fixers",
  legalName: "Good Home Construction LLC",
  // Registered DBA / trade name — filled by rename_site_sync.py the moment
  // the state approves the client's DBA filing (empty until then). When set,
  // the footer carries the "[legal] doing business as [DBA]" line and schema
  // declares it as the business name, so Google/BrightLocal find the new
  // name corroborated on the site before and during the GBP rename.
  dbaName: "Flood Fixers",
  domain: "flood-fixers.com",
  canonicalUrl: "https://flood-fixers.com",
  phone: "(855) 204-1124",
  phoneRaw: "+18552041124",
  hideMobileHeaderCall: false,
  // A2P/SMS-registration legal entity. When set, the estimate forms render
  // the carrier-compliant consent checkbox naming this entity (exact wording
  // matters to reviewers — do not paraphrase). Empty = generic consent only.
  smsConsentEntity: "",
  // Sitewide call-tracking number (2026-08-24). When BOTH fields are set,
  // a tiny inline script in BaseLayout swaps every visible phone mention
  // and tel: link to this number AFTER the page renders. The HTML source,
  // the JSON-LD in schema.ts, and anything crawlers/citation-checkers read
  // keep the canonical NAP number above — humans dial the tracked line,
  // Google sees consistent NAP. Empty = feature off (default at scaffold;
  // filled by the call-tracking provisioning step).
  trackingPhone: "(858) 371-5656",
  trackingPhoneRaw: "+18583715656",
  email: "",
  hours: "24/7 Emergency Service",
  // AVAILABILITY 24/7 (Santino 2026-11-21, scripts/availability.py): calls are
  // answered 24/7 (the AI receptionist), every trade, default true; false only
  // when the client said not to. Separate from the emergency-SERVICE rule
  // (emergency_policy.py, the `hours` gate above). openingHoursSpec = the
  // schema hours (scripts/schema_hours.py): 24/7 when available, else the
  // real Google hours, else none.
  available247: true,
  openingHoursSpec: [{"days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59"}] as { days: string[]; opens: string; closes: string }[],
  foundedYear: "",
  primaryCity: "San Diego",
  primaryState: "CA",
  // primaryCity/primaryState = the #1 MARKETING city (headlines, coverage
  // copy). addressCity/addressState = where the business PHYSICALLY is.
  // They are usually the same and often diverge (DISS: Farrell PA office,
  // Youngstown OH target) — only the address pair may go in a PostalAddress.
  addressCity: "San Marcos",
  addressState: "CA",
  streetAddress: "",
  postalCode: "",
  lat: "33.1434",
  lng: "-117.1661",
  placeId: "ChIJJ3gQpF913IAR-Hs5M4WEiAs",
  googleCid: "",
  imagesBase: "https://images.flood-fixers.com",
  googleMapsApiKey: "AIzaSyDrYnSuDu-hFvKHEcQCjwb-zsMebInPneU",
  // Analytics — set post-scaffold (scripts/analytics_set.py / create_ga4.py); no-op if empty
  ga4MeasurementId: "G-BPB9R60M10",
  clarityProjectId: "",
  logoUrl: "/images/logo.webp", // brand/logo.png missing from R2 (404); pinned to local file
  licenseNumbers: [] as string[],
  licenseAuthority: "",
  // State license-verification page — the footer links the license number here.
  licenseLookupUrl: "",
  licenseType: "",
  // Operator-confirmed "licensed & insured" attestation from plan-input.json —
  // lets the TrustStrip show the badge before a license number is on file.
  licensedInsuredAttested: true as boolean,
  certifications: ["IICRC Certified", "EPA Lead-Safe Certified"] as string[],
  trustBadges: [] as string[],
  jobPhotos: [] as string[],
  sameAsUrls: ["https://www.facebook.com/61589997593516", "https://www.instagram.com/flood.fixers/", "https://maps.google.com/maps?cid=831059838874778616", "https://www.yelp.com/biz/flood-fixers-san-diego", "https://www.bing.com/maps?ss=ypid.YN98B76BD2E3E0D8A0", "https://www.houzz.com/professionals/environmental-services-and-restoration/flood-fixers-pfvwus-pf~190107846"] as string[],
  credentials: [{"name": "IICRC Certified", "kind": "certification", "authority": "IICRC", "holder": "company"}, {"name": "EPA Lead-Safe Certified", "kind": "certification", "authority": "U.S. EPA", "holder": "company"}] as { name: string; kind: string; number?: string; authority?: string; url?: string; since?: string; state?: string; holder?: string; course?: string }[],
  credentialsLine: [{"text": "IICRC Certified"}, {"text": "EPA Lead-Safe Certified"}] as { text: string; url?: string }[],
  // GBP rating fields — synced from the live Google Business Profile by
  // scripts/sync_brand_reviews.py; never hand-edited (real ratings only).
  gbpRatingValue: "5.0",
  gbpReviewCount: "17",
  gbpReviews: [
    { author: "Savanna", rating: 5, text: "One job that came up involved a floor where boards started flexing slightly near a doorway long before any staining showed up on the surface. The crew mentioned that kind of give underfoot usually means water had gotten under the subfloor weeks earlier and was already doing quiet damage. They…", when: "November 2026" },
    { author: "Stephen", rating: 5, text: "I was stressed about a leak in my rental in hidden meadows, and talking with Flood Fixers helped me understand what tenants versus landlords are actually responsible for they made time for all my questions and that really meant a lot!", when: "November 2026" },
    { author: "Zack", rating: 5, text: "I used to worry about asking something that seemed basic like whether a small drip under the sink could spread mold before I'd ever noticed, but now I feel confident I'd catch it early and know who to call.", when: "November 2026" },
    { author: "Faridah", rating: 5, text: "A flooring job came up while we were talking where water had been sitting under the planks for weeks before anyone caught it. By the time the crew got there, the edges along one wall were already lifting and the subfloor felt soft to touch. They mentioned that once boards start curling at the…", when: "November 2026" },
    { author: "Erik", rating: 5, text: "i'd like to leave a review based upon the exceptional work done in my home. Their services were completed on time, quality assurance after flooring was completed. Thank you", when: "May 2026" },
    { author: "Ian", rating: 5, text: "Courteous and respectful crew with excellent attention to detail.", when: "May 2026" },
  ] as { author: string; rating: number; text: string; when: string }[],
  tagline: "24/7 restoration services in San Diego, CA.",
  ctaLabel: "24/7 Emergency Line",
  // Vertical trade-identity copy — resolved at scaffold time from
  // templates/{vertical}/vertical-tokens.json (see scripts/verticals.py).
  // Components must use these instead of hardcoding a trade phrase.
  // vertical gates layout too: restoration is call-first, so the homepage
  // hero renders NO estimate form there (Santino 2026-09-11).
  vertical: "restoration",
  tradeNoun: "restoration",
  specialistPhrase: "Damage Restoration Specialists",
  announcementSuffix: "24/7 Emergency Response",
  homeAboutBlurb: "Flood Fixers serves San Diego and the surrounding CA area with professional damage restoration for homes and businesses. From the first emergency call to the final walkthrough, our team manages the entire recovery — and we answer the phone 24/7, so help is on the way the moment something goes wrong.",
} as const;

export const entityId = `${brand.canonicalUrl}/#identity`;
