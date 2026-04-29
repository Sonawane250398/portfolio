export const resumeData = {
  basics: {
    name: "Yash Sonawane",
    title: "Business Analyst",
    subtitle: "Financial Reporting · SQL Reconciliation · UAT · Source-to-Report Validation",
    summary: "I find the reconciliation breaks that don't surface until month-end, then build the controls that catch them at the source. 4+ years across financial reporting systems, SQL reconciliation frameworks, and UAT pipelines. The work that matters is upstream: validating data before it moves, not explaining why it's wrong after it reaches reporting.",
    location: "Fullerton, California, United States",
    email: "yashsonawane25.work@gmail.com",
    phone: "(562) 455-7892",
    links: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/yash-sonawane25" },
      { name: "GitHub", url: "https://github.com/Sonawane250398" },
      { name: "Resume", url: "https://drive.google.com/file/d/1276wZlKcsAGX5WMpkOAVX2vnCtDkPF1i/view?usp=sharing" }
    ],
    openTo: ["Business Analyst", "Business Systems Analyst", "Financial Systems Analyst", "Data Analyst", "Reporting Analyst"]
  },
  architecture: {
    title: "Financial Reporting Data Architecture",
    description: "End-to-end data pipeline I designed and own — from raw transaction sources to executive dashboards.",
    steps: [
      { label: "Source Transaction Systems", detail: "Raw financial & operational data" },
      { label: "SQL Reconciliation Framework", detail: "CTEs · Joins · Aggregations · Variance Detection" },
      { label: "Python Validation Pipeline", detail: "Pandas · Automated checks · Exception classification" },
      { label: "Reporting Control Framework", detail: "5 domains · Checkpoint validation · Audit trails" },
      { label: "UAT Validation Framework", detail: "Edge case coverage · Release stability · Zero critical issues" },
      { label: "Executive Dashboards", detail: "Tableau · Dash · 12 KPIs" }
    ]
  },
  experience: [
    {
      company: "kakarX",
      role: "Business Analyst – Financial Reporting Systems",
      dates: "Sep 2024 – Present",
      location: "Fullerton, CA",
      bullets: [
        "Built a SQL reconciliation framework across source, transformed, and reporting-layer datasets — validating 5,000+ records monthly, catching mismatches, missing records, and variances before data reaches reporting. Reduced discrepancies by 20%, cut investigation time by 30%, saved 10+ hours of manual work weekly.",
        "Defined system requirements and validation logic for 3 financial reporting pipelines — standardized acceptance criteria eliminated mid-sprint requirement changes across 8–10 stories per cycle.",
        "Deployed Tableau dashboards tracking 12 KPIs across reporting accuracy and exception visibility — surfaced pipeline failures before stakeholder delivery and cut manual investigation by 30%.",
        "Delivered 6 consecutive zero-defect releases across 3 business units — UAT scenarios, business rule validation, and defect tracking built into every sprint cycle."
      ]
    },
    {
      company: "Yash Industrials",
      role: "Business Analyst",
      dates: "May 2019 – Jul 2022",
      location: "Pune, India",
      bullets: [
        "Built SQL-based financial reporting workflows across procurement, inventory, and revenue data for 3 product lines — reduced month-end close errors by 15% and shortened reporting cycle by 2 days.",
        "Eliminated 6–8 hours of weekly manual reporting by building Tableau dashboards for revenue, inventory velocity, and operational throughput — used by 4 stakeholder groups across finance, operations, and management teams.",
        "Documented data lineage and reporting logic across operational systems, reporting databases, and BI layers — reducing analyst onboarding time by an estimated 30% through clearer source-to-report mapping.",
        "Reconciled operational records against summarized financial outputs each month, identifying discrepancies before management review and improving reporting accuracy for P&L inputs."
      ]
    }
  ],
  achievements: [
    { metric: "20%", context: "reduction in recurring reconciliation discrepancies" },
    { metric: "30%", context: "faster break investigation time" },
    { metric: "10+", context: "hours of manual investigation saved weekly" },
    { metric: "6–8 hrs", context: "of manual reporting eliminated weekly" },
    { metric: "Zero", context: "critical post-deployment issues across 6 consecutive releases" },
    { metric: "15%", context: "reduction in month-end reporting errors" },
    { metric: "2 days", context: "shortened reporting cycle time" },
    { metric: "30%", context: "faster analyst onboarding through clearer data lineage" }
  ],
  projects: [
    {
      title: "Financial Reporting Failure Detection System",
      description:
        "Built an end-to-end automated detection system across a 3-layer financial pipeline (Source → ETL → Reporting) with real-world failures injected — missing records, duplicates, amount mismatches, invalid GL category mappings, and balance variances. Engineered 5 SQL reconciliation checks and a Python severity classification engine (CRITICAL/HIGH/MEDIUM) that caught 80 exceptions across 1,000 transactions with zero manual steps. Outputs audit-ready exception reports before stakeholder delivery.",
      stack: ["Python", "SQL", "Pandas", "Tableau"],
      github: "https://github.com/Sonawane250398/financial-failure-detection-system",
      highlights: [
        "3-layer pipeline simulation (Source -> ETL -> Reporting)",
        "5 SQL reconciliation checks with severity classification",
        "80 exceptions detected across 1,000 transactions (zero manual steps)",
        "Audit-ready CSV exception report output for stakeholder delivery"
      ],
      bullets: [
        "80 exceptions detected — 50 CRITICAL, 30 HIGH",
        "5 failure types: missing records, duplicates, amount mismatches, invalid category mapping, balance variances",
        "Zero manual steps — fully automated detection engine",
        "Audit-ready CSV exception report output"
      ],
      links: [
        { label: "GitHub", url: "https://github.com/Sonawane250398/financial-failure-detection-system" },
        { label: "Dashboard", url: "https://public.tableau.com/app/profile/yash.sonawane4448/viz/FinancialReportingFailureDetectionExceptionDashboard/FinancialReportingFailureDetectionExceptionDashboard?publish=yes" }
      ],
      liveEmbedUrl:
        "https://public.tableau.com/views/FinancialReportingFailureDetectionExceptionDashboard/FinancialReportingFailureDetectionExceptionDashboard?:embed=yes&:showVizHome=no",
      caseStudy: `Every month-end close carries the same risk: data that looked clean in 
the source layer arrives broken at the reporting layer. Records get 
dropped in ETL. Amounts get inflated by conversion bugs. Categories get 
mapped to UNKNOWN and fail to hit the GL. None of it surfaces until a 
stakeholder flags a number that doesn't add up — by which point the 
damage is already done.

I built this system to catch those failures before they reach anyone.

The pipeline simulates three layers of a real financial reporting 
workflow — Source, ETL-Transformed, and Reporting — with five 
real-world failure types injected at different stages. A SQL 
reconciliation engine runs five checks across all three layers 
simultaneously. Every exception gets timestamped, classified by 
severity (CRITICAL, HIGH, MEDIUM), and written to an audit-ready 
output before any data reaches a stakeholder.

80 exceptions caught across 1,000 transactions. 50 CRITICAL. 
30 HIGH. Zero manual steps.

The business case is simple: one undetected balance variance in a 
month-end report can trigger a restatement. One missing record in 
an AR aging report can misstate cash flow. This system is the 
control layer that sits between the pipeline and the boardroom.`
    },
    {
      title: "Financial Analytics Dashboard",
      date: "Mar 2026",
      description:
        "Interactive financial performance dashboard analyzing $174M in sales across 5 segments, 5 countries, and 3 years — with 8 dynamic charts that update in real time.",
      stack: ["Python", "Dash", "Plotly", "Pandas", "Data Analytics"],
      github: "https://github.com/Sonawane250398/financial-dashboard",
      highlights: [
        "$174M in sales analyzed across segments, countries, and years",
        "5 segments · 5 countries · 3 years of performance data",
        "8 dynamic Plotly charts with real-time updates",
        "Python Dash app with Pandas-driven analytics"
      ],
      bullets: [
        "Interactive financial performance dashboard analyzing $174M in sales across 5 segments, 5 countries, and 3 years.",
        "Eight dynamic charts built with Plotly update in real time as users explore filters and selections.",
        "Aggregations and segment views powered by Pandas for multi-year, multi-country analysis.",
        "Deployed as a live web app so stakeholders can explore KPIs without static report cycles."
      ],
      links: [
        { label: "Live", url: "https://financial-dashboard-bu2r.onrender.com" },
        { label: "GitHub", url: "https://github.com/Sonawane250398/financial-dashboard" }
      ],
      liveEmbedUrl: "https://financial-dashboard-bu2r.onrender.com"
    },
    {
      title: "Financial Data Quality & Reporting Pipeline",
      date: "Jan 2026 – Mar 2026",
      description: "Built an automated Python pipeline to validate financial transaction data across source and reporting systems. Runs 5 automated validation checks — null detection, duplicate checks, variance analysis, category and currency validation — and classifies every exception by severity (CRITICAL/HIGH/MEDIUM/LOW). Outputs a structured exception report and visual dashboard showing pass rates by department, variance by category, and exception trends over time.",
      stack: ["Python", "Pandas", "Matplotlib", "Seaborn", "Faker", "Data Validation", "ETL"],
      github: "https://github.com/Sonawane250398/financial-reporting-pipeline",
      highlights: [
        "1,000 transactions processed end-to-end",
        "100 discrepancies detected and classified automatically",
        "90% pass rate on variance checks",
        "0 manual steps — fully automated from ingestion to dashboard"
      ],
      bullets: [
        "Automated end-to-end Python pipeline validating financial transaction data across source and reporting layers — 5 validation checks covering null detection, duplicate records, variance thresholds, category mapping, and currency integrity.",
        "Classified 100 exceptions across 1,000 transactions by severity (CRITICAL/HIGH/MEDIUM/LOW) — structured exception reports generated automatically with zero manual triage steps.",
        "Achieved 90% pass rate on variance checks across the full transaction set — pipeline outputs audit-ready reports and dashboards without manual intervention."
      ],
      demoRows: [
        { check: "Null Check", total: 1000, passed: 1000, failed: 0, passRate: "100%", status: "PASS" },
        { check: "Duplicate Check", total: 1000, passed: 1000, failed: 0, passRate: "100%", status: "PASS" },
        { check: "Variance Check", total: 1000, passed: 900, failed: 100, passRate: "90%", status: "FAIL" },
        { check: "Category Validation", total: 1000, passed: 1000, failed: 0, passRate: "100%", status: "PASS" },
        { check: "Currency Validation", total: 1000, passed: 1000, failed: 0, passRate: "100%", status: "PASS" }
      ],
      links: [{ label: "GitHub", url: "https://github.com/Sonawane250398/financial-reporting-pipeline" }]
    },
    {
      title: "Source-to-Report Financial Reconciliation Platform",
      stack: ["SQL", "CTEs", "Window Functions", "Aggregations"],
      bullets: [
        "Built a SQL reconciliation workflow comparing source, transformed, and reporting-layer finance data across validation checkpoints — detecting missing records, duplicate entries, GL mapping errors, and balance variances before data reaches final reporting.",
        "Produced structured exception outputs and reconciliation summaries at each pipeline stage — giving audit teams a clear record of what failed, where it failed, and what the variance was."
      ],
      sqlSnippet: `SELECT
  s.account_id,
  SUM(s.amount)                    AS source_total,
  SUM(r.amount)                    AS reporting_total,
  SUM(s.amount) - SUM(r.amount)    AS variance,
  CASE
    WHEN ABS(SUM(s.amount) - SUM(r.amount)) > 1000 THEN 'HIGH'
    WHEN ABS(SUM(s.amount) - SUM(r.amount)) > 100  THEN 'MEDIUM'
    ELSE 'LOW'
  END AS severity
FROM source_transactions s
LEFT JOIN reporting_table r
  ON s.account_id = r.account_id
GROUP BY s.account_id
HAVING SUM(s.amount) <> SUM(r.amount);`,
      demoRows: [
        { account: "ACC-1001", source: "$1,205,432", reporting: "$1,201,211", variance: "$4,221", status: "MISMATCH", severity: "HIGH" },
        { account: "ACC-1002", source: "$843,100", reporting: "$843,100", variance: "$0", status: "MATCHED", severity: "NONE" },
        { account: "ACC-1003", source: "$512,000", reporting: "$0", variance: "$512,000", status: "MISSING", severity: "CRITICAL" },
        { account: "ACC-1004", source: "$320,750", reporting: "$319,900", variance: "$850", status: "MISMATCH", severity: "MEDIUM" },
        { account: "ACC-1005", source: "$198,400", reporting: "$198,400", variance: "$0", status: "MATCHED", severity: "NONE" }
      ],
      links: [{ label: "GitHub", url: "https://github.com/Sonawane250398/source-to-report-financial-reconciliation-platform" }]
    },
    {
      title: "Financial Reporting Controls Monitoring Model",
      stack: ["Validation Templates", "Control Checkpoints", "SQL", "Audit Trails"],
      bullets: [
        "Built a SQL-based controls layer monitoring reporting exceptions across revenue, P&L, inventory, expenses, and payroll — standardized variance thresholds and exception checkpoints applied consistently across all financial domains.",
        "Designed for audit-ready output — every exception flagged with a control checkpoint reference, variance amount, and timestamp before management review."
      ],
      sqlSnippet: `WITH control_status AS (
  SELECT
    domain,
    checkpoint_name,
    expected_value,
    actual_value,
    CASE WHEN expected_value = actual_value
         THEN 'PASS' ELSE 'FAIL'
    END AS status
  FROM reporting_controls
)
SELECT domain,
  COUNT(*) FILTER (WHERE status = 'FAIL') AS failures,
  COUNT(*) AS total_checks
FROM control_status
GROUP BY domain
ORDER BY failures DESC;`,
      demoRows: [
        { domain: "P&L", totalChecks: 4, passed: 2, failed: 2, passRate: "50%", risk: "CRITICAL" },
        { domain: "Inventory", totalChecks: 4, passed: 3, failed: 1, passRate: "75%", risk: "HIGH" },
        { domain: "Expenses", totalChecks: 4, passed: 3, failed: 1, passRate: "75%", risk: "HIGH" },
        { domain: "Payroll", totalChecks: 4, passed: 4, failed: 0, passRate: "100%", risk: "LOW" },
        { domain: "Revenue", totalChecks: 4, passed: 4, failed: 0, passRate: "100%", risk: "LOW" }
      ],
      links: [{ label: "GitHub", url: "https://github.com/Sonawane250398/financial-reporting-controls-monitoring-model" }]
    },
    {
      title: "Financial Reporting UAT and Release Readiness Framework",
      stack: ["UAT Methodology", "Test Scenarios", "Edge Case Coverage", "Release Validation"],
      bullets: [
        "Designed a structured UAT framework for a financial reporting enhancement — business requirements mapped directly to user stories, acceptance criteria, edge case test scenarios, and defect tracking across the full release cycle.",
        "Achieved zero open defects at UAT sign-off — release readiness confirmed across all dependent reporting workflows before each deployment checkpoint."
      ],
      sqlSnippet: `-- Edge case: negative amount detection
SELECT
  transaction_id,
  account_id,
  amount,
  'NEGATIVE_AMOUNT' AS issue_type
FROM staging_transactions
WHERE amount < 0

UNION ALL

-- Edge case: duplicate transaction IDs
SELECT
  transaction_id,
  account_id,
  amount,
  'DUPLICATE_ID' AS issue_type
FROM staging_transactions
WHERE transaction_id IN (
  SELECT transaction_id
  FROM staging_transactions
  GROUP BY transaction_id
  HAVING COUNT(*) > 1
);`,
      demoRows: [
        { testId: "TC-001", scenario: "Row count validation", type: "Data Validation", status: "PASS", severity: "HIGH" },
        { testId: "TC-002", scenario: "Null field detection", type: "Edge Case", status: "PASS", severity: "HIGH" },
        { testId: "TC-003", scenario: "Duplicate transaction IDs", type: "Edge Case", status: "FAIL", severity: "CRITICAL" },
        { testId: "TC-004", scenario: "Aggregate balance match", type: "Reconciliation", status: "PASS", severity: "HIGH" },
        { testId: "TC-005", scenario: "Negative amount detection", type: "Edge Case", status: "PASS", severity: "MEDIUM" },
        { testId: "TC-006", scenario: "Source vs reporting totals", type: "Reconciliation", status: "FAIL", severity: "HIGH" }
      ],
      releaseReadiness: { total: 25, passed: 22, failed: 2, blocked: 1, score: "88%", status: "CONDITIONAL APPROVAL" },
      links: [{ label: "GitHub", url: "https://github.com/Sonawane250398/financial-reporting-uat-release-readiness-framework" }]
    },
    {
      title: "Requirements Traceability Matrix (RTM)",
      stack: ["Requirements Management", "Excel", "SQL", "Agile", "UAT"],
      bullets: [
        "Built a complete RTM mapping 13 functional requirements to user stories, test cases, and sprint delivery for a SQL-based financial reconciliation system — 100% requirement coverage confirmed across 4 sprints with zero open defects at UAT sign-off.",
        "Includes a Coverage Summary dashboard with auto-calculated pass rates and a Sprint Tracker showing delivery status per sprint — built for audit review and stakeholder sign-off."
      ],
      sqlSnippet: `SELECT
  category,
  COUNT(DISTINCT req_id)                          AS total_reqs,
  COUNT(DISTINCT test_case_id)                    AS test_cases_linked,
  COUNT(DISTINCT CASE WHEN coverage_status = 'Covered'
      THEN req_id END)                            AS covered,
  ROUND(
    COUNT(DISTINCT CASE WHEN coverage_status = 'Covered'
        THEN req_id END) * 100.0 /
    COUNT(DISTINCT req_id), 0)                    AS coverage_pct
FROM rtm
GROUP BY category
ORDER BY total_reqs DESC;`,
      demoRows: [
        { category: "Reconciliation Logic", totalReqs: 5, testCases: 8, covered: 5, coveragePct: "100%" },
        { category: "Reporting Controls", totalReqs: 4, testCases: 6, covered: 4, coveragePct: "100%" },
        { category: "UAT Validation", totalReqs: 3, testCases: 5, covered: 3, coveragePct: "100%" },
        { category: "Release Readiness", totalReqs: 1, testCases: 3, covered: 1, coveragePct: "100%" }
      ],
      rtmSummary: { totalReqs: 13, covered: 13, sprints: 4, openDefects: 0, coveragePct: "100%" },
      links: [{ label: "GitHub", url: "https://github.com/Sonawane250398/requirements-traceability-matrix" }]
    }
  ],
  skills: [
    {
      category: "Business Analysis",
      items: [
        "Source-to-report validation",
        "User stories",
        "Acceptance criteria",
        "BRD",
        "Requirements traceability",
        "Stakeholder management",
        "Financial analysis",
        "Exception classification",
        "SDLC support",
        "Process mapping",
        "Workflow documentation"
      ]
    },
    {
      category: "Testing & Delivery",
      items: [
        "UAT",
        "Test scenario design",
        "Defect documentation",
        "Release readiness",
        "Cross-system validation"
      ]
    },
    {
      category: "Financial & Reporting Systems",
      items: [
        "Financial reporting",
        "Reconciliation",
        "Reporting controls",
        "Variance analysis",
        "Data lineage",
        "Source-to-report validation",
        "Data Governance"
      ]
    },
    {
      category: "Data & Tools",
      items: [
        "SQL",
        "Tableau",
        "Power BI",
        "Python",
        "Pandas",
        "Dash",
        "Plotly",
        "Advanced Excel",
        "ETL Validation",
        "Jira",
        "Confluence",
        "Agile/Scrum"
      ]
    }
  ],
  education: [
    {
      institution: "California State University, Dominguez Hills",
      degree: "Master of Science in Computer Science",
      location: "Carson, CA",
      dates: "Aug 2022 – Aug 2024",
      details: "Courses: Database Management, Data Mining, Machine Learning, Software Engineering, Algorithms"
    },
    {
      institution: "MIT College of Engineering, Pune",
      degree: "Bachelor of Engineering in Information Technology",
      location: "Pune, India",
      dates: "Aug 2016 – May 2021",
      details: "Courses: Cloud Computing, Operating Systems, Data Structures, Computer Networks, Machine Learning"
    }
  ],
  certifications: [
    {
      name: "Google Advanced Data Analytics",
      issuer: "Google",
      date: "Apr 2026",
      url: "https://www.coursera.org/account/accomplishments/specialization/C3QIW8MGM190"
    },
    {
      name: "Google Business Intelligence",
      issuer: "Google",
      date: "Apr 2026",
      url: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/Q6QAQ58G11DY"
    },
    {
      name: "SQL Advanced",
      issuer: "HackerRank",
      date: "Apr 2026",
      url: "https://www.hackerrank.com/certificates/8eecf25c6664"
    },
    {
      name: "SQL for Data Analysis",
      issuer: "Kaggle",
      date: "Mar 2026",
      url: ""
    }
  ],
  awards: [],
  extra: [
    "Open to BA, BSA, and Data Analyst roles in fintech, banking, and enterprise SaaS — available immediately"
  ]
};