import React, { useMemo, useState, useCallback } from 'react';
import { useFormContext } from 'react-hook-form';

import { Rate, InputLabel } from '../common';
import Error from './Error';

export const RatingField: React.FC = () => {
  const [rate, setRate] = useState(1);

  const cxt = useFormContext();

  const error = useMemo(
    () =>
      cxt.formState.errors.rating
        ? (cxt.formState.errors.rating.message as string)
        : null,
    [cxt.formState],
  );

  const handleSetRate = useCallback(
    (value: number) => {
      setRate(value);
      if (cxt) {
        cxt.setValue('rating', value);
      }
    },
    [cxt],
  );

  if (!cxt) {
    throw new Error('RatingField must be wrapped with a FormProvider');
  }

  return (
    <>
      <InputLabel label="Rating" />
      <Rate editable size="L" rate={rate} onChange={handleSetRate} />
      {error ? <Error error={error} /> : null}
    </>
  );
};
