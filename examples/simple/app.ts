import lxios from '../../src/lxios'

lxios({
  method: 'get',
  url: '/simple/get',
  params: {
    a: 1,
    b: 2
  }
});
