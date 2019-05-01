import lxios from '../src/lxios'
import { createMockXHR } from './util'

describe('Test lxios', () => {
  // @ts-ignore
  const oldXMLHttpRequest = window.XMLHttpRequest
  let mockXHR: any

  beforeEach(() => {
    mockXHR = createMockXHR()
    // @ts-ignore
    window.XMLHttpRequest = jest.fn(() => mockXHR)
  })

  afterEach(() => {
    // @ts-ignore
    window.XMLHttpRequest = oldXMLHttpRequest
  })

  it('lxios with headers', () => {
    expect(
      lxios({
        url: '/base/get',
        params: {
          foo: ['bar', 'baz']
        },
        headers: { 'Test-Header': 'Test' }
      })
    )
  })

  it('lxios without headers', () => {
    expect(
      lxios({
        url: '/base/get',
        params: {
          foo: ['bar', 'baz']
        }
      })
    )
  })

  it('lxios with data', () => {
    const req = lxios({
      url: '/base/get',
      params: {
        foo: ['bar', 'baz']
      },
      data: 'string'
    })
    mockXHR.onreadystatechange()
    mockXHR.readyState = 4
    mockXHR.onreadystatechange()
  })
})
