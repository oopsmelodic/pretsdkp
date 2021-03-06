import { HttpParams, HttpUrlEncodingCodec } from '@angular/common/http';

function looseInvalid(a: string|number): boolean {
  return a === '' || a === null || a === undefined;
}

export function serialize(obj: any): HttpParams {
  let params = new HttpParams();

  for (const key in obj) {
    if (obj.hasOwnProperty(key) && !looseInvalid(obj[key])) {
      params = params.set(key, obj[key]);
    }
  }

  return params;
}
