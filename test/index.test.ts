import lxios from "../src/lxios"
import "./util"

const xhrMockClass = () => ({
  open: jest.fn(),
  send: jest.fn(),
  setRequestHeader: jest.fn()
});

// @ts-ignore
window.XMLHttpRequest = jest.fn().mockImplementation(xhrMockClass);

describe("Test lxios", () => {
  it("works", () => {
    expect(lxios(
      {
        url: '/base/get',
        params: {
          foo: ['bar', 'baz']
        },
      })
    )
  })
});
