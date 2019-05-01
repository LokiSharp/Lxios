import lxios from '../../src/lxios'

lxios({
  method: 'get',
  url: '/base/get',
  params: {
    foo: ['bar', 'baz']
  }
});

lxios({
  method: 'get',
  url: '/base/get',
  params: {
    foo: {
      bar: 'baz'
    }
  }
});

const date = new Date();

lxios({
  method: 'get',
  url: '/base/get',
  params: {
    date
  }
});

lxios({
  method: 'get',
  url: '/base/get',
  params: {
    foo: '@:$, '
  }
});

lxios({
  method: 'get',
  url: '/base/get',
  params: {
    foo: 'bar',
    baz: null
  }
});

lxios({
  method: 'get',
  url: '/base/get#hash',
  params: {
    foo: 'bar'
  }
});

lxios({
  method: 'get',
  url: '/base/get?foo=bar',
  params: {
    bar: 'baz'
  },
  data: 'test'
});

lxios({
  method: 'post',
  url: '/base/post',
  data: {
    a: 1,
    b: 2
  }
});

lxios({
  method: 'post',
  url: '/base/post',
  headers: {
    'content-type': 'application/json',
    'Accept': 'application/json, text/plain, */*'
  },
  data: {
    a: 1,
    b: 2
  }
});

const paramsString = 'q=URLUtils.searchParams&topic=api';
const searchParams = new URLSearchParams(paramsString)

lxios({
  method: 'post',
  url: '/base/post',
  data: searchParams
});
