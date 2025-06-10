import duckdb from "@hanzala-databrain/node-bindings";

export function version(): string {
  return duckdb.library_version();
}
