/**
 * Calculates the square root of a number.
 *
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
 * 
 * @param x the number to calculate the root of.
 * @returns the square root if `x` is non-negative or `NaN` if `x` is negative.
 */
export function sqrt(x: number): number {
    return Math.sqrt(x);
}