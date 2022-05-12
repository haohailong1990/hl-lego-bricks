import { computed } from "vue";
import { pick } from "lodash-es";
import { CommonComponentProps } from "../defaultProps";

const useComponentCommon = (
  props: Readonly<Partial<CommonComponentProps & {isEditing:boolean}>>,
  picks: string[]
) => {
  const styleProps = computed(() => pick(props, picks));
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

export default useComponentCommon;
