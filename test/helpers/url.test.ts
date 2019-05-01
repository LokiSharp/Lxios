import {buildURL} from "../../src/helpers/url";


describe("Helpers url test", () => {
  it("buildURL params is []", () => {
    const url = '/get';
    const params = {
      foo: ['bar', 'baz']
    };
    expect(buildURL(url, params)).toBe('/get?foo[]=bar&foo[]=baz')
  });

  it("buildURL params is Object", () => {
    const url = '/get';
    const params = {
      foo: {
        bar: 'baz'
      }
    };
    expect(buildURL(url, params)).toBe('/get?foo=%7B%22bar%22:%22baz%22%7D')
  });

  it("buildURL params is Date", () => {
    const date = new Date('2012-12-21T00:00:00.000Z');
    const url = '/get';
    const params = {
      date
    };
    expect(buildURL(url, params)).toBe('/get?date=2012-12-21T00:00:00.000Z')
  });

  it("buildURL params is @:$,", () => {
    const url = '/get';
    const params = {
      foo: '@:$, '
    };
    expect(buildURL(url, params)).toBe('/get?foo=@:$,+')
  });

  it("buildURL params is null", () => {
    const url = '/get';
    const params = {
      foo: 'bar',
      null: null
    };
    expect(buildURL(url, params)).toBe('/get?foo=bar')
  });

  it("buildURL url with hash", () => {
    const url = '/get#hash';
    const params = {
      foo: 'bar',
    };
    expect(buildURL(url, params)).toBe('/get?foo=bar')
  });

  it("buildURL url with params", () => {
    const url = '/get?foo=bar';
    const params = {
      bar: 'baz'
    };
    expect(buildURL(url, params)).toBe('/get?foo=bar&bar=baz')
  });

});

