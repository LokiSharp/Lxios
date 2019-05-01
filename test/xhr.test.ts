import xhr from '../src/xhr'
import { createMockXHR } from './util'

describe('Test xhr', () => {
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

  it('get', () => {
    xhr({
      url: '/base/get',
      method: 'get',
      params: {
        foo: ['bar', 'baz']
      },
      data: 'data',
      headers: { 'Test-Header': 'Test' }
    })
  })

  it('post', () => {
    xhr({
      url: '/base/post',
      method: 'post',
      params: {
        foo: ['bar', 'baz']
      },
      data: 'test data',
      headers: { 'Test-Header': 'Test' }
    })
  })

  it('data null', () => {
    xhr({
      url: '/base/post',
      method: 'post',
      params: {
        foo: ['bar', 'baz']
      },
      headers: { 'Test-Header': 'Test' }
    })
  })

  it('data null and Content-Type in headers', () => {
    xhr({
      url: '/base/post',
      method: 'post',
      params: {
        foo: ['bar', 'baz']
      },
      headers: { 'Test-Header': 'Test', 'Content-Type': 'Test' }
    })
  })

  it('onreadystatechange', () => {
    xhr({
      url: '/base/post',
      method: 'post',
      params: {
        foo: ['bar', 'baz']
      },
      headers: { 'Test-Header': 'Test', 'Content-Type': 'Test' },
      responseType: 'text'
    }).then(res => {
      console.log(res)
    })
  })

  it('has responseType text', () => {
    mockXHR.readyState = 4
    xhr({
      url: '/base/post',
      method: 'post',
      params: {
        foo: ['bar', 'baz']
      },
      headers: { 'Test-Header': 'Test', 'Content-Type': 'Test' },
      responseType: 'text'
    })
    mockXHR.onreadystatechange()
    mockXHR.readyState = 1
    mockXHR.onreadystatechange()
  })

  it('has responseType json', () => {
    mockXHR.readyState = 4
    xhr({
      url: '/base/post',
      method: 'post',
      params: {
        foo: ['bar', 'baz']
      },
      headers: { 'Test-Header': 'Test', 'Content-Type': 'Test' },
      responseType: 'json'
    })
    mockXHR.onreadystatechange()
    mockXHR.readyState = 1
    mockXHR.onreadystatechange()
  })
})
