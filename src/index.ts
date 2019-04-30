import { LxiosRequestConfig } from "./types";
import xhr from './xhr'

function lxios(config : LxiosRequestConfig): void {
  xhr(config)
}

export default lxios
