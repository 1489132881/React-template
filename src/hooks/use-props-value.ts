/**
 * 让组件同时支持受控和非受控两种模式
 */

import { useMemoizedFn, useUpdate } from 'ahooks';
import { SetStateAction, useRef } from 'react';

interface IOptions<T> {
  defaultValue?: T;
  value?: T;
  onChange?: (v: T) => void;
}

export function usePropsValue<T>(options: IOptions<T>) {
  const { defaultValue, value, onChange } = options;

  const update = useUpdate();

  const stateRef = useRef<T>(value !== undefined ? value : defaultValue!);
  if (value !== undefined) {
    stateRef.current = value;
  }

  const setState = useMemoizedFn((v: SetStateAction<T>, forceTrigger: boolean = false) => {
    const nextValue = typeof v === 'function' ? (v as (prevState: T) => T)(stateRef.current!) : v;
    if (!forceTrigger && nextValue === stateRef.current) return;
    stateRef.current = nextValue;
    update();
    onChange?.(nextValue);
  });

  return [stateRef.current, setState] as const;
}
