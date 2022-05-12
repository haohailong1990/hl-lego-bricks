(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue'), require('lodash-es')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue', 'lodash-es'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.legoComponents = {}, global.Vue, global._));
})(this, (function (exports, vue, lodashEs) { 'use strict';

  const commonDefaultProps = {
      // actions
      actionType: "",
      url: "",
      // size
      height: "",
      width: "auto",
      paddingLeft: "0px",
      paddingRight: "0px",
      paddingTop: "0px",
      paddingBottom: "0px",
      padding: "0px",
      // border type
      borderStyle: "none",
      borderColor: "#000",
      borderWidth: "0",
      borderRadius: "0",
      // shadow and opacity
      boxshadow: "0 0 0 #000000",
      opacity: "1",
      // position and x,y
      position: "initial",
      left: "0",
      top: "0",
      right: "0",
  };
  const textDefaultProps = {
      // basic props  - font styles
      text: "正文内容",
      fontSize: "14px",
      fontFamily: "",
      fontWeight: "normal",
      fontStyle: "normal",
      textDecoration: "none",
      lineHeight: "1",
      textAlign: "left",
      color: "#000000",
      backgroundColor: "",
      ...commonDefaultProps,
  };
  const imageDefaultProps = {
      src: "test.url",
      ...commonDefaultProps,
  };
  const isEditingProp = {
      isEditing: {
          type: Boolean,
          default: false
      }
  };
  const textStylePropNames = lodashEs.without(Object.keys(textDefaultProps), "actionType", "url", "text");
  const imageStylePropNames = lodashEs.without(Object.keys(textDefaultProps), "actionType", "url", "src");
  const trasformToComponentProps = (props) => {
      const mapProps = lodashEs.mapValues(props, (item) => {
          return {
              type: item.constructor,
              default: item,
          };
      });
      return {
          ...mapProps,
          ...isEditingProp
      };
  };

  const useComponentCommon = (props, picks) => {
      const styleProps = vue.computed(() => lodashEs.pick(props, picks));
      const hadnleClick = () => {
          if (props.actionType === "url" && props.url && !props.isEditing) {
              window.location.href = props.url;
          }
      };
      return {
          styleProps,
          hadnleClick,
      };
  };

  // import StyledUploader from "./StyledUploader.vue";
  // textDefaultProps 转换为 props数据结构
  const defaultProps$1 = trasformToComponentProps(textDefaultProps);
  var script$1 = vue.defineComponent({
      name: "LText",
      components: {
      // StyledUploader,
      },
      props: {
          tag: {
              type: String,
              default: "div",
          },
          ...defaultProps$1,
      },
      setup(props) {
          // 重用并简化
          // 抽离并且获得 styleProps;
          const { styleProps, hadnleClick } = useComponentCommon(props, textStylePropNames);
          return {
              styleProps,
              hadnleClick,
          };
      },
  });

  function render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.tag), {
      style: vue.normalizeStyle(_ctx.styleProps),
      class: "l-text-component",
      onClick: _ctx.hadnleClick
    }, {
      default: vue.withCtx(() => [
        vue.createTextVNode(vue.toDisplayString(_ctx.text), 1 /* TEXT */)
      ]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["style", "onClick"]))
  }

  script$1.render = render$1;
  script$1.__file = "src/components/LText/LText.vue";

  script$1.install = (app) => {
      app.component(script$1.name, script$1);
  };

  // imageDefaultProps 转换为 props数据结构
  const defaultProps = trasformToComponentProps(imageDefaultProps);
  var script = vue.defineComponent({
      name: "LImage",
      props: {
          ...defaultProps,
      },
      setup(props) {
          // 重用并简化
          // 抽离并且获得 styleProps;
          const { styleProps, hadnleClick } = useComponentCommon(props, imageStylePropNames);
          return {
              styleProps,
              hadnleClick,
          };
      },
  });

  const _hoisted_1 = ["src"];

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createElementBlock("img", {
      src: _ctx.src,
      class: "l-image-component",
      style: vue.normalizeStyle(_ctx.styleProps),
      onClick: _cache[0] || (_cache[0] = (...args) => (_ctx.hadnleClick && _ctx.hadnleClick(...args)))
    }, null, 12 /* STYLE, PROPS */, _hoisted_1))
  }

  script.render = render;
  script.__file = "src/components/LImage/LImage.vue";

  script.install = (app) => {
      app.component(script.name, script);
  };

  const components = [
      script$1,
      script
  ];
  const install = (app) => {
      components.forEach(component => {
          app.component(component.name, component);
      });
  };
  var index = {
      install
  };

  exports.LImage = script;
  exports.LText = script$1;
  exports["default"] = index;
  exports.install = install;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
