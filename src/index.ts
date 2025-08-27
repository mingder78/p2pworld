/**
 * Calculates the square root of a number.
 *
 * @param x the number to calculate the root of.
 * @returns the square root if `x` is non-negative or `NaN` if `x` is negative.
 */

export function myLib(name: string): string {
  return `Hello, ${name}!`;
}

// Example entrypoint for programmatic use

   /**
   * . . . 
   * @example
   * ```typescript
   * 
   *const resourceGroupName = 'res9101';
   *const accountName = 'sto4445';
   *const parameters: StorageManagementModels.StorageAccountCreateParameters = {
   *  sku: {
   *    name: <StorageManagementModels.SkuName>'Standard_GRS'
   *  },
   *  kind: <StorageManagementModels.Kind>'Storage',
   *  location: 'eastus2euap',
   *  tags: {
   *    "key1": "value1",
   *    "key2": "value2"
   *  }
   * };
   *const storageAccount = await client.storageAccounts.create(resourceGroupName, accountName, parameters);
   * ``` 
   * @param {string} resourceGroupName The name of the resource group within the
   * user's subscription. The name is case insensitive.
   * . . .
   */
  export async function main(args: string[]) {
  const name = args[0] ?? "World";
  console.log(myLib(name));
}

