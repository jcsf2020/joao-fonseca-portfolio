const T = {
  role: {
    pt: "Data Engineer · Platform Engineering · Databricks · dbt · GCP",
    en: "Data Engineer · Platform Engineering · Databricks · dbt · GCP"
  },
  portfolio: { pt: "Portfólio", en: "Portfolio" },
  "summary.title": { pt: "Resumo", en: "Summary" },
  "summary.text": {
    pt: "Data Engineer focado em plataformas de dados fiáveis, testáveis e orientadas a evidência. Trabalho hands-on em Azure Databricks, dbt/Snowflake e GCP, cobrindo ingestão, transformação, serving, data quality, CI e infraestrutura como código. O posicionamento profissional em Data Engineering começa em 2023; o trabalho B2B é realizado através da Famous Satellite.",
    en: "Data Engineer focused on reliable, testable and evidence-backed data platforms. Hands-on work across Azure Databricks, dbt/Snowflake and GCP, covering ingestion, transformation, serving, data quality, CI and infrastructure-as-code. Professional Data Engineering positioning starts in 2023; B2B delivery is routed through Famous Satellite."
  },
  "skills.title": { pt: "Competências Técnicas", en: "Technical Skills" },
  "skills.analytics": {
    pt: "Analytics Engineering: dbt · modelação dimensional · SCD Tipo 2 · data quality · lineage/docs",
    en: "Analytics Engineering: dbt · dimensional modelling · SCD Type 2 · data quality · lineage/docs"
  },
  "skills.platform": {
    pt: "Data Platform: Azure Databricks · ADLS Gen2 · ADF · Delta Lake · Unity Catalog · Snowflake · BigQuery · Cloud SQL · Terraform",
    en: "Data Platform: Azure Databricks · ADLS Gen2 · ADF · Delta Lake · Unity Catalog · Snowflake · BigQuery · Cloud SQL · Terraform"
  },
  "skills.programming": {
    pt: "Engenharia: Python · SQL · PySpark · Docker · GitHub Actions · Airflow/Prefect patterns",
    en: "Engineering: Python · SQL · PySpark · Docker · GitHub Actions · Airflow/Prefect patterns"
  },
  "projects.title": { pt: "Projetos Relevantes", en: "Relevant Projects" },
  "p1.title": { pt: "Real-Time Data Platform (GCP)", en: "Real-Time Data Platform (GCP)" },
  "p1.pitch": {
    pt: "Principal proof asset atual: plataforma event-driven em GCP com Pub/Sub, Cloud Run, Cloud SQL, BigQuery, dbt, Terraform e Python.",
    en: "Current strongest proof asset: an event-driven GCP platform using Pub/Sub, Cloud Run, Cloud SQL, BigQuery, dbt, Terraform and Python."
  },
  "p1.b1": { pt: "384 testes pytest; ruff clean; dbt compile/run/test em CI.", en: "384 pytest tests; ruff clean; dbt compile/run/test in CI." },
  "p1.b2": { pt: "Teste cloud limitado de 50.000 eventos com 0 erros de worker e 0 event_id duplicados.", en: "50,000-event bounded cloud run with 0 worker errors and 0 duplicate event IDs." },
  "p1.b3": { pt: "Terraform IaC com Workload Identity e evidência de plan sem drift.", en: "Terraform IaC with Workload Identity and no-drift plan evidence." },
  "p1.b4": { pt: "BigQuery analytical tier, quality workflow, observabilidade e incident/notification evidence.", en: "BigQuery analytical tier, quality workflow, observability and incident/notification evidence." },
  "p1.b5": { pt: "Boundary explícito: prova de portfólio limitada, não workload de cliente 24/7.", en: "Explicit boundary: bounded portfolio proof, not a 24/7 customer production workload." },
  "p2.title": { pt: "Azure Lakehouse ETL Platform", en: "Azure Lakehouse ETL Platform" },
  "p2.pitch": {
    pt: "Plataforma Azure Lakehouse validada com Databricks, ADLS Gen2, ADF, Delta Lake e Unity Catalog.",
    en: "Validated Azure Lakehouse platform with Databricks, ADLS Gen2, ADF, Delta Lake and Unity Catalog."
  },
  "p2.b1": { pt: "Arquitetura medallion Bronze → Silver → Gold.", en: "Bronze → Silver → Gold medallion architecture." },
  "p2.b2": { pt: "Gold layer SQL-first com factos, dimensões, agregações e views.", en: "SQL-first Gold layer with facts, dimensions, aggregates and views." },
  "p2.b3": { pt: "dq_summary_v1 e v_dq_status para validação de data quality.", en: "dq_summary_v1 and v_dq_status for data quality validation." },
  "p2.b4": { pt: "model_contract_v1 documenta grain, tipo de objeto e layer.", en: "model_contract_v1 documents grain, object type and layer." },
  "p2.b5": { pt: "Execução validada contra Databricks SQL Warehouse com artefactos committed.", en: "Validated execution against Databricks SQL Warehouse with committed artifacts." },
  "p3.title": { pt: "dbt + Snowflake Analytics Platform", en: "dbt + Snowflake Analytics Platform" },
  "p3.pitch": {
    pt: "Plataforma Analytics Engineering com dbt/Snowflake, modelação dimensional, SCD2, testes e observabilidade.",
    en: "Analytics Engineering platform with dbt/Snowflake, dimensional modelling, SCD2, testing and observability."
  },
  "p3.b1": { pt: "Arquitetura staging → intermediate → marts.", en: "staging → intermediate → marts architecture." },
  "p3.b2": { pt: "Star schema, date spine e snapshots SCD Tipo 2.", en: "Star schema, date spine and SCD Type 2 snapshots." },
  "p3.b3": { pt: "Testes not_null, unique, relationships e accepted_values.", en: "not_null, unique, relationships and accepted_values tests." },
  "p3.b4": { pt: "dbt Docs/lineage e orchestration/observability patterns.", en: "dbt Docs/lineage and orchestration/observability patterns." },
  "exp.title": { pt: "Experiência", en: "Experience" },
  "exp.1": {
    pt: "2023–Presente · Data Engineer / Platform Engineering · Entrega B2B através da Famous Satellite — desenho e implementação de plataformas de dados e sistemas analíticos em Azure, GCP e Snowflake/dbt. Foco em ingestão, transformação, serving, data quality, reprodutibilidade, CI e evidência operacional.",
    en: "2023–Present · Data Engineer / Platform Engineering · B2B delivery through Famous Satellite — design and implementation of data platforms and analytics systems across Azure, GCP and Snowflake/dbt. Focus on ingestion, transformation, serving, data quality, reproducibility, CI and operational evidence."
  },
  "exp.2": {
    pt: "2017–Presente · Co-founder · Famous Satellite — função empresarial e comercial. A data de fundação da empresa não é apresentada como início da experiência profissional em Data Engineering.",
    en: "2017–Present · Co-founder · Famous Satellite — company and commercial operating role. The company founding date is not presented as the start of professional Data Engineering tenure."
  },
  "certs.title": { pt: "Formação & Certificações", en: "Education & Certifications" },
  "certs.self": { pt: "Tokio School — Big Data & Analytics Engineering", en: "Tokio School — Big Data & Analytics Engineering" },
  "certs.credly": { pt: "Certificações técnicas verificadas em Credly", en: "Verified technical certifications on Credly" },
  "extras.title": { pt: "Extras", en: "Extras" },
  "extras.lang": { pt: "Línguas: Português (nativo), Inglês (fluente)", en: "Languages: Portuguese (native), English (fluent)" },
  "extras.remote": { pt: "Disponível para B2B remoto na UE", en: "Available for EU-remote B2B work" },
  "cta.title": { pt: "Contacto", en: "Contact" },
  "cta.text": {
    pt: "Aberto a engagements B2B em Data Engineering, Analytics Engineering e Data Platform. Contacto empresarial através da Famous Satellite.",
    en: "Open to B2B engagements in Data Engineering, Analytics Engineering and Data Platform. Company context through Famous Satellite."
  }
};
