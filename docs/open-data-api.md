# OpenLaw UK Open Data API

The OpenLaw UK Open Data API defines **public, read-only endpoints** for reference data and ecosystem discovery. It complements the FAPI 2.0-protected [Read/Write API](https://github.com/openlawuk/read-write-api): open data exposes code lists, profile catalogues, and public directory metadata — not confidential practice data.

## Philosophy

- **GET only** — no mutations on open data endpoints
- **No OAuth** — public access over TLS; optional rate limiting at the implementer's discretion
- **Distinct base path** — `/openlaw/v1.0` (separate from `/openlaw/v1.0` read/write resources)
- **Specification-aligned** — code lists mirror `model/codelists/core.yaml`; profile metadata mirrors `model/profiles/`
- **Marketplace discovery** — client-facing TPPs and data-provider endpoints for client connections

See [participation models](https://github.com/openlawuk/specification/blob/main/docs/participation-models.md).

## API specifications

| OpenAPI file | Profile ID | Purpose |
|--------------|------------|---------|
| [apis/reference-openapi.yaml](apis/reference-openapi.yaml) | `openlaw:profile:open-data:reference@1.0.0` | Code lists and conformance profile catalogue |
| [apis/discovery-openapi.yaml](apis/discovery-openapi.yaml) | `openlaw:profile:open-data:discovery@1.0.0` | Public participant and software directory metadata |

Shared components: [apis/components.yaml](apis/components.yaml)

## Reference implementation

`src/` contains a runnable reference implementation of the **discovery profile**: a stateless
NestJS (Fastify adapter) service that reads the directory, caches briefly, and serves only public projections
(no inline JWKS, no redirect URIs).

```bash
pnpm build
DIRECTORY_URL=http://localhost:3000 PORT=3500 node dist/server.js
```

Endpoints: `/openlaw/v1.0/participants` (filters: `status`, `directoryRole`, `q`),
`/participants/:id`, `/software` (filters: `participantId`, `softwareAudience`), `/software/:id`,
and `/lsp-endpoints` (`q`) — the list client-facing TPPs use to let clients pick their firm.

### Price transparency

Firms publish SRA-transparency-style prices on their **own** endpoint
(`{openLawPublicBaseUrl ?? openLawBaseUrl}/openlaw/v1.0/published-prices`, unauthenticated), and this
service aggregates them across every connectable firm — the Open Banking open-data pattern:

- `/openlaw/v1.0/published-prices` (filters: `service`, `region`, `q`) — every firm's
  prices flattened and annotated with the publishing firm; unreachable firm endpoints are
  omitted rather than failing the aggregate
- `/openlaw/v1.0/participants/:id/published-prices` — one firm's schedule

## Documentation

- [Access profile](docs/access-profile.md) — TLS, caching, rate limits
- [Reference data](docs/reference-data.md) — code list versioning and extensions
- [Discovery](docs/discovery.md) — public directory fields and trust boundaries
- [Marketplace](docs/marketplace.md) — client app and firm discovery journey

## Development

```bash
pnpm install
pnpm lint:api
pnpm test
```

Build the specification package first if running schema-related checks against sibling repos:

```bash
cd ../openlawuk-specification && pnpm build && pnpm generate
```

## Related repositories

- [specification](https://github.com/openlawuk/specification) — ontology and JSON Schema
- [directory](https://github.com/openlawuk/directory) — trust anchor (SSA issuance is not open data)
- [read-write-api](https://github.com/openlawuk/read-write-api) — FAPI 2.0 practice data
- [dynamic-client-registration](https://github.com/openlawuk/dynamic-client-registration) — OAuth client registration

## Licence

Apache-2.0
