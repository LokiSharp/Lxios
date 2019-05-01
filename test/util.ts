export const createMockXHR = () => {
  return {
    open: jest.fn(),
    send: jest.fn(),
    setRequestHeader: jest.fn(),
    getAllResponseHeaders: function() {
      return (
        'HTTP/1.1 200 OK\r\n' +
        'X-Powered-By: Express\r\n' +
        'Content-Type: application/json; charset=utf-8\r\n' +
        'Connection: keep-alive'
      )
    }
  }
}
