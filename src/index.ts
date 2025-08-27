export function myLib(name: string): string {
  return `Hello, ${name}!`;
}

// Example entrypoint for programmatic use
export async function main(args: string[]) {
  const name = args[0] ?? "World";
  console.log(myLib(name));
}

