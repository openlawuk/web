# OpenLaw UK Dynamic Client Registration

This repository defines the **OpenLaw UK profile** of [RFC 7591](https://www.rfc-editor.org/rfc/rfc7591) (OAuth 2.0 Dynamic Client Registration) and [RFC 7592](https://www.rfc-editor.org/rfc/rfc7592) (Client Management), extended with directory-issued **Software Statement Assertions (SSAs)**.

Client-facing TPPs register with `softwareAudience: client-facing` and connect without firm pre-approval. See [participation models](https://github.com/openlawuk/specification/blob/main/docs/participation-models.md).

## Prerequisites

Before registering with a TSP authorisation server, a TPP MUST:

1. Register as a participant in the [OpenLaw UK Directory](https://github.com/openlawuk/directory)
2. Register its software product and obtain an SSA
3. Host a JWKS endpoint for the software signing key

## Profile summary

| Requirement | OpenLaw UK value |
|-------------|------------------|
| Registration payload | Signed JWT containing `software_statement` (directory SSA) |
| SSA verification | Signature validated against directory `/.well-known/jwks.json` |
| SSA `software_audience` | `client-facing` or `firm-facing` — TSP MUST NOT require firm pre-approval for client-facing |
| Request signature | Validated against software `jwks_uri` from SSA |
| `token_endpoint_auth_method` | `private_key_jwt` only (FAPI 2.0) |
| Client management | RFC 7592 with registration access token |

See [registration profile](docs/registration.md) for normative requirements.

## API specification

OpenAPI 3.1: [apis/dcr-openapi.yaml](apis/dcr-openapi.yaml)

## Examples

Decoded example payloads in [docs/examples/](docs/examples/):

- [ssa-payload.json](docs/examples/ssa-payload.json) — SSA JWT payload (before signing)
- [registration-request-jwt.decoded.json](docs/examples/registration-request-jwt.decoded.json) — registration JWT payload
- [registration-response.json](docs/examples/registration-response.json) — successful registration response

## Lint

```bash
pnpm install
pnpm lint:api
```

## Related repositories

- [directory](https://github.com/openlawuk/directory) — SSA issuance
- [read-write-api](https://github.com/openlawuk/read-write-api) — FAPI 2.0 resource API
- [open-data-api](https://github.com/openlawuk/open-data-api) — public reference and discovery API
- [specification](https://github.com/openlawuk/specification) — data model

## Licence

Apache-2.0
