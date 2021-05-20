import {defineComponent, resolveDirective, withDirectives, openBlock, createBlock, mergeProps, renderSlot} from "vue";
var _sfc_main = defineComponent({
  name: "AButton",
  inheritAttrs: false,
  props: {
    nativeType: {
      default: "button",
      type: String,
      validator: (val) => ["button", "submit", "reset"].includes(val)
    },
    isDisabled: Boolean,
    isFullWidth: Boolean,
    isLoading: Boolean,
    size: {
      type: String,
      default: "medium",
      validator: (val) => ["small", "medium", "large"].includes(val)
    }
  },
  setup(props, ctx) {
    const isMedium = props.size === "medium";
    return {isMedium};
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_focus = resolveDirective("focus");
  return withDirectives((openBlock(), createBlock("button", mergeProps(_ctx.$attrs, {
    about: _ctx.nativeType === "reset" ? "" : "",
    class: "\n      border\n      rounded-md\n      outline-noneborder-teal-500\n      border-2\n      text-white\n      align-middle\n      bg-pink-500\n    "
  }), [
    renderSlot(_ctx.$slots, "default")
  ], 16, ["about"])), [
    [_directive_focus]
  ]);
}
_sfc_main.render = _sfc_render;
const Button = _sfc_main;
Button.install = (vue) => {
  vue.component(_sfc_main.name, _sfc_main);
};
export default Button;
