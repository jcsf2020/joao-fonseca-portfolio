const T = {
  role: {
    pt: "Analytics Engineer · Snowflake · dbt · Modern Data Stack",
    en: "Analytics Engineer · Snowflake · dbt · Modern Data Stack"
  },

  portfolio: { pt: "Portfólio", en: "Portfolio" },

  "summary.title": { pt: "Resumo", en: "Summary" },
  "summary.text": {
    pt: "Analytics Engineer especializado em Snowflake e dbt, desenvolvendo plataformas de dados orientadas a produção com arquitetura em camadas (staging → intermediate → marts) e modelação dimensional rigorosa. Desenha star schemas com date spines, gestão de dimensões de variação lenta (SCD Tipo 2) e tabelas de factos alinhadas a KPIs de negócio. Aplica data quality em cada camada com testes dbt (not_null, unique, relationships, accepted_values) e gates de integridade. Constrói ambientes reprodutíveis com Docker e pipelines CI, com observabilidade total via dbt Docs, lineage graphs e validação de execução. Ownership end-to-end desde a ingestão de fontes raw até marts prontos para análise.",
    en: "Analytics Engineer focused on Snowflake and dbt, building production-grade data platforms with layered architecture (staging → intermediate → marts) and rigorous dimensional modeling. Designs star schemas with date spines, slow-changing dimension handling (SCD Type 2), and fact tables aligned to business KPIs. Enforces data quality at every layer through dbt tests (not_null, unique, relationships, accepted_values) and integrity gates. Builds reproducible environments with Docker and CI, with full observability through dbt Docs, lineage graphs and execution validation. End-to-end ownership from raw source ingestion to analytics-ready marts."
  },

  "skills.title": { pt: "Competências Técnicas", en: "Technical Skills" },
  "skills.analytics": {
    pt: "Analytics Engineering: dbt (models, tests, docs, lineage) · Modelação dimensional (star schema, date spine, SCD Tipo 2) · Data quality (not_null, unique, relationships, accepted_values) · Snapshots / SCD Tipo 2",
    en: "Analytics Engineering: dbt (models, tests, docs, lineage) · Dimensional modeling (star schema, date spine, SCD Type 2) · Data quality (not_null, unique, relationships, accepted_values) · Snapshots / SCD Type 2"
  },
  "skills.platform": {
    pt: "Data Platform: Snowflake · SQL (avançado) · Docker · Git / GitHub Actions",
    en: "Data Platform: Snowflake · SQL (advanced) · Docker · Git / GitHub Actions"
  },
  "skills.programming": {
    pt: "Programação: Python (orquestração, extração de métricas) · Pandas",
    en: "Programming: Python (orchestration, metrics extraction) · Pandas"
  },

  "projects.title": { pt: "Projetos Relevantes", en: "Relevant Projects" },

  "p1.title": { pt: "dbt + Snowflake Analytics Platform", en: "dbt + Snowflake Analytics Platform" },
  "p1.pitch": {
    pt: "Plataforma analítica end-to-end em Snowflake com arquitetura dbt em camadas, modelação dimensional e data quality aplicada.",
    en: "End-to-end analytics platform on Snowflake with full dbt layered architecture, dimensional modeling and enforced data quality."
  },
  "p1.b1": {
    pt: "Arquitetura dbt em camadas: modelos staging limpam e renomeiam fontes raw; modelos intermediate aplicam lógica de negócio; modelos mart expõem tabelas dimensionais prontas para análise.",
    en: "Layered dbt architecture: staging models clean and rename raw sources; intermediate models apply business logic; mart models expose analytics-ready dimensional tables."
  },
  "p1.b2": {
    pt: "Modelo dimensional em star schema: dim_date como date spine (calendário sem lacunas), tabela de factos diária com zeros para dias sem transações.",
    en: "Dimensional model built as a star schema: dim_date as date spine (gap-free calendar), daily fact table with zero-fill for days without transactions."
  },
  "p1.b3": {
    pt: "Data quality aplicada em cada camada: testes not_null, unique, relationships e accepted_values em todos os modelos.",
    en: "Data quality enforced at every layer: not_null, unique, relationships and accepted_values tests across all models."
  },
  "p1.b4": {
    pt: "dbt Docs com catálogo completo de modelos, descrições de colunas e lineage graph para visibilidade total da pipeline.",
    en: "dbt Docs auto-generated with full model catalog, column descriptions and lineage graph for end-to-end pipeline visibility."
  },
  "p1.b5": {
    pt: "Ambiente Snowflake configurado com controlo de versão, separação de roles e provisionamento reprodutível.",
    en: "Snowflake environment configured with version control, role separation and reproducible provisioning."
  },

  "p2.title": { pt: "PHC Analytics Platform", en: "PHC Analytics Platform" },
  "p2.pitch": {
    pt: "Plataforma analítica modular construída no ecossistema PHC (JWEB), com pipelines ETL estruturadas e modelação dimensional orientada a KPIs de negócio.",
    en: "Modular analytics platform built on the PHC ERP ecosystem (JWEB), delivering business KPIs through structured ETL pipelines and dimensional modeling."
  },
  "p2.b1": {
    pt: "Pipelines ETL extraem e transformam dados operacionais do PHC JWEB numa camada analítica estruturada.",
    en: "ETL pipelines extract and transform operational data from PHC JWEB into a structured analytical layer."
  },
  "p2.b2": {
    pt: "Modelo dimensional orientado a KPIs: vendas diárias, atividade de clientes, operações e análise de variações.",
    en: "Dimensional model oriented to business KPIs: daily sales, customer activity, operations and variance analysis."
  },
  "p2.b3": {
    pt: "Star schema mapeia entidades ERP em dimensões e tabelas de factos limpas.",
    en: "Star schema maps ERP source entities to clean dimension and fact tables."
  },
  "p2.b4": {
    pt: "Dashboard analítico em Python com reporting orientado ao negócio e reprodutibilidade como restrição base.",
    en: "Python analytics dashboard delivers business-oriented reporting with reproducibility as a first-class constraint."
  },
  "p2.b5": {
    pt: "Arquitetura modular separa camadas de extração, transformação e apresentação para facilitar manutenção.",
    en: "Modular architecture separates extraction, transformation and presentation layers for maintainability."
  },

  "p3.title": { pt: "CRSET Solutions — Engineering Showcase", en: "CRSET Solutions — Engineering Showcase" },
  "p3.pitch": {
    pt: "Showcase de engenharia orientado a produção, demonstrando disciplina full-stack, rigor de CI e integrações reais além do data stack.",
    en: "Production-grade engineering showcase demonstrating full-stack discipline, CI rigor and real-world integrations beyond the data stack."
  },
  "p3.b1": {
    pt: "Construído com Next.js (App Router) com fronteiras de API estruturadas e deployment em produção.",
    en: "Built with Next.js (App Router) with structured API boundaries and production deployment."
  },
  "p3.b2": {
    pt: "Integrações reais: fluxos de contacto/email, base de dados e operações de backend em produção.",
    en: "Real integrations: contact/email flows, database connectivity and live backend operations."
  },
  "p3.b3": {
    pt: "Pipeline CI com verificações automáticas, performance budgets, guardrails de SEO e hardening de segurança.",
    en: "CI pipeline with automated checks, performance budgets, SEO guardrails and security hardening."
  },
  "p3.b4": {
    pt: "Demonstra ownership transversal de engenharia: entrega, observabilidade e prontidão para produção.",
    en: "Demonstrates cross-discipline engineering ownership: delivery, observability and production readiness."
  },

  "exp.title": { pt: "Experiência", en: "Experience" },
  "exp.1": {
    pt: "2023–2025 · Analytics Engineer — Projetos Independentes — Entrega end-to-end de plataformas analíticas: modelação dbt em camadas, configuração Snowflake, desenho dimensional, aplicação de data quality e deployment reprodutível. Ownership total desde a ingestão de fontes raw até marts prontos para análise.",
    en: "2023–2025 · Analytics Engineer — Independent Projects — End-to-end delivery of analytics platforms: layered dbt modeling, Snowflake configuration, dimensional design, data quality enforcement and reproducible deployment. Full ownership from raw source ingestion to analytics-ready marts."
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
    pt: "Aberto a oportunidades em Analytics Engineering, Snowflake e dbt — preferencialmente remotas na UE.",
    en: "Open to Analytics Engineering opportunities with Snowflake and dbt — preferably remote within the EU."
  }
};
