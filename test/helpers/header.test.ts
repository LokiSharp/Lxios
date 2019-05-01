import { processHeaders, parseHeaders } from '../../src/helpers/headers'

describe('processHeaders test', () => {
  it('header with lowcase Content-Type', () => {
    const headers = { 'content-type': 'application/json;charset=utf-8' }
    const data = {
      foo: 'bar'
    }
    const result = processHeaders(headers, data)
    expect(result.hasOwnProperty('Content-Type')).toBe(true)
    expect(result.hasOwnProperty('content-type')).toBe(false)
  })

  it('header is null', () => {
    const headers = null
    const data = {
      foo: 'bar'
    }
    const result = processHeaders(headers, data)
    expect(result).toBe(null)
  })

  it('header without Content-Type', () => {
    const headers = { 'Test-Header': 'Test' }
    const data = {
      foo: 'bar'
    }
    const result = processHeaders(headers, data)
    expect(result.hasOwnProperty('Content-Type')).toBe(true)
  })

  it('data is not PlainObject', () => {
    const headers = {}
    const data = 'string'
    const result = processHeaders(headers, data)
    expect(result.hasOwnProperty('Content-Type')).toBe(false)
  })
})

describe('parseHeaders test', () => {
  it('headers', () => {
    const headers =
      'HTTP/1.1 200 OK\r\n' +
      'X-Powered-By: Express\r\n' +
      'Content-Type: application/json; charset=utf-8\r\n' +
      'Content-Length: 13\r\n' +
      'ETag: W/"d-talgBZSHcQOay+ud5zDrtp+2VNk"\r\n' +
      'Date: Wed, 01 May 2019 18:37:15 GMT\r\n' +
      'Connection: keep-alive'
    parseHeaders(headers)
  })

  it('headers has non key', () => {
    const headers = ' '
    parseHeaders(headers)
  })

  it('headers is null', () => {
    const headers = ''
    parseHeaders(headers)
  })
})
