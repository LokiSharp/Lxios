export const createMockXHR = () => {
  return {
    open: jest.fn(),
    send: jest.fn(),
    setRequestHeader: jest.fn()
  }
}
