# OpenLaw UK — Conformance Suite

CLI that verifies an Open Law directory and TSP implementation against the ecosystem rules:
trust establishment, dynamic client registration, access authorisation lifecycle, FAPI-style
request hygiene, and — most importantly — the **client data boundaries** that make the open
client marketplace safe.

## Usage

```bash
pnpm install && pnpm build

# against a local sandbox (directory :3000, tsp :3001)
node dist/cli.js run --directory http://localhost:3000 --tsp http://localhost:3001

# specific modules, JSON output
node dist/cli.js run --tsp http://localhost:3001 --checks dcr,boundaries --json
```

Exit code is non-zero when any check fails.

## Check modules

| Module | Verifies |
| --- | --- |
| `directory` | Participant/software registration, JWKS publication, SSA issuance with `software_audience` claim |
| `dcr` | Valid registrations accepted; forged/expired SSAs, redirect-uri supersets, non-`private_key_jwt` methods, and rogue-signed registration JWTs rejected |
| `authorisation` | Client flow returns a consentUrl and transitions AwaitingAuthorisation → Authorised → Revoked; firm flow awaits LSP approval |
| `fapi` | `x-fapi-interaction-id` required and echoed, `application/problem+json` errors, `x-idempotency-key` on writes, 401 on unauthenticated access |
| `boundaries` | With the documented fixtures: a client-tier token sees only the client's matters, only `client-visible` documents/notes, never internal or untagged data |

The suite provisions its own TPP identity in the target directory and hosts its JWKS on an
ephemeral local port — see [docs/fixtures.md](docs/fixtures.md) for the fixture data and consent
automation hooks a TSP must provide.

## Self-tests

```bash
pnpm test
```

When the sibling `openlawuk-directory` and `openlawuk-reference-tsp` checkouts are built, the
Jest suite boots both from `dist/` and asserts that every check passes against the reference
stack. Reporter unit tests always run.

## Licence

Apache-2.0
