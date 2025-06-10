import duckdb from "@hanzala-databrain/node-bindings";
import { expect, suite, test } from "vitest";

suite("constants", () => {
  test("sizeof_bool", () => {
    expect(duckdb.sizeof_bool).toBe(1);
  });
  test("library_version", () => {
    expect(duckdb.library_version()).toBe("v1.3.0");
  });
  test("vector_size", () => {
    expect(duckdb.vector_size()).toBe(2048);
  });
});
