/* Fresh Strategies — app catalog (representations + demo data). Drives the landing cards. */
window.FS_APPS = [
  // ---------------- Agriculture ----------------
  {
    sector: "ag", slug: "field-to-cooling", title: "Field‑to‑Cooling Operations",
    icon: "truck",
    need: "A grower‑cooler tracked harvest, transport, receiving, and cooling on paper and radio calls — no live view of where loads were, and reconciling custom‑cooling charges was manual.",
    solve: "A mobile system of record for the whole chain: crews open field tickets, drivers claim and run loads, a live receiving board updates in real time, and cooling operators scan loads through cycles. Custom‑cooling produces a signed PDF receipt automatically.",
    tags: [".NET / Razor", "Mobile‑first", "Barcode scan", "PDF receipts", "EN / ES"]
  },
  {
    sector: "ag", slug: "produce-qc", title: "Produce QC Inspection",
    icon: "check-shield",
    need: "Quality inspectors scored fresh produce on clipboards using AQL sampling — inconsistent math, no photos, and failures that didn’t reach the right people fast enough.",
    solve: "Inspectors scan a tag to pull grower and block context, count major/minor defects with weighted AQL scoring, capture photos, and get an instant pass/fail. Failures notify stakeholders; supervisors get an analytics dashboard.",
    tags: [".NET / Razor", "AQL sampling", "Photo capture", "Offline", "Notifications"]
  },
  {
    sector: "ag", slug: "harvest-estimate", title: "Weekly Harvest Estimate",
    icon: "sprout",
    need: "Field staff submitted weekly harvest estimates in inconsistent Excel sheets — different columns per commodity, manual re‑entry, and no clean hand‑off downstream.",
    solve: "One mobile‑friendly form configured per commodity. Staff enter a five‑week rolling estimate broken down by cut and size; the app validates, auto‑calculates totals with proper rounding, and hands a clean record to the planning system.",
    tags: [".NET / Razor", "Config‑driven", "Live totals", "PDF export"]
  },
  {
    sector: "ag", slug: "planting-schedule", title: "Planting Schedule & Reports",
    icon: "calendar",
    need: "Crop planning lived across a dozen spreadsheets — planting dates, harvest windows, and demand — making it hard to coordinate teams or produce the reports the field needed.",
    solve: "A planning hub with an editable schedule grid, master data for crops, growers, ranches and regions, and one‑click internal and external PDF reports (scouting, production, pre‑harvest) generated from a single source of truth.",
    tags: ["React", "Data grid", "PDF reports", "Master data"]
  },
  {
    sector: "ag", slug: "block-prep", title: "Grower Block Prep",
    icon: "grid",
    need: "New planting cycles created dozens of grower blocks that had to be hand‑typed into an ERP with no API — slow, error‑prone, one screen at a time.",
    solve: "A spreadsheet‑style enrichment screen pulls pending blocks, validates each field against ERP reference data with dropdowns, supports bulk‑fill, and queues complete rows for an automated loader — turning a day of typing into a quick review.",
    tags: [".NET / Razor", "Bulk edit", "Validation", "ERP queue"]
  },
  {
    sector: "ag", slug: "invoice-qc", title: "Invoice QC Review",
    icon: "receipt",
    need: "An ERP auto‑generated invoices but ran no checks — staff visually scanned every invoice for missing POs, $0 lines, and mismatches before sending, wasting time on clean ones.",
    solve: "A rule engine pre‑screens the rolling invoice window and surfaces only the invoices with problems, highlighting the exact offending lines. Staff mark issues addressed or done; admins manage rules with no code.",
    tags: [".NET / Razor", "Rule engine", "Workflow", "Audit trail"]
  },
  {
    sector: "ag", slug: "ad-tracker", title: "Promo & Ad‑Group Tracker",
    icon: "tag",
    need: "Sales tracked promotional ad groups and product lines across customers in scattered spreadsheets — duplicated effort and inconsistent data when sharing with partners.",
    solve: "A single interface to build ad groups per customer and campaign, add product lines with quantity and price, then sort, filter, and export clean CSV and PDF summaries for stakeholders.",
    tags: ["React", "CSV / PDF export", "Filtering", "Audit fields"]
  },

  // ---------------- Electrical ----------------
  {
    sector: "elec", slug: "job-ops", title: "Job Operations & Daily Reports",
    icon: "hard-hat",
    need: "Field foremen for an electrical contractor filed daily reports on paper, photos lived on phones, and the office chased change‑order paperwork by hand.",
    solve: "Foremen log crew, hours, work, weather, delays, photos and materials from the field; the office reviews submissions, manages job documents, and generates branded change‑order PDFs with signature lines — all role‑scoped.",
    tags: ["React", "Mobile‑first", "Photo capture", "Change‑order PDF", "Offline"]
  },
  {
    sector: "elec", slug: "time-cards", title: "Time Cards & CA Compliance",
    icon: "clock",
    need: "Weekly time cards were paper, and California overtime, double‑time, and meal/rest‑break rules were calculated by hand — slow to approve and risky to get wrong.",
    solve: "Crews fill a weekly card that auto‑calculates CA daily/weekly OT, double‑time, 7th‑day premiums, and break compliance live as they type. The office reviews a payroll rollup with compliance flags and approves in a click.",
    tags: ["React", "CA labor logic", "Approvals", "Signatures", "Vacation"]
  },

  // ---------------- Finance ----------------
  {
    sector: "fin", slug: "financial-analysis", title: "QuickBooks Financial Analysis",
    icon: "chart",
    need: "A finance team couldn’t slice QuickBooks the way leadership asked — by department, vendor, or budget variance — and pulled the same reports by hand every month.",
    solve: "A secure app connects to QuickBooks Online and delivers balance sheet, cash flow, budget‑vs‑actual, and AP aging on demand, with department drill‑downs, role‑scoped report access, and AI‑written commentary on what changed and why.",
    tags: [".NET / Razor", "QBO OAuth", "AI analysis", "Role‑scoped", "MFA"]
  },

  // ---------------- Real Estate & Rentals ----------------
  {
    sector: "rental", slug: "rental-management", title: "Vacation Rental Manager",
    icon: "home",
    need: "An owner running several short‑term rental properties juggled bookings, cleaning turnovers, and payouts across a calendar, a spreadsheet, and text messages — and still double‑booked and missed cleanings.",
    solve: "One dashboard for the whole portfolio: reservations with a clear status flow (pending → confirmed → checked‑in → checked‑out), a turnover board that moves each unit from checkout to clean to guest‑ready, and occupancy, nightly‑rate, and payout numbers per property at a glance.",
    tags: ["React", "Bookings", "Turnover board", "Occupancy & revenue"]
  }
];

window.FS_CAPABILITIES = [
  {
    icon: "lock", title: "Auth & security standards",
    desc: "A shared blueprint every app inherits: invite‑only onboarding, mandatory MFA, fail‑closed per‑user data scoping, and secrets in a managed vault."
  },
  {
    icon: "palette", title: "Per‑client design systems",
    desc: "Each client gets a tokenized design system — colors, logo, components — so their whole app portfolio looks like one coherent family."
  },
  {
    icon: "database", title: "Data platform (ERP → analytics)",
    desc: "Automated pipelines and a modeled warehouse turn messy ERP tables into clean, analytics‑ready data the apps and reports run on."
  },
  {
    icon: "plug", title: "Integration APIs",
    desc: "Secure, read‑only APIs that feed third‑party planning and pricing platforms reliable, incremental data — no fragile manual exports."
  },
  {
    icon: "robot", title: "AI & automation",
    desc: "From AI‑written financial commentary to keystroke automation that loads records into API‑less legacy systems — practical AI where it pays off."
  },
  {
    icon: "rocket", title: "Cloud delivery",
    desc: "Hardened cloud hosting with managed identity, CI/CD on every push, and one‑click deploys — built to run, not just to demo."
  }
];
