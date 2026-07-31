# OpenLaw UK Directory

The OpenLaw UK Directory is the **trust anchor** of the OpenLaw ecosystem. It registers ecosystem participants, hosts public signing keys, and issues signed **Software Statement Assertions (SSAs)** that TPPs present during Dynamic Client Registration with a TSP's authorisation server.

Client-facing TPPs register with `softwareAudience: client-facing` and connect to firms without LSP allowlisting. See [participation models](https://github.com/openlawuk/specification/blob/main/docs/participation-models.md).

This repository contains:

- The **directory standard** — normative documentation and OpenAPI 3.1 specification
- A **reference implementation** — a NestJS (Fastify adapter) service with Prisma ORM and Postgres persistence, deployment-ready

## Role in the ecosystem

```
Directory (SSA) → DCR (client_id) → Client authorisation → Read/Write API
```

1. A participant registers with the directory and publishes software credentials (`softwareAudience: client-facing` or `firm-facing`).
2. The directory issues an SSA (signed JWT) for each registered software product.
3. The TPP uses the SSA in RFC 7591 dynamic client registration against a TSP (no firm pre-approval for client-facing TPPs).
4. The client authorises access at the TSP; the TPP accesses OpenLaw Read/Write API endpoints with client-tier scopes.

See [trust framework](docs/trust-framework.md) for participant roles, key management, and SSA lifecycle.

## API specification

OpenAPI 3.1: [apis/directory-openapi.yaml](apis/directory-openapi.yaml)

| Endpoint | Purpose |
|----------|---------|
| `POST/GET /participants` | Register and list organisations |
| `GET /participants/{id}` | Retrieve a participant |
| `POST/GET /participants/{id}/software` | Register and list software products |
| `GET /software/{id}/assertion` | Obtain a signed SSA JWT |
| `GET /.well-known/jwks.json` | Directory signing keys |
| `PUT /participants/{id}/jwks` | Publish participant JWKS inline |

## Reference implementation

Prerequisite: a reachable Postgres server (local install for development, RDS in production). Copy `.env.example` to `.env` and point `DATABASE_URL` / `TEST_PG_URL` at it, then:

```bash
pnpm install
pnpm exec prisma migrate deploy   # applies committed migrations
pnpm dev          # builds and starts on http://localhost:3000
pnpm lint:api     # Spectral lint of OpenAPI
pnpm test         # Jest tests including SSA round-trip (creates throwaway databases)
```

Environment variables:

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `3000` | HTTP listen port |
| `DATABASE_URL` | `postgresql://postgres:postgres@localhost:5432/openlaw_directory` | Postgres connection string |
| `TEST_PG_URL` | `postgresql://postgres:postgres@localhost:5432` | Postgres server URL (no database) used by tests |
| `DIRECTORY_ISSUER` | `https://directory.openlaw.uk` | SSA `iss` claim |
| `DIRECTORY_ADMIN_TOKEN` | unset | Bearer token for `/admin` endpoints and UI |

## Related repositories

- [@openlawuk/specification](https://github.com/openlawuk/specification) — data model and JSON Schema
- [dynamic-client-registration](https://github.com/openlawuk/dynamic-client-registration) — RFC 7591/7592 profile
- [read-write-api](https://github.com/openlawuk/read-write-api) — FAPI 2.0 resource API standard
- [open-data-api](https://github.com/openlawuk/open-data-api) — public read-only reference and discovery API

## Licence

Apache-2.0
