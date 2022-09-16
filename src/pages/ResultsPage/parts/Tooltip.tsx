import { withStyles } from "@material-ui/core/styles";
import _Tooltip from "@material-ui/core/Tooltip";
/**
 * Tooltip component
 */
const Tooltip = withStyles(() => ({
  tooltip: {
    backgroundColor: "#F5C200",
    border: "1px solid #EE760A",
    boxShadow: "inset 0 0 5px #EE760A",
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: 11,
  },
}))(_Tooltip);

export default Tooltip;
