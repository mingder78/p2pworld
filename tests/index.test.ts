import { expect, test } from "bun:test";
import { myLib } from "../src/index";

test("myLib greets properly", () => {
  expect(myLib("Bun")).toBe("Hello, Bun!");
});

