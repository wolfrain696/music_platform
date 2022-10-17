import * as React from 'react';

export const stopPropagation = (e: React.BaseSyntheticEvent) => {
  e.stopPropagation();
};
