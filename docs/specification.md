# Open Law Specification

Open Law defines a **public, vendor-neutral ontology** for legal practice management data. Third-party applications can map to this schema to communicate with law firms without rebuilding domain models for each practice management system.

Inspired by [FollowTheMoney](https://followthemoney.tech/) (YAML ontology as source of truth) and Open Banking (managed code lists, conformance profiles, extension rules).

**This package defines data shapes only** — not connectivity, transport, authentication, or API operations.

## Participants

- **LSP** (Legal Service Provider) — the firm accountable for practice data; hosts infrastructure but does not gate client app choice
- **TPP** (Third Party Provider) — an application consuming or writing practice data
- **TSP** (Technical Service Provider) — a technology supplier, including PMS vendors operating the system of record for LSPs

Clients are **data subjects** with direct authorisation rights — not ecosystem participants. See [participation models](docs/participation-models.md) and [participants](docs/governance.md#participants).

## Entities

Each entity has its own schema file in `model/schemata/` and its own documentation page in [docs/entities/](docs/entities/). Headings below are navigational only — the unit of the model is the entity.

**Parties**: [Person](docs/entities/person.md), [Organisation](docs/entities/organisation.md), [Address](docs/entities/address.md)

**Matters**: [Matter](docs/entities/matter.md), [MatterType](docs/entities/matter-type.md), [PracticeArea](docs/entities/practice-area.md), [MatterParty](docs/entities/matter-party.md), [MatterAssignment](docs/entities/matter-assignment.md), [FirmUser](docs/entities/firm-user.md)

**Documents**: [Folder](docs/entities/folder.md), [Document](docs/entities/document.md), [DocumentContent](docs/entities/document-content.md)

**Financials**: [TimeEntry](docs/entities/time-entry.md), [Disbursement](docs/entities/disbursement.md), [LedgerEntry](docs/entities/ledger-entry.md), [Invoice](docs/entities/invoice.md), [Note](docs/entities/note.md)

**Scheduling**: [Task](docs/entities/task.md), [KeyDate](docs/entities/key-date.md)

Abstract base types (Thing, Interval, LegalEntity, FinancialRecord) are described in [docs/entities/abstract-types.md](docs/entities/abstract-types.md).

## Model structure

```
model/
  property-types.yaml    # Property type registry (money, date, country, ...)
  schemata/              # One YAML file per entity, with inheritance
  codelists/             # Managed enumerations (PartyType, MatterStatus, ...)
  profiles/              # Machine-readable conformance profiles
src/                     # Loader, validator, generators, conformance checker
  docs/
  entities/              # One page per entity
  profiles/              # Thin conformance profile pages
  participation-models.md  # Client sovereignty and firm delegation
  conformance.md         # How conformance claims work
```



## Install

```bash
pnpm add @openlawuk/specification
```



## Generate bindings

```bash
pnpm install
pnpm build
pnpm generate
```

This emits:

- `dist/jsonschema/*.schema.json` — JSON Schema (draft 2020-12)
- `dist/generated-types.d.ts` — TypeScript types and code list unions



## Validate the model

```bash
pnpm build
node dist/cli.js validate
```



## Check conformance

Verify a sample of mapped data against a profile (non-zero exit on failure, suitable for CI):

```bash
node dist/cli.js conformance parties docs/examples/parties-sample.json
```



## Key design decisions

- **Inheritance**: `Thing` → `LegalEntity` → `Person` / `Organisation`; roles as edge entities (`MatterParty`, `MatterAssignment`)
- **Money**: `{ amount: string, currency: ISO4217 }` (decimal string, Open Banking style)
- **Dates**: ISO 8601 (`date`, `date-time`)
- **Extensions**: Namespaced participant data via `extensions` or `x-lsp.*:` / `x-tsp.*:` code list values
- **LedgerEntry**: Neutral term for matter ledger postings (alias: UK "posting slip")



## Conformance profiles

Profiles are machine-readable YAML definitions in `model/profiles/` — thin bundles of entities with required-field occurrence. TSPs and TPPs declare support for their software (e.g. `openlaw:profile:parties@1.0.0`) and back the claim with a passing `openlaw conformance` run. See [conformance](docs/conformance.md).

- [Parties](docs/profiles/parties.md)
- [Matters](docs/profiles/matters.md)
- [Documents](docs/profiles/documents.md)
- [Financials](docs/profiles/financials.md)
- [Scheduling](docs/profiles/scheduling.md)

See [governance](docs/governance.md), [extensions](docs/extensions.md) (including [example payloads](docs/examples/extensions-sample.json)), and [recommended service URLs](docs/service-urls.md).

## Relationship to Forsyte app-provider

The Forsyte `@forsyteco/app-provider` package defines an internal adapter SDK. OpenLaw UK generalises and cleans those entity shapes for public use. Regenerating app-provider types from this model is a natural phase 2.

## Licence

Apache-2.0