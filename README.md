# DuckDB Node Bindings & API

[Node](https://nodejs.org/) bindings to the [DuckDB C API](https://duckdb.org/docs/api/c/overview), plus a friendly API for using DuckDB in Node applications.

## Packages

### Documentation

- [@hanzala-databrain/node-api](api/pkgs/@hanzala-databrain/node-api/README.md)
- [@hanzala-databrain/node-bindings](bindings/pkgs/@hanzala-databrain/node-bindings/README.md)
- [@hanzala-databrain/node-bindings-darwin-arm64](bindings/pkgs/@hanzala-databrain/node-bindings-darwin-arm64/README.md)
- [@hanzala-databrain/node-bindings-darwin-x64](bindings/pkgs/@hanzala-databrain/node-bindings-darwin-x64/README.md)
- [@hanzala-databrain/node-bindings-linux-arm64](bindings/pkgs/@hanzala-databrain/node-bindings-linux-arm64/README.md)
- [@hanzala-databrain/node-bindings-linux-x64](bindings/pkgs/@hanzala-databrain/node-bindings-linux-x64/README.md)
- [@hanzala-databrain/node-bindings-win32-x64](bindings/pkgs/@hanzala-databrain/node-bindings-win32-x64/README.md)

### Published

- [@hanzala-databrain/node-api](https://www.npmjs.com/package/@hanzala-databrain/node-api)
- [@hanzala-databrain/node-bindings](https://www.npmjs.com/package/@hanzala-databrain/node-bindings)
- [@hanzala-databrain/node-bindings-darwin-arm64](https://www.npmjs.com/package/@hanzala-databrain/node-bindings-darwin-arm64)
- [@hanzala-databrain/node-bindings-darwin-x64](https://www.npmjs.com/package/@hanzala-databrain/node-bindings-darwin-x64)
- [@hanzala-databrain/node-bindings-linux-arm64](https://www.npmjs.com/package/@hanzala-databrain/node-bindings-linux-arm64)
- [@hanzala-databrain/node-bindings-linux-x64](https://www.npmjs.com/package/@hanzala-databrain/node-bindings-linux-x64)
- [@hanzala-databrain/node-bindings-win32-x64](https://www.npmjs.com/package/@hanzala-databrain/node-bindings-win32-x64)

## Development

### Setup

- [Install pnpm](https://pnpm.io/installation)
- `pnpm install`

### Build & Test Bindings

- `cd bindings`
- `pnpm run build`
- `pnpm test`

### Build & Test API

- `cd api`
- `pnpm run build`
- `pnpm test`

### Run API Benchmarks

- `cd api`
- `pnpm bench`

### Update Package Versions

Change version in:

- `api/pkgs/@hanzala-databrain/node-api/package.json`
- `bindings/pkgs/@hanzala-databrain/node-bindings/package.json`
- `bindings/pkgs/@hanzala-databrain/node-bindings-darwin-arm64/package.json`
- `bindings/pkgs/@hanzala-databrain/node-bindings-darwin-x64/package.json`
- `bindings/pkgs/@hanzala-databrain/node-bindings-linux-arm64/package.json`
- `bindings/pkgs/@hanzala-databrain/node-bindings-linux-x64/package.json`
- `bindings/pkgs/@hanzala-databrain/node-bindings-win32-x64/package.json`

### Upgrade DuckDB Version

Change version in:

- `bindings/scripts/fetch_libduckdb_linux_amd64.py`
- `bindings/scripts/fetch_libduckdb_linux_arm64.py`
- `bindings/scripts/fetch_libduckdb_osx_universal.py`
- `bindings/scripts/fetch_libduckdb_windows_amd64.py`
- `bindings/test/constants.test.ts`

Also change DuckDB version in package versions.

### Check Function Signatures

- `node scripts/checkFunctionSignatures.mjs [writeFiles]`

Checks for differences between the function signatures in `duckdb.h` and those declared in `duckdb.d.ts` and implemented in `duckdb_node_bindings.cpp`.

Optionally outputs JSON files that can be diff'd.

Useful when upgrading the DuckDB version to detect changes to the C API.

### Publish Packages

- Update package versions (as above).
- Use the workflow dispatch for the [DuckDB Node Bindings & API GitHub action](https://github.com/duckdb/duckdb-node-neo/actions/workflows/DuckDBNodeBindingsAndAPI.yml).
- Select all initially-unchecked checkboxes to build on all platforms and publish all packages.
- Uncheck "Publish Dry Run" to actually publish.
