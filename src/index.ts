export function parseJsonSafe<Result = unknown, DF = Result>(
  text: any,
  defaultValue?: DF
): Result;
export function parseJsonSafe<Result = unknown, DF = Result>(
  text: any,
  reviver?: (this: any, key: string, value: any) => any,
  defaultValue?: DF
): Result {
  if (reviver !== undefined && typeof reviver !== "function") {
    defaultValue = reviver;
    reviver = undefined;
  }

  if (typeof text === "object" && text !== null) {
    return text;
  }
  try {
    return JSON.parse(text, reviver);
  } catch (e) {
    return defaultValue || text;
  }
}
