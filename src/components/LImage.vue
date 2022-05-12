<template>
  <img
    :src="src"
    class="l-image-component"
    :style="styleProps"
    @click="hadnleClick"
  />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import useComponentCommon from "../hooks/useComponentCommon";
import {
  trasformToComponentProps,
  imageDefaultProps,
  imageStylePropNames,
} from "../defaultProps";

// imageDefaultProps 转换为 props数据结构
const defaultProps = trasformToComponentProps(imageDefaultProps);
export default defineComponent({
  name: "LImage",
  props: {
    ...defaultProps,
  },
  setup(props) {
    // 重用并简化
    // 抽离并且获得 styleProps;
    const { styleProps, hadnleClick } = useComponentCommon(
      props,
      imageStylePropNames
    );
    return {
      styleProps,
      hadnleClick,
    };
  },
});
</script>
