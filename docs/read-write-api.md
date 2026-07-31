# OpenLaw UK Read/Write API

The OpenLaw UK Read/Write API defines **FAPI 2.0-protected resource endpoints** for exchanging legal practice data. Payload shapes are defined by [@openlawuk/specification](https://github.com/openlawuk/specification); this repository defines transport, security, and operations.

## Philosophy

- One OpenAPI file per **conformance profile** (`parties`, `matters`, `documents`, `financials`, `scheduling`) plus **authorisations**
- Base path `/openlaw/v1.0` with profile-specific resource paths
- JSON request/response bodies reference specification JSON Schemas (`https://openlaw.uk/schema/v1/...`)
- **Client-directed access** is the primary model; firm delegation is secondary for B2B tools

See [participation models](https://github.com/openlawuk/specification/blob/main/docs/participation-models.md).

## Security

See [security profile](docs/security-profile.md) for FAPI 2.0 requirements (PAR, `private_key_jwt`, sender-constrained tokens).

See [authorisation model](docs/authorisation.md) for the access authorisation resource.

See [data boundaries](docs/data-boundaries.md) for client-tier filtering rules.

## API specifications

| Profile | OpenAPI | Profile ID |
|---------|---------|------------|
| Authorisations | [apis/authorisations-openapi.yaml](apis/authorisations-openapi.yaml) | — |
| Parties | [apis/parties-openapi.yaml](apis/parties-openapi.yaml) | `openlaw:profile:parties@1.0.0` |
| Matters | [apis/matters-openapi.yaml](apis/matters-openapi.yaml) | `openlaw:profile:matters@1.0.0` |
| Documents | [apis/documents-openapi.yaml](apis/documents-openapi.yaml) | `openlaw:profile:documents@1.0.0` |
| Financials | [apis/financials-openapi.yaml](apis/financials-openapi.yaml) | `openlaw:profile:financials@1.0.0` |
| Scheduling | [apis/scheduling-openapi.yaml](apis/scheduling-openapi.yaml) | `openlaw:profile:scheduling@1.0.0` |

Shared components: [apis/components.yaml](apis/components.yaml)

## Development

```bash
pnpm install
pnpm lint:api     # Spectral lint
pnpm test         # Schema sync tests against @openlawuk/specification
```

Ensure `@openlawuk/specification` is built and generated before running tests:

```bash
cd ../openlawuk-specification && pnpm build && pnpm generate
```

## Related repositories

- [specification](https://github.com/openlawuk/specification) — entity schemas
- [directory](https://github.com/openlawuk/directory) — trust anchor and SSAs
- [dynamic-client-registration](https://github.com/openlawuk/dynamic-client-registration) — OAuth client registration
- [open-data-api](https://github.com/openlawuk/open-data-api) — public reference and discovery API

## Licence

Apache-2.0
