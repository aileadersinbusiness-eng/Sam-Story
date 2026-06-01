export const GUIDE = {
  title: "THE COMPLETE GUIDE TO",
  titleAccent: "Perplexity",
  subtitle: "the answer engine and agent platform",
  for: "For UK Small & Medium Businesses",
  tagline: "What it does. What you pay for. How to actually use it.",
  author: "Business With AI Strategist",
  authorSub: "AI strategy, training and adoption for ambitious SMEs",
  edition: "Edition: May 2026",

  howToUse: {
    heading: "How to use this guide",
    body: "This guide is written for UK SME leaders and operators who already use Perplexity for the odd search and want to understand what the rest of the platform now does. As of May 2026, Perplexity is no longer just an answer engine — it is an answer engine, an agentic browser, a workspace, a deliverables platform, and a developer API, with a Mac-native always-on agent on top.\n\nThe goal is the same as ever: replace scattered, opportunistic use with a coherent setup that delivers real value.",
    note: {
      heading: "A note on dates",
      body: "Perplexity ships fast — sometimes multiple major features a month. Everything here reflects the state of the product as of May 2026. Where a feature is recent or region-locked, we say so. Verify on perplexity.ai before committing to a contract.",
    },
  },

  whatIs: {
    heading: "What Perplexity is in May 2026",
    intro: "Perplexity began life as a citation-first answer engine — every reply came with footnotes. That product still exists. Around it, Perplexity has built a stack of tools aimed at people who need to think, research and act with up-to-date information.",
    surfaces: [
      { name: "Search / Pro Search", desc: "the answer engine. Returns cited, conversational answers." },
      { name: "Spaces", desc: "saved workspaces with their own files, prompts and instructions." },
      { name: "Labs", desc: "produces deliverables (decks, dashboards, dossiers, simple apps and websites). Launched 29 May 2025." },
      { name: "Comet", desc: "a Chromium-based browser with Perplexity as the address bar. Launched July 2025; free download October 2025." },
      { name: "Computer", desc: "an agentic Mac/Windows assistant launched 27 February 2026." },
      { name: "Finance", desc: "dashboards and ticker pages with real-time market data." },
      { name: "Shopping", desc: "research-to-checkout (US only as of May 2026)." },
      { name: "API", desc: "the Sonar family of models with native search built in." },
    ],
    models: {
      heading: "The model lineup",
      intro: "Perplexity uses a hybrid approach — its own Sonar models, plus the best frontier models from other labs.",
      sonar: ["Sonar", "Sonar Pro", "Sonar Reasoning Pro", "Sonar Deep Research", "Sonar Pro Search"],
      external: {
        pro: ["Claude Sonnet 4.6", "GPT-5.2", "Gemini 3.1 Pro", "Grok", "Llama"],
        max: ["Claude Opus 4 / 4.6", "GPT-5.4", "o3-pro"],
      },
    },
  },

  pricing: {
    heading: "Plans and pricing",
    intro: "Perplexity sells five plans: Free, Pro, Max, Enterprise Pro and Enterprise Max. Prices below are headline USD — Perplexity does not localise to GBP at the website level. UK customers pay in dollars on the card.",
    plans: [
      { name: "Free", price: "$0", bestFor: "Trying it out", highlights: "Basic search; 3 Pro searches/day" },
      { name: "Pro", price: "$20/month or $200/year", bestFor: "Solo SME use", highlights: "Unlimited Pro Search; Labs; Comet; Spaces" },
      { name: "Max", price: "$200/month or $2,000/year", bestFor: "Power users and consultants", highlights: "Computer; Opus 4.6; o3-pro; 10,000 + 35,000 credits" },
      { name: "Enterprise Pro", price: "$40/seat/month ($400/year)", bestFor: "SMEs with 5–50 staff", highlights: "SSO, admin controls, no training on data" },
      { name: "Enterprise Max", price: "$325/seat/month ($3,250/year)", bestFor: "Larger orgs", highlights: "SCIM, PitchBook, Statista, Wiley, Compliance API" },
    ],
    recommendation: "Almost every SME starts on Pro. If two or more people in the business use it regularly, look hard at Enterprise Pro — at $40/seat/month it adds SSO, admin controls and a contractual no-training guarantee, and the cost is small relative to what an unmanaged team will end up spending on individual Pro subscriptions anyway.\n\nMax is for the heaviest individual users — people running Computer all day, comparing multiple frontier models, or generating large deliverables in Labs.",
    computerNote: "Perplexity Computer is impressive — a Mac/Windows agent that can read your screen, fill forms, and run scheduled tasks. As of May 2026 it is available on Pro (since 11 March 2026) and Max (since launch). Personal Computer, the Mac-only \"always-on\" variant, launched 7 May 2026 to all Mac users.",
  },

  surfaces: {
    heading: "The seven surfaces inside Perplexity",
    items: [
      {
        num: "1",
        name: "Search and Pro Search",
        body: "Search is the answer engine. Pro Search adds depth — it plans the query, runs multiple sub-searches, reads more sources and synthesises a longer, better-cited answer. Pro Search is unlimited on Pro and above; Free users get three a day.\n\nSonar Pro Search and Sonar Deep Research are the model variants behind these modes.",
      },
      {
        num: "2",
        name: "Spaces",
        body: "A Space is a workspace with its own custom instructions, files, and starting prompts. Use Spaces when you do a recurring kind of work — client research, monthly reports, supplier scans — and want consistent context every time. Spaces can be shared on Enterprise.",
      },
      {
        num: "3",
        name: "Labs",
        body: "Labs is Perplexity's deliverables surface. You describe what you want — a 12-slide deck on UK construction SaaS, a dashboard tracking three competitors, a simple invoice generator app — and Labs builds it. The output is a real artefact you can download, host or share.\n\nLaunched 29 May 2025. Available on Pro and above.",
      },
      {
        num: "4",
        name: "Comet",
        body: "Comet is Perplexity's browser. Visually it is Chromium — your bookmarks, extensions and Google sign-ins all work. The difference is the address bar: it is an agent. You can ask Comet to summarise the page, fill a form, complete a checkout, or run a multi-step task across tabs.\n\nLaunched 9 July 2025 (Max only). Free public download on Mac and Windows since October 2025. Comet Plus ($5/month) adds premium news access; it is included in Pro and Max.",
      },
      {
        num: "5",
        name: "Computer",
        body: "Computer is the desktop agent. It runs on Mac and Windows, can see your screen and operate apps, and runs orchestrated by Claude Opus 4.6 with roughly 20 other models on call for specialist tasks. It is genuinely capable — building entire decks while you make a coffee — and genuinely expensive if you do not watch credits.\n\nPricing context: Max users get 10,000 + 35,000 bonus credits per month at launch. Pro users have a smaller allocation.",
      },
      {
        num: "6",
        name: "Finance",
        body: "Finance is a separate surface with real-time market data, ticker pages, charts and earnings information. Data partners include Financial Modeling Prep, Quartr, Fiscal.ai, S&P Global and Polymarket. Enterprise plans add PitchBook, Statista and Wiley.",
      },
      {
        num: "7",
        name: "The API",
        body: "The Sonar API gives you Perplexity's search-and-cite capability through code. For SMEs, this is what powers an in-app search box that returns cited answers, a Slack bot that researches before answering, or a Zapier workflow that drafts a report when a CRM record changes.\n\nPricing is per-token, with separate request fees. Sonar Pro is the workhorse — competitive on cost, fast, with citations included.",
      },
    ],
  },

  enterprise: {
    heading: "What Enterprise adds",
    intro: "Enterprise Pro and Enterprise Max move you onto a properly governed footing.",
    features: [
      { name: "SAML SSO", desc: "Okta, Entra, Google." },
      { name: "SCIM", desc: "automated user provisioning (Enterprise Max, or Enterprise Pro at 50+ seats)." },
      { name: "Compliance", desc: "SOC 2 Type II, GDPR DPA, HIPAA (BAA available)." },
      { name: "No training on your data", desc: "ever — contractual." },
      { name: "Admin controls", desc: "usage analytics, content controls, model access." },
      { name: "400+ MCP connectors", desc: "Gmail, Drive, Slack, Notion, Linear, GitHub, Salesforce, HubSpot, Snowflake, and dozens more." },
      { name: "Enterprise Max only", desc: "PitchBook, Statista, Wiley source access; Compliance API." },
    ],
    connectors: {
      heading: "The connector advantage",
      body: "Perplexity's 400+ MCP connector library is one of the largest of any AI workspace. If your SME runs on HubSpot, Notion, Linear and Slack, you can wire all of them into a single search box.",
      tools: ["HubSpot", "Notion", "Slack", "Linear", "GitHub", "Salesforce", "Google Drive", "Snowflake", "Gmail", "Okta"],
    },
  },

  cometComputer: {
    heading: "Comet and Computer in more depth",
    comet: {
      heading: "Comet — when to use it",
      body: "Comet is most useful for two patterns. First: knowledge work where you flip between sources. Comet can read a tab, compare it to another, summarise both and draft an email — all in the address bar, without breaking your flow. Second: repetitive web tasks. Booking the same kind of meeting, filling the same form, gathering the same data — Comet can be taught a recipe and rerun it.",
      warning: "Be careful with credentials. Comet operates on your logged-in sessions; if you let it act on banking or HR systems, you are accepting agent-level risk. Most SMEs should restrict Comet to read-only patterns for the first 90 days.",
    },
    computer: {
      heading: "Computer — when to use it",
      body: "Computer is for jobs where the work is multi-step and the output is a deliverable: build a competitor dashboard, draft a 30-slide deck, fill a CRM with cleaned leads, monitor an RSS feed and draft a weekly digest. You can also schedule Computer tasks to run on a cron — \"every Monday at 8am, pull the new tenders from this site and draft a summary\".",
      credits: "Credits, not magic: Computer runs on credits. A complex deliverable can burn through hundreds of credits in one run. Always check the estimate before launching a long task and prefer Max if you plan to run Computer more than a few times a week.",
    },
  },

  api: {
    heading: "The Sonar API in one page",
    intro: "If you want Perplexity inside your own product, Slack workflow, or Zapier automation, the Sonar API is the route. It is the only major LLM API that does live web search by default and returns citations alongside the answer.",
    sample: `curl https://api.perplexity.ai/chat/completions \\
  -H 'Authorization: Bearer $PPLX_API_KEY' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "model": "sonar-pro",
    "messages": [
      {"role": "user", "content": "What did the Bank of England announce today?"}
    ]
  }'`,
    models: "Sonar Pro is the workhorse; Sonar Deep Research is the longer-running variant; Sonar Reasoning Pro is for problems that need chain-of-thought.",
  },

  governance: {
    heading: "Governance and risk",
    data: {
      heading: "Data and training",
      body: "Perplexity does not train on customer data on Enterprise. On Pro and Max, training is off by default for content you mark private, but you should still treat the consumer plan as you would any consumer SaaS — no PII, no client confidentials.",
    },
    compliance: {
      heading: "Compliance posture",
      items: [
        "SOC 2 Type II.",
        "GDPR — yes, with Data Processing Addendum on Enterprise.",
        "HIPAA — BAA available on Enterprise.",
      ],
    },
    quirks: {
      heading: "Region quirks",
      items: [
        "Buy with Pro / Shopping checkout is US-only as of May 2026.",
        "Personal Computer is Mac-only.",
        "Comet works everywhere — no UK restrictions.",
      ],
    },
  },

  workflows: {
    heading: "Seven SME workflows worth setting up this quarter",
    intro: "Pick two. Resist the temptation to do all seven.",
    items: [
      {
        num: "1",
        name: "A client Space with custom instructions",
        purpose: "Purpose: stop re-explaining each client to the search bar.",
        steps: [
          "Create a Space called \"Client – [Name]\".",
          "Add custom instructions: who they are, what they sell, what tone to use, what to ignore.",
          "Upload their brand guide, latest plan, key contracts.",
          "Any team member opening that Space gets consistent context.",
        ],
      },
      {
        num: "2",
        name: "A Labs deliverable: weekly competitor dashboard",
        purpose: "Purpose: a one-page view of three competitors, refreshed every Monday.",
        steps: [
          "In Labs, describe the dashboard: three competitors, four data points each, last 7 days, charts where useful.",
          "Labs builds it. Refine the layout once.",
          "Schedule a Computer task to rebuild it every Monday at 8am and email you the link.",
        ],
      },
      {
        num: "3",
        name: "Comet for repetitive browsing",
        purpose: "Purpose: replace the 20-minute Monday morning website check.",
        steps: [
          "Download Comet (free on Mac and Windows).",
          "Sign in to your usual tools.",
          "Teach Comet your Monday morning routine — visit these three sites, summarise updates, draft an email.",
          "Save it. Re-run with one click.",
        ],
      },
      {
        num: "4",
        name: "A Computer recurring task: industry news digest",
        purpose: "Purpose: a curated Monday-morning digest of your sector.",
        steps: [
          "In Computer, describe the task: \"Every Monday at 7am, search for new articles about [your sector] published in the last week. Filter for UK sources. Summarise the top 5 and email me the result.\"",
          "Approve the schedule.",
          "Computer runs every Monday — no further action needed.",
        ],
      },
      {
        num: "5",
        name: "Pro Search for citation-backed proposal research",
        purpose: "Purpose: stop writing proposals with vague stats.",
        steps: [
          "Open a fresh chat in your client Space.",
          "Switch to Pro Search.",
          "Ask the question precisely — \"What is the size of the UK independent café market, with sources from 2024 or later\".",
          "Paste the answer into the proposal with the citations as footnotes.",
        ],
      },
      {
        num: "6",
        name: "Finance for market briefings",
        purpose: "Purpose: ten-minute morning brief for the leadership team.",
        steps: [
          "Open Perplexity Finance.",
          "Pin your watchlist of tickers (clients, competitors, suppliers, key indices).",
          "Each morning, take a screenshot and a one-paragraph summary into Slack.",
        ],
      },
      {
        num: "7",
        name: "Enterprise: organisation-wide knowledge layer",
        purpose: "Purpose: one search bar across all your tools, governed properly.",
        steps: [
          "Move to Enterprise Pro (or Max if you have 50+ users).",
          "Set up SSO with your identity provider.",
          "Connect Drive, Slack, HubSpot, Notion and any other source of truth.",
          "Set permissions to honour the source system.",
          "Roll out to one team first — 10 staff is the right pilot size.",
        ],
      },
    ],
  },

  next: {
    heading: "What to do next",
    body: "Perplexity rewards SMEs who treat it as a workspace, not just a search box. Pick a plan, choose two workflows, set them up properly, and measure what you save in time over the first 30 days.",
    cta: {
      heading: "Working with Business With AI Strategist",
      body: "We help SMEs choose the right Perplexity setup — plan, Spaces, Labs deliverables, and Comet/Computer governance. If that sounds useful, get in touch.",
      author: "— Marnie Lee, Business With AI Strategist · businesswithaistrategist.com",
    },
  },
};
