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

  {
    sector: "ag", slug: "inventory-planning", title: "Daily Inventory & Production Planning",
    icon: "boxes",
    need: "A processing plant rebuilt its beginning‑inventory report by hand in Excel every morning — slow, siloed to one person, with no forward view of when a commodity would run short.",
    solve: "A shared daily tool tracks each commodity through the same equation the plant already trusts — beginning + harvest + purchases − usage = ending — then projects days‑of‑supply and raises alerts before anything runs low. Editors, the wider team, and execs each get the right view.",
    tags: ["React", "Daily equation", "Days‑of‑supply", "Alerts", "Roles"]
  },
  {
    sector: "ag", slug: "traceability", title: "Traceability Sync & Compliance",
    icon: "trace",
    need: "Product and lot data lived in one system, but the labeling and traceability platform needed a current copy every morning — and looming food‑safety label rules meant thousands of records had to be updated correctly and on deadline.",
    solve: "A daily sync proposes every change and lets a person approve it before it's pushed, so the two systems never drift. A separate dual‑approval workflow handles the big regulatory label cutover — dry‑run, review, then execute — with a full audit trail.",
    tags: [".NET / Razor", "Human‑approved sync", "Dual approval", "Audit trail"]
  },
  {
    sector: "ag", slug: "production-review", title: "Weekly Production Review (S&OP)",
    icon: "chart",
    need: "The weekly sales‑and‑operations review ran off a slide deck someone rebuilt by hand, so the numbers were stale before the meeting even started.",
    solve: "A live review app shows each commodity's planting, harvest estimate, actual receipts, and demand across a rolling five‑week window, straight from the source data. Presenters get clean slides and charts; admins add the week's notes in place — no more rebuilding a deck.",
    tags: [".NET / Razor", "Live S&OP", "5‑week view", "Charts", "Notes"]
  },

  // ---------------- Finance & Distribution (additions) ----------------
  {
    sector: "fin", slug: "grower-settlement", title: "Grower Pooling & Settlement",
    icon: "coins",
    need: "A grower‑shipper had to split each season's proceeds fairly across many growers — accounting for market‑passed units, varied charges, and ownership splits — all in a fragile spreadsheet only one person understood.",
    solve: "A settlement engine ingests the season's sales and charges, runs the pooling math (allocation by actual product mix, price equalization, charge reallocation, ownership splits), reconciles advances, and produces a branded, auditable settlement packet for each grower — validated to the dollar.",
    tags: [".NET / Razor", "Pooling math", "Ownership splits", "PDF packets", "Audited"]
  },
  {
    sector: "fin", slug: "finance-utilities", title: "Finance Data Workbench",
    icon: "database",
    need: "The finance team reloaded recurring workbooks — labor rates, budgets, sales demand — into the database by hand, and a single renamed column could quietly break everything.",
    solve: "Staff upload each standard workbook and the app validates it against an exact expected layout, previews every table with pass/fail counts, and loads it in one all‑or‑nothing step. Budgets get versioned and compared against demand, so nothing silently drifts.",
    tags: [".NET / Razor", "Workbook validation", "All‑or‑nothing load", "Budget compare"]
  },

  // ---------------- Real Estate & Rentals ----------------
  {
    sector: "rental", slug: "rental-management", title: "Vacation Rental Manager",
    icon: "home",
    need: "An owner running several short‑term rental properties juggled bookings, cleaning turnovers, and payouts across a calendar, a spreadsheet, and text messages — and still double‑booked and missed cleanings.",
    solve: "One dashboard for the whole portfolio: reservations with a clear status flow (pending → confirmed → checked‑in → checked‑out), a turnover board that moves each unit from checkout to clean to guest‑ready, and occupancy, nightly‑rate, and payout numbers per property at a glance.",
    tags: ["React", "Bookings", "Turnover board", "Occupancy & revenue"]
  },

  // ---------------- Logistics & Supply Chain ----------------
  {
    sector: "logistics", slug: "truck-checkin", title: "Truck Check‑In & Dock Scheduling",
    icon: "truck",
    need: "Drivers arriving at the warehouse had no way to announce themselves; staff matched trucks to orders by phone and radio, and dock assignments got lost in the shuffle.",
    solve: "A driver scans a QR code and enters their pickup number; the app matches it to the order, assigns a dock door, and texts the driver where to go. Two‑way SMS and a live ops board keep every arrival, delay, and assignment in one auditable place.",
    tags: ["Blazor / .NET", "QR self‑check‑in", "Two‑way SMS", "Dock scheduling"]
  },
  {
    sector: "logistics", slug: "vmi", title: "Vendor‑Managed Inventory",
    icon: "sync",
    need: "Account managers kept a customer's stock levels in enormous spreadsheets — dozens of distribution centers, hundreds of columns — doing reorder math by hand with no forward view of stock‑outs.",
    solve: "The app projects each location's demand from shipment history, then recommends how much to send and when to keep every site above safety stock. Managers define a customer once by picking its locations; the system watches cover levels and flags reorders before shelves go empty.",
    tags: ["Blazor / .NET", "Demand forecast", "Replenishment", "Multi‑location"]
  },
  {
    sector: "logistics", slug: "packaging", title: "Packaging Procurement & EPR",
    icon: "box",
    need: "Packaging — cartons, totes, cases — was ordered on gut feel from shipment volume, risking both stock‑outs and costly excess, with no clean record for new Extended Producer Responsibility (EPR) reporting.",
    solve: "Velocity‑based forecasting turns shipping history into a weekly burn rate, compares it against on‑hand and inbound orders, and suggests what to buy by lead‑time class. Material usage is tracked in a way that also feeds EPR fee and recycled‑content reporting.",
    tags: [".NET / Razor", "Velocity forecast", "Reorder suggestions", "EPR reporting"]
  },

  // ---------------- AI & Automation ----------------
  {
    sector: "ai", slug: "ai-extraction", title: "AI Document Extraction",
    icon: "doc",
    need: "A team received critical numbers every week as long PDF reports — dozens of pages of pricing and volume — and someone re‑keyed them by hand into spreadsheets before anyone could analyze them.",
    solve: "AI reads each report and extracts the figures into a structured database, showing a person every row to approve before it's saved. A clean, queryable history builds up automatically — ready for dashboards and deeper analytics instead of copy‑paste.",
    tags: [".NET / Razor", "Claude API", "PDF → database", "Human‑in‑the‑loop", "Analytics‑ready"]
  },
  {
    sector: "ai", slug: "ai-assistant", title: "AI Business‑Data Assistant",
    icon: "chat",
    need: "Leaders had rich operational data in their systems but still waited on analysts to answer everyday questions — what's low, what's trending, what needs attention today.",
    solve: "A chat assistant answers plain‑language questions using the business's own live data, not guesses. It's grounded through a secure, read‑only data layer (MCP) you feed with real context — products, customers, targets — so the answers get sharper the more of your world it knows.",
    tags: ["Claude + MCP", "Chat over your data", "Secure & read‑only", "Add business context"]
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
