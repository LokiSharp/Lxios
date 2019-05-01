import { transformRequest, transformResponse } from '../../src/helpers/data'

describe('transformRequest test', () => {
  it('val is Object', () => {
    const val = { foo: 'bar' }
    expect(transformRequest(val)).toBe('{"foo":"bar"}')
  })
  it('val is not Object', () => {
    const val = 'string'
    expect(transformRequest(val)).toBe('string')
  })
})

describe('transformResponse test', () => {
  it('val is Object', () => {
    const val = { foo: 'bar' }
    transformResponse(val)
  })
  it('val is string', () => {
    const val = 'string'
    expect(transformResponse(val)).toBe('string')
  })
  it('val is JSON string', () => {
    const val = "{foo: 'bar'}"
    expect(transformResponse(val)).toBe("{foo: 'bar'}")
  })
})
