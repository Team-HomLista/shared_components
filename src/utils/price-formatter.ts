/** formatPrice
 *
 * Formats a price object into a readable string with proper currency and thousands separators.
 * This utility is used to display prices in a consistent format across the application.
 *
 * @param {Object} price - The price object to format.
 * @param {number} price.value - The numeric value of the price.
 * @param {string} price.currency - The currency of the price (e.g., "USD", "EUR").
 * @returns {string} A formatted price string, including the currency and thousands separators.
 *
 * @example
 * ```typescript
 * const formattedPrice = formatPrice({ value: 12345.67, currency: "USD" });
 * console.log(formattedPrice); // "$12,345.67 USD"
 * ```
 */
export const formatPrice = (price: { value: number; currency: string }): string => {
  const [integerPart, decimalPart] = price.value.toString().split(".");
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  if (!decimalPart || decimalPart === "00") {
    return `$${formattedInteger} ${price.currency}`;
  }

  return `$${formattedInteger}.${decimalPart} ${price.currency}`;
};
