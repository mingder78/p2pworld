#!/usr/bin/env bun
import { main } from "./index";

async function run() {
  const args = process.argv.slice(2);
  await main(args);
}

run();

