import xhr from "../src/xhr"
import "./util"


describe("Test xhr", () => {
  it("get", () => {
    expect(
      xhr({
        url: '/base/get',
        method: 'get',
        params: {
          foo: ['bar', 'baz']
        },
        data: 'data',
        headers: {'Test-Header': 'Test'}
      })
    )
  });

  it("post", () => {
    expect(
      xhr({
        url: '/base/post',
        method: 'post',
        params: {
          foo: ['bar', 'baz']
        },
        data: 'test data',
        headers: {'Test-Header': 'Test'}
      })
    )
  });

  it("data null", () => {
    expect(
      xhr({
        url: '/base/post',
        method: 'post',
        params: {
          foo: ['bar', 'baz']
        },
        headers: {'Test-Header': 'Test'}
      })
    )
  });

  it("data null and Content-Type in headers", () => {
    expect(
      xhr({
        url: '/base/post',
        method: 'post',
        params: {
          foo: ['bar', 'baz']
        },
        headers: {'Test-Header': 'Test', 'Content-Type': 'Test'}
      })
    )
  });

});
