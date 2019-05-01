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
        data: 'data'
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
        data: 'test data'
      })
    )
  });

});
