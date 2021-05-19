import type { App } from 'vue'
export type ButtonNativeType = 'button' | 'submit' | 'reset'

export type ComponentSize = 'small' | 'medium' | 'large'

export interface ButtonProps {
  nativeType?: ButtonNativeType
  isFullWidth?: boolean
  isLoading?: boolean
  isDisabled?: boolean
}

export type SFCWithInstall<T> = T & { install(app: App): void }
