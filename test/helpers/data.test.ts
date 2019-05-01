import {transformRequest} from "../../src/helpers/data";

describe("transformRequest test", () => {
  it("val is Object", () => {
    const val = {foo: 'bar'};
    expect(transformRequest(val)).toBe("{\"foo\":\"bar\"}")
  });
  it("val is not Object", () => {
    const val = 'string';
    expect(transformRequest(val)).toBe("string")
  })
});
