export const resumeData = {
  basics: {
    name: "Yash Sonawane",
    title: "Business Analyst",
    subtitle: "Financial Systems · SQL Validation · UAT · Tableau · BRD Documentation",
    summary: "Business Analyst with 4+ years of experience building and owning financial and operational reporting systems through SQL-based validation, Tableau dashboards, UAT processes, and auditable controls. Reduced reconciliation discrepancies by 20%, eliminated 6–8 hours of manual reporting weekly, and supported 6 consecutive releases with zero critical post-deployment issues. Skilled in requirements gathering, BRD/FRD documentation, user stories, stakeholder coordination, and reporting controls.",
    location: "Fullerton, California, United States",
    email: "yashsonawane25.work@gmail.com",
    phone: "(562) 455-7892",
    links: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/yash-sonawane25" },
      { name: "GitHub", url: "https://github.com/Sonawane250398" }
    ],
    openTo: ["Business Analyst", "Senior Business Analyst", "Business Systems Analyst", "Financial Systems Analyst"]
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
      role: "Business Analyst – Financial Systems",
      dates: "Sep 2024 – Present (1 year 7 months)",
      location: "Fullerton, California, United States",
      bullets: [
        "Owned end-to-end requirements lifecycle for 3 internal financial reporting systems serving finance, operations, and engineering — producing BRDs, user stories, and traceability matrices that accelerated sprint delivery to 8–10 stories per sprint.",
        "Engineered multi-layer SQL reconciliation framework using CTEs, joins, and aggregations to compare source vs. reporting datasets; eliminated 20% of recurring discrepancies and reduced break investigation time by ~30%.",
        "Designed repeatable UAT test scenarios covering edge cases in financial controls and release validation; drove zero critical post-deployment issues across 6 consecutive releases.",
        "Led variance and break analysis across release cycles by validating record counts, field-level aggregates, and control checkpoints — strengthening audit readiness and reporting accuracy.",
        "Defined and tracked 12 reporting KPIs across delivery, accuracy, and cycle time dimensions; surfaced through Tableau dashboards to engineering and finance leadership, improving reporting cycle predictability by 20%."
      ]
    },
    {
      company: "Yash Industrials",
      role: "Business Analyst",
      dates: "May 2019 – Aug 2022 (3 years 4 months)",
      location: "Pune, Maharashtra, India",
      bullets: [
        "Analyzed trade and transactional datasets using SQL and Excel across 3 product lines, identifying variance drivers that reduced month-end reporting errors by 15% and shortened reporting cycle time by 2 days.",
        "Built executive KPI dashboards in Tableau tracking revenue, inventory velocity, and operational throughput — eliminating 6–8 hours of manual reporting effort per week across 4 stakeholder teams.",
        "Designed and enforced record-level validation checks and standardized reporting templates, reducing manual adjustment rate by ~25% and improving cross-team data consistency.",
        "Documented full data lineage across operational systems, reporting databases, and BI layers — enabling audit traceability and accelerating onboarding for new analysts.",
        "Reconciled operational records against summarized financial outputs monthly; detected and resolved discrepancies before management review, improving accuracy of P&L inputs."
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
      title: "SQL-Based Financial Reconciliation Framework",
      stack: ["SQL", "CTEs", "Window Functions", "Aggregations"],
      bullets: [
        "Designed multi-layer reconciliation logic using CTEs and window functions to compare source and reporting outputs; introduced automated validation checkpoints that cut recurring discrepancies by ~15% and reduced manual investigation cycles."
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
      exampleOutput: {
        source: "$1,205,432",
        reporting: "$1,201,211",
        variance: "$4,221",
        status: "MISMATCH",
        severity: "HIGH"
      },
      links: [{ label: "GitHub", url: "https://github.com/Sonawane250398/sql-reconciliation-framework" }]
    },
    {
      title: "Financial Reporting Control Framework",
      stack: ["Validation Templates", "Control Checkpoints", "SQL", "Audit Trails"],
      bullets: [
        "Standardized validation templates and defined control checkpoints across 5 reporting domains; improved traceability for audit reviews and reduced manual adjustments by streamlining exception management."
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
      links: [{ label: "GitHub", url: "https://github.com/Sonawane250398/financial-reporting-control-framework" }]
    },
    {
      title: "UAT Framework for Financial Reporting Releases",
      stack: ["UAT Methodology", "Test Scenarios", "Edge Case Coverage", "Release Validation"],
      bullets: [
        "Built a repeatable UAT methodology aligned to reporting controls and edge cases; framework adopted across 6 releases, improving release stability and eliminating critical post-deployment issues."
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
      links: [{ label: "GitHub", url: "https://github.com/Sonawane250398/requirements-traceability-matrix" }]
    }
  ],
  skills: [
    {
      category: "Languages & Query",
      items: ["SQL (CTEs, window functions, joins, aggregations, subqueries)", "Python (pandas, NumPy)", "Advanced Excel (PivotTables, VLOOKUP/INDEX-MATCH, Power Query)"]
    },
    {
      category: "Analytics & BI",
      items: ["Tableau", "KPI definition", "Trend analysis", "Variance analysis", "A/B testing fundamentals", "Data integrity monitoring"]
    },
    {
      category: "Data & Reporting",
      items: ["Data reconciliation", "ETL validation", "Record-level integrity checks", "Data lineage documentation", "Exception management"]
    },
    {
      category: "Business Analysis",
      items: ["Requirements gathering", "BRD/FRD documentation", "User stories", "UAT coordination", "Stakeholder workshops", "SDLC support"]
    },

    {
      category: "Tools & Methods",
      items: ["Jira", "Confluence", "Git", "Agile/Scrum"]
    }
  ],
  education: [
    {
      institution: "California State University, Dominguez Hills",
      degree: "Master of Science (M.S.), Computer Science",
      location: "Fullerton, CA",
      dates: "Aug 2022 – Aug 2024",
      details: "Courses: Database Management, Data Mining, Machine Learning, Software Engineering, Algorithms"
    },
    {
      institution: "MIT College of Engineering, Pune",
      degree: "Bachelor of Engineering (B.E.), Information Technology",
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
    "Open to: Business Analyst | Senior Business Analyst | Business Systems Analyst | Financial Systems Analyst"
  ]
};