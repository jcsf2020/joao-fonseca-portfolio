const T = {
  role: {
    pt: "Data Engineer · Azure Databricks · Lakehouse · SQL · Python",
    en: "Data Engineer · Azure Databricks · Lakehouse · SQL · Python"
  },

  portfolio: { pt: "Portfólio", en: "Portfolio" },

  "summary.title": { pt: "Resumo", en: "Summary" },
  "summary.text": {
    pt: "Data Engineer focado em pipelines de dados e plataformas analíticas de nível de produção. Desenho e implemento camadas de ingestão, transformação e modelação com Azure Databricks, SQL e Python — com experiência em arquiteturas medallion, contratos de data quality, orquestração com ADF e camada de consumo analítico em SQL. Também com experiência em modelação dbt em camadas, desenho dimensional e Snowflake. Portfólio cobre plataformas lakehouse, analytics Snowflake/dbt e pipelines ERP.",
    en: "Data Engineer focused on production-grade data pipelines and analytics platforms. I architect ingestion, transformation and modeling layers using Azure Databricks, SQL and Python — with experience in medallion architectures, data quality contracts, ADF orchestration and SQL-driven serving. Also experienced with layered dbt modeling, dimensional design and Snowflake. Portfolio covers lakehouse platforms, Snowflake/dbt analytics and ERP pipelines."
  },

  "skills.title": { pt: "Competências Técnicas", en: "Technical Skills" },
  "skills.analytics": {
    pt: "Analytics Engineering: dbt (models, tests, docs, lineage) · Modelação dimensional (star schema, date spine, SCD Tipo 2) · Data quality (not_null, unique, relationships, accepted_values) · Snapshots / SCD Tipo 2",
    en: "Analytics Engineering: dbt (models, tests, docs, lineage) · Dimensional modeling (star schema, date spine, SCD Type 2) · Data quality (not_null, unique, relationships, accepted_values) · Snapshots / SCD Type 2"
  },
  "skills.platform": {
    pt: "Data Platform: Azure Databricks · ADLS Gen2 · Azure Data Factory · Snowflake · SQL (avançado) · Docker · Git / GitHub Actions",
    en: "Data Platform: Azure Databricks · ADLS Gen2 · Azure Data Factory · Snowflake · SQL (advanced) · Docker · Git / GitHub Actions"
  },
  "skills.programming": {
    pt: "Programação: Python (orquestração, extração de métricas) · Pandas",
    en: "Programming: Python (orchestration, metrics extraction) · Pandas"
  },

  "projects.title": { pt: "Projetos Relevantes", en: "Relevant Projects" },

  // p1 — Azure Lakehouse ETL Platform (flagship)
  "p1.title": { pt: "Azure Lakehouse ETL Platform", en: "Azure Lakehouse ETL Platform" },
  "p1.pitch": {
    pt: "Plataforma Azure Lakehouse de nível de produção com arquitetura medallion, camada Gold definida em SQL e contratos de data quality aplicados.",
    en: "Production-grade Azure Lakehouse platform with medallion architecture, SQL-driven Gold serving and enforced data quality contracts."
  },
  "p1.b1": {
    pt: "Arquitetura medallion (Bronze → Silver → Gold) com ADLS Gen2 para armazenamento e separação clara entre ingestão, transformação e serving.",
    en: "Medallion architecture (Bronze → Silver → Gold) with ADLS Gen2 for storage and clear separation between ingestion, transformation and serving."
  },
  "p1.b2": {
    pt: "Azure Databricks executa ingestão e transformação; a camada Gold é definida em SQL com tabelas de factos, tabelas dimensionais, agregações e views.",
    en: "Azure Databricks handles ingestion and transformation; the Gold layer is defined in SQL with fact tables, dimension tables, aggregates and views."
  },
  "p1.b3": {
    pt: "Camada de data quality com dq_summary_v1 e v_dq_status para validar duplicados, nulos e correspondência entre objetos servidos.",
    en: "Data quality layer with dq_summary_v1 and v_dq_status to validate duplicates, nulls and matching logic across served objects."
  },
  "p1.b4": {
    pt: "Orquestração via Azure Data Factory com execução determinística e artefactos de execução para observabilidade operacional.",
    en: "Orchestration via Azure Data Factory with deterministic execution and run artifacts for operational observability."
  },
  "p1.b5": {
    pt: "Contratos de modelo documentam grain, tipo de objeto e layer para os principais assets da camada Gold.",
    en: "Model contracts document grain, object type and layer for the main Gold-layer assets."
  },

  // p2 — dbt + Snowflake Analytics Platform (was p1)
  "p2.title": { pt: "dbt + Snowflake Analytics Platform", en: "dbt + Snowflake Analytics Platform" },
  "p2.pitch": {
    pt: "Plataforma analítica end-to-end em Snowflake com arquitetura dbt em camadas, modelação dimensional e data quality aplicada.",
    en: "End-to-end analytics platform on Snowflake with full dbt layered architecture, dimensional modeling and enforced data quality."
  },
  "p2.b1": {
    pt: "Arquitetura dbt em camadas: modelos staging limpam e renomeiam fontes raw; modelos intermediate aplicam lógica de negócio; modelos mart expõem tabelas dimensionais prontas para análise.",
    en: "Layered dbt architecture: staging models clean and rename raw sources; intermediate models apply business logic; mart models expose analytics-ready dimensional tables."
  },
  "p2.b2": {
    pt: "Modelo dimensional em star schema: dim_date como date spine (calendário sem lacunas), tabela de factos diária com zeros para dias sem transações.",
    en: "Dimensional model built as a star schema: dim_date as date spine (gap-free calendar), daily fact table with zero-fill for days without transactions."
  },
  "p2.b3": {
    pt: "Data quality aplicada em cada camada: testes not_null, unique, relationships e accepted_values em todos os modelos.",
    en: "Data quality enforced at every layer: not_null, unique, relationships and accepted_values tests across all models."
  },
  "p2.b4": {
    pt: "dbt Docs com catálogo completo de modelos, descrições de colunas e lineage graph para visibilidade total da pipeline.",
    en: "dbt Docs auto-generated with full model catalog, column descriptions and lineage graph for end-to-end pipeline visibility."
  },
  "p2.b5": {
    pt: "Ambiente Snowflake configurado com controlo de versão, separação de roles e provisionamento reprodutível.",
    en: "Snowflake environment configured with version control, role separation and reproducible provisioning."
  },

  // p3 — PHC Analytics Platform (was p2, trimmed to 4 bullets to match HTML slot)
  "p3.title": { pt: "PHC Analytics Platform", en: "PHC Analytics Platform" },
  "p3.pitch": {
    pt: "Plataforma analítica modular construída sobre dados ERP, com pipelines ETL estruturadas e modelação dimensional orientada a KPIs de negócio.",
    en: "Modular analytics platform built on ERP data, delivering business KPIs through structured ETL pipelines and dimensional modeling."
  },
  "p3.b1": {
    pt: "Pipelines ETL extraem e transformam dados operacionais ERP numa camada analítica estruturada.",
    en: "ETL pipelines extract and transform ERP operational data into a structured analytical layer."
  },
  "p3.b2": {
    pt: "Modelo dimensional orientado a KPIs: vendas diárias, atividade de clientes, operações e análise de variações.",
    en: "Dimensional model oriented to business KPIs: daily sales, customer activity, operations and variance analysis."
  },
  "p3.b3": {
    pt: "Star schema mapeia entidades ERP em dimensões e tabelas de factos limpas.",
    en: "Star schema maps ERP source entities to clean dimension and fact tables."
  },
  "p3.b4": {
    pt: "Arquitetura modular separa camadas de extração, transformação e apresentação para facilitar manutenção.",
    en: "Modular architecture separates extraction, transformation and presentation layers for maintainability."
  },

  "exp.title": { pt: "Experiência", en: "Experience" },
  "exp.1": {
    pt: "2023–2025 · Data Engineer — Projetos Independentes — Entrega end-to-end de pipelines de dados e plataformas analíticas: arquitetura lakehouse Azure Databricks, modelação dbt em camadas, configuração Snowflake, desenho dimensional, contratos de data quality e deployment reprodutível. Ownership total desde ingestão raw até camadas de serving prontas para análise.",
    en: "2023–2025 · Data Engineer — Independent Projects — End-to-end delivery of data pipelines and analytics platforms: Azure Databricks lakehouse architecture, layered dbt modeling, Snowflake configuration, dimensional design, data quality contracts and reproducible deployment. Full ownership from raw ingestion to analytics-ready serving layers."
  },
  "exp.2": {
    pt: "Experiência anterior · Sistemas Técnicos, Operações e Análise — Background prático em operações técnicas e análise. Forte capacidade de resolução de problemas e disciplina de entrega em contextos técnicos variados.",
    en: "Prior experience · Technical Systems, Operations & Analysis — Hands-on background in technical operations and analysis. Strong problem-solving foundation and delivery discipline across varied technical environments."
  },

  "certs.title": { pt: "Formação & Certificações", en: "Education & Certifications" },
  "certs.self": {
    pt: "Tokio School — Big Data & Analytics Engineering",
    en: "Tokio School — Big Data & Analytics Engineering"
  },
  "certs.credly": {
    pt: "Certificações técnicas verificadas em Credly",
    en: "Verified technical certifications on Credly"
  },

  "extras.title": { pt: "Extras", en: "Extras" },
  "extras.lang": {
    pt: "Línguas: Português (nativo), Inglês (fluente)",
    en: "Languages: Portuguese (native), English (fluent)"
  },
  "extras.remote": {
    pt: "Disponível para trabalho remoto (EU)",
    en: "Available for remote work (EU)"
  },

  "cta.title": { pt: "Contacto", en: "Contact" },
  "cta.text": {
    pt: "Aberto a oportunidades em Data Engineering (Azure Databricks, SQL, Python, dbt, Snowflake) — preferencialmente remotas na UE.",
    en: "Open to Data Engineering opportunities (Azure Databricks, SQL, Python, dbt, Snowflake) — preferably remote within the EU."
  }
};
