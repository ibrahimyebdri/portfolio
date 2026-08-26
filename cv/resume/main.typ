#import "@preview/basic-resume:0.2.9": *

#let name = "Ibrahim Yebdri"
#let location = "Oran, Algeria"
#let email = "ib.yebdri@gmail.com"
#let github = "github.com/ibrahimyebdri"
#let linkedin = "linkedin.com/in/ibrahim-yebdri-96b198291"
#let phone = "+213 778 653 633"
#let personal-site = "ibrahimyebdri.github.io/portfolio"

#show: resume.with(
  author: name,
  location: location,
  email: email,
  github: github,
  linkedin: linkedin,
  phone: phone,
  personal-site: personal-site,
  accent-color: "#0f766e",
  font: "Liberation Sans",
  paper: "a4",
  author-position: left,
  personal-info-position: left,
)

== Profile

Master 2 student in Information Systems and Data focused on Data Engineering, cloud architectures and data quality. I build practical, documented projects with Python, SQL, TypeScript and data tools, and am seeking an international junior opportunity or apprenticeship.

== Education

#edu(
  institution: "USTO-MB, University of Science and Technology of Oran Mohamed Boudiaf",
  location: "Oran, Algeria",
  dates: dates-helper(start-date: "2026", end-date: "Present"),
  degree: "Master 2, Information Systems and Data",
)
- Ranked 1st out of 122 students in Master 1; selected coursework: Algorithms, IS Analysis, Industrial Optimisation and Cloud Computing.

#edu(
  institution: "USTO-MB, University of Science and Technology of Oran Mohamed Boudiaf",
  location: "Oran, Algeria",
  dates: dates-helper(start-date: "2022", end-date: "2025"),
  degree: "Licence, Information Systems and Software Engineering",
)
- Ranked 4th out of 184 students in the licence cohort; final-year project: TripDzAir tourism platform (17.5/20).

== Selected Projects

#project(
  name: "Data Quality Observatory",
  dates: "2026",
  url: "github.com/ibrahimyebdri/data-quality-observatory",
)
- Browser-based CSV profiling workspace with deterministic completeness, uniqueness, validity and date-quality checks.
- Built with TypeScript; produces an explainable score, findings, local run history and JSON export.

#project(
  name: "ETL Global Banks Pipeline",
  dates: "2026",
  url: "github.com/ibrahimyebdri/etl-global-banks-pipeline",
)
- Python ETL project for extracting, transforming and loading banking data into CSV and SQLite outputs.
- Uses selected fields, annual-volume transformations and structured CSV/JSON-style processing steps.

#project(
  name: "Ticleio — School Management Project",
  dates: "2026",
  url: "github.com/ibrahimyebdri/ticleio",
)
- Academic information-system project applying Python and SQL to structured school-management workflows.

#project(
  name: "TripDzAir",
  dates: "2025",
  url: "github.com/ibrahimyebdri/PFEL3",
)
- Final-year tourism platform with client and administration spaces, built with Next.js, PostgreSQL and Supabase.

== Certifications and Languages

- *Certifications*: Databricks Data Practitioner; Databricks Database Administrator; Databricks Database Developer; AWS Academy Graduate — Cloud Foundations; IBM via Coursera learning in RDBMS, SQL, Python and Data Engineering.
- *Languages*: Arabic native; French DELF B2; English B2.

== Technical Skills

- *Data and backend*: Python, Java, SQL, PySpark, Pandas, NumPy, Jupyter, PostgreSQL, Oracle Database and SQLite.
- *Cloud and tooling*: AWS S3, RDS, Auto Scaling, IAM, Git, GitHub Actions, Linux and reproducible project structure.
- *Web and applications*: TypeScript, JavaScript, React, Next.js, Tailwind CSS, React Native, Expo, Firebase and Supabase.
- *Systems foundations*: C, Java, sockets, distributed algorithms, simulation labs and academic software engineering.

== Engagement

- AIESEC Oran: Customer Experience Manager and Global Volunteer support (2025); SDG delegate (2024).
- GDG on Campus USTO-MB: core-team member and technical-event contributor; event organisation and Arduino innovation activities.
