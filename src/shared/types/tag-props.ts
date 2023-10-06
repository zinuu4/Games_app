/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

export type ReactTagProps<
  T extends
    | keyof React.JSX.IntrinsicElements
    | React.JSXElementConstructor<any>,
> = React.ComponentProps<T>;
