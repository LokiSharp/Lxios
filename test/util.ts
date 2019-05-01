const xhrMockClass = () => ({
  open: jest.fn(),
  send: jest.fn(),
  setRequestHeader: jest.fn()
});

// @ts-ignore
window.XMLHttpRequest = jest.fn().mockImplementation(xhrMockClass);
