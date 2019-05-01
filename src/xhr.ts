import {LxiosRequestConfig} from "./types/lxios";

export default function xhr(config: LxiosRequestConfig) {
  const {
    data = null,
    url,
    method = 'GET'
  } = config;

  const request = new XMLHttpRequest();

  request.open(method.toUpperCase(), url, true);

  request.send(data);
}
