export async function delay(ms: number | undefined) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
