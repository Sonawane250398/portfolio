export const resumeData = {
  basics: {
    name: "Yash Sonawane",
    title: "Business Analyst",
    subtitle: "Financial Reporting · Reconciliation · UAT & Reporting Controls",
    summary: "Business Analyst with 4+ years building financial reporting systems that teams can trust. I work across the full BA lifecycle — requirements, SQL validation, UAT, and release readiness — connecting finance teams, engineering, and stakeholders. Reduced reconciliation discrepancies by 20%, eliminated 6–8 hrs of manual reporting weekly, and delivered 6 releases with zero critical issues. Currently open to BA and BSA roles in fintech, banking, or enterprise SaaS.",
    location: "Fullerton, California, United States",
    email: "yashsonawane25.work@gmail.com",
    phone: "(562) 455-7892",
    links: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/yash-sonawane25" },
      { name: "GitHub", url: "https://github.com/Sonawane250398" }
    ],
    openTo: ["Business Analyst", "Business Systems Analyst", "Financial Systems Analyst"]
  },
  architecture: {
    title: "Financial Reporting Data Architecture",
    description: "End-to-end data pipeline I designed and own — from raw transaction sources to executive dashboards.",
    steps: [
      { label: "Source Transaction Systems", detail: "Raw financial & operational data" },
      { label: "SQL Reconciliation Framework", detail: "CTEs · Joins · Aggregations · Variance Detection" },
      { label: "Reporting Control Framework", detail: "5 domains · Checkpoint validation · Audit trails" },
      { label: "UAT Validation Framework", detail: "Edge case coverage · Release stability" },
      { label: "Executive Dashboards", detail: "Tableau · 12 KPIs · Finance & Engineering leadership" }
    ]
  },
  experience: [
    {
      company: "Kakar Ventures",
      role: "Business Analyst – Financial Reporting Systems",
      dates: "Sep 2024 – Present",
      location: "Fullerton, CA",
      bullets: [
        "Reduced recurring reporting discrepancies by 20% and break investigation time by 30% by building a reusable SQL reconciliation framework across source, transformed, and reporting-layer datasets.",
        "Led requirements clarification for 3 financial reporting systems, translating finance and business needs into structured validation logic, reporting rules, and delivery scope.",
        "Delivered Tableau dashboards tracking 12 KPIs across reporting accuracy, cycle time, and delivery performance, improving visibility into exceptions, delays, and reporting quality.",
        "Supported 6 consecutive releases with zero critical post-deployment issues by defining UAT scenarios, validating business rules, documenting defects, and coordinating release-readiness checks across dependent workflows."
      ]
    },
    {
      company: "Yash Industrials",
      role: "Business Analyst",
      dates: "May 2019 – Jul 2022",
      location: "Pune, India",
      bullets: [
        "Reduced month-end reporting errors by 15% and shortened reporting cycle time by 2 days by analyzing trade and transactional data across 3 product lines using SQL and Excel.",
        "Eliminated 6–8 hours of weekly manual reporting by building Tableau dashboards for revenue, inventory velocity, and operational throughput used by 4 stakeholder groups.",
        "Documented data lineage and reporting logic across operational systems, reporting databases, and BI layers, improving traceability and accelerating analyst onboarding.",
        "Reconciled operational records against summarized financial outputs each month, identifying discrepancies before management review and improving reporting accuracy for P&L inputs."
      ]
    }
  ],
  achievements: [
    { metric: "20%", context: "reduction in recurring reconciliation discrepancies" },
    { metric: "6–8 hrs", context: "of manual reporting effort eliminated weekly" },
    { metric: "Zero", context: "critical post-deployment issues across 6 consecutive releases" },
    { metric: "15%", context: "reduction in month-end reporting errors" },
    { metric: "2 days", context: "shortened reporting cycle time" },
    { metric: "25%", context: "reduction in manual adjustment rate" },
    { metric: "30%", context: "reduced break investigation time" },
    { metric: "20%", context: "improved reporting cycle predictability" }
  ],
  projects: [
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
        "Built an automated Python pipeline to validate financial transaction data across source and reporting systems.",
        "Implemented 5 automated validation checks — null detection, duplicate checks, variance analysis, category validation, and currency validation.",
        "Classified each exception by severity (CRITICAL/HIGH/MEDIUM/LOW) and generated structured reports and dashboards.",
        "Processed 1,000 transactions end-to-end, detected and classified 100 discrepancies, and achieved 90% pass rate on variance checks."
      ],
      demoRows: [
        { account: "ACC-1001", source: "$1,205,432", reporting: "$1,201,211", variance: "$4,221", status: "MISMATCH", severity: "HIGH" },
        { account: "ACC-1002", source: "$843,100", reporting: "$843,100", variance: "$0", status: "MATCHED", severity: "NONE" },
        { account: "ACC-1003", source: "$512,000", reporting: "$0", variance: "$512,000", status: "MISSING", severity: "CRITICAL" },
        { account: "ACC-1004", source: "$320,750", reporting: "$319,900", variance: "$850", status: "MISMATCH", severity: "MEDIUM" },
        { account: "ACC-1005", source: "$198,400", reporting: "$198,400", variance: "$0", status: "MATCHED", severity: "NONE" }
      ],
      links: [{ label: "GitHub", url: "https://github.com/Sonawane250398/financial-reporting-pipeline" }]
    },
    {
      title: "Source-to-Report Financial Reconciliation Platform",
      stack: ["SQL", "CTEs", "Window Functions", "Aggregations"],
      bullets: [
        "Built a SQL-based reconciliation workflow comparing source, transformed, and reporting-layer finance data to detect missing records, duplicate entries, mapping errors, and balance variances across validation checkpoints; produced exception outputs and reconciliation summaries to improve reporting accuracy before final reporting."
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
      links: [{ label: "GitHub", url: "https://github.com/Sonawane250398/sql-reconciliation-framework" }]
    },
    {
      title: "Financial Reporting Controls Monitoring Model",
      stack: ["Validation Templates", "Control Checkpoints", "SQL", "Audit Trails"],
      bullets: [
        "Built a SQL-based controls layer to monitor reporting exceptions across revenue, P&L, inventory, expenses, and payroll; standardized variance checks and exception monitoring to improve reporting integrity across financial domains."
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
      links: [{ label: "GitHub", url: "https://github.com/Sonawane250398/financial-reporting-control-framework" }]
    },
    {
      title: "Financial Reporting UAT and Release Readiness Framework",
      stack: ["UAT Methodology", "Test Scenarios", "Edge Case Coverage", "Release Validation"],
      bullets: [
        "Designed a structured UAT framework for a reporting enhancement, including business requirements, user stories, acceptance criteria, test cases, defect tracking, and release-readiness checkpoints; improved test coverage, requirement traceability, and deployment readiness across reporting workflows."
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
      links: [{ label: "GitHub", url: "https://github.com/Sonawane250398/financial-reporting-uat-framework" }]
    },
    {
      title: "Requirements Traceability Matrix (RTM)",
      stack: ["Requirements Management", "Excel", "SQL", "Agile", "UAT"],
      bullets: [
        "Built a complete RTM mapping 13 functional requirements to user stories, test cases, and sprint delivery for a SQL-based financial reconciliation system.",
        "Achieved 100% requirement coverage across 4 sprints with zero open defects at UAT sign-off.",
        "Includes Coverage Summary dashboard with auto-calculated pass rate and Sprint Tracker showing delivery by sprint."
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
        "Requirements gathering",
        "User stories",
        "Acceptance criteria",
        "Requirements traceability",
        "Stakeholder management",
        "SDLC support",
        "Process Mapping",
        "Workflow Documentation",
        "Stakeholder Reporting"
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
        "Advanced Excel",
        "ETL validation",
        "Jira",
        "Confluence",
        "Agile/Scrum",
        "Power BI",
        "Python (Basic)"
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
      name: "AWS Academy Graduate - AWS Academy MLU Machine Learning through Application"
    }
  ],
  awards: [],
  extra: [
    "Open to: Business Analyst | Business Systems Analyst | Financial Systems Analyst"
  ]
};