// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ISafeAny = any;

declare module '*.svg' {
  import React from 'react';
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}
