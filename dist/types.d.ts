import type { App } from 'vue';
export declare type ButtonNativeType = 'button' | 'submit' | 'reset';
export declare type ComponentSize = 'small' | 'medium' | 'large';
export interface ButtonProps {
    nativeType?: ButtonNativeType;
    isFullWidth?: boolean;
    isLoading?: boolean;
    isDisabled?: boolean;
}
export declare type SFCWithInstall<T> = T & {
    install(app: App): void;
};
