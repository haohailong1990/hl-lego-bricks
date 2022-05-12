<template>
  <component
    :is="tag"
    :style="styleProps"
    class="l-text-component"
    @click="hadnleClick"
  >
    {{ text }}
  </component>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import {
  trasformToComponentProps,
  textDefaultProps,
  textStylePropNames,
} from "../../defaultProps";
import useComponentCommon from "../../hooks/useComponentCommon";
// import StyledUploader from "./StyledUploader.vue";

// textDefaultProps 转换为 props数据结构
const defaultProps = trasformToComponentProps(textDefaultProps);

export default defineComponent({
  name: "LText",
  components: {
    // StyledUploader,
  },
  props: {
    tag: {
      type: String,
      default: "div",
    },
    ...defaultProps,
  },
  setup(props) {
    // 重用并简化
    // 抽离并且获得 styleProps;
    const { styleProps, hadnleClick } = useComponentCommon(
      props,
      textStylePropNames
    );
    return {
      styleProps,
      hadnleClick,
    };
  },
});
</script>
