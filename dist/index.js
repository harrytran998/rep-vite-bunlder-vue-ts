"use strict";
var vue = require("vue");
var _sfc_main = vue.defineComponent({
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
  const _directive_focus = vue.resolveDirective("focus");
  return vue.withDirectives((vue.openBlock(), vue.createBlock("button", vue.mergeProps(_ctx.$attrs, {
    about: _ctx.nativeType === "reset" ? "" : "",
    class: "\n      border\n      rounded-md\n      outline-noneborder-teal-500\n      border-2\n      text-white\n      align-middle\n      bg-pink-500\n    "
  }), [
    vue.renderSlot(_ctx.$slots, "default")
  ], 16, ["about"])), [
    [_directive_focus]
  ]);
}
_sfc_main.render = _sfc_render;
const Button = _sfc_main;
Button.install = (vue2) => {
  vue2.component(_sfc_main.name, _sfc_main);
};
module.exports = Button;
