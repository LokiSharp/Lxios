import {isDate, isPlainObject} from "../../src/helpers/util";


describe("isDate test", () => {
  it("val is Date", () => {
    const val = new Date();
    expect(isDate(val)).toBe(true)
  });
  it("val is not Date", () => {
    const val = 'string';
    expect(isDate(val)).toBe(false)
  })
});

describe("isPlainObject test", () => {
  it("val is Object", () => {
    const val = {foo: 'bar'};
    expect(isPlainObject(val)).toBe(true)
  });
  it("val is not Object", () => {
    const val = 'string';
    expect(isPlainObject(val)).toBe(false)
  })
});
