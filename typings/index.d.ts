import type { CommonProps } from '@alluvial-ui/utils';
export interface ButtonProps extends Partial<CommonProps> {
  nativeType?: 'submit' | 'reset' | 'button';
  isFullWidth?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
}

export type ButtonNativeType = 'button' | 'submit' | 'reset';
