import { PropType } from 'vue';
import { ButtonNativeType, ComponentSize } from './types';
declare const _default: import("vue").DefineComponent<{
    nativeType: {
        default: string;
        type: PropType<ButtonNativeType>;
        validator: (val: string) => boolean;
    };
    isDisabled: BooleanConstructor;
    isFullWidth: BooleanConstructor;
    isLoading: BooleanConstructor;
    size: {
        type: PropType<ComponentSize>;
        default: string;
        validator: (val: string) => boolean;
    };
}, {
    isMedium: boolean;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    nativeType: ButtonNativeType;
    isDisabled: boolean;
    isFullWidth: boolean;
    isLoading: boolean;
    size: ComponentSize;
} & {}>, {
    nativeType: ButtonNativeType;
    isDisabled: boolean;
    isFullWidth: boolean;
    isLoading: boolean;
    size: ComponentSize;
}>;
export default _default;
