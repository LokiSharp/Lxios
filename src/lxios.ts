import {LxiosRequestConfig} from "./types/lxios";
import xhr from './xhr'
import {buildURL} from "./helpers/url";

function lxios(config: LxiosRequestConfig): void {
  processConfig(config);
  xhr(config)
}

function processConfig(config: LxiosRequestConfig): void {
  config.url = transformURL(config)
}

function transformURL(config: LxiosRequestConfig): string {
  const {url, params} = config;
  return buildURL(url, params)
}

export default lxios
