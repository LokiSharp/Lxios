import {processHeaders} from "../../src/helpers/headers";
import {isDate} from "../../src/helpers/util";


describe("processHeaders test", () => {
  it("header with lowcase Content-Type", () => {
    const headers = {'content-type': 'application/json;charset=utf-8'};
    const data = {
      foo: 'bar'
    };
    const result = processHeaders(headers, data)
    expect(result.hasOwnProperty('Content-Type')).toBe(true)
    expect(result.hasOwnProperty('content-type')).toBe(false)
  })

  it("header is null", () => {
    const headers = null;
    const data = {
      foo: 'bar'
    };
    const result = processHeaders(headers, data)
    expect(result).toBe(null)
  })

  it("header without Content-Type", () => {
    const headers = {'Test-Header': 'Test'};
    const data = {
      foo: 'bar'
    };
    const result = processHeaders(headers, data)
    expect(result.hasOwnProperty('Content-Type')).toBe(true)
  })

  it("data is not PlainObject", () => {
    const headers = {};
    const data = "string";
    const result = processHeaders(headers, data)
    expect(result.hasOwnProperty('Content-Type')).toBe(false)
  })
});
