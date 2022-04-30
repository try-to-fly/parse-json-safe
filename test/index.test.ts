import { parseJsonSafe } from "../src/index";

describe("parseJsonSafe", () => {
  it("normal", () => {
    expect(parseJsonSafe('{"a":1}')).toEqual({ a: 1 });
  });
  it("with defaultvalue", () => {
    expect(parseJsonSafe("err", { b: 1 })).toEqual({ b: 1 });
  });
  it('support object', () => {
    expect(parseJsonSafe({ a: 1 })).toEqual({ a: 1 });
  })
});
