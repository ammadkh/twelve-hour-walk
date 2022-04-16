import { colors } from "../../theme/colors";
import { defaultFontSizes, fontWeights } from "../../theme/fonts";

export const DrawerScreenOption = {
  headerShown: false,
  drawerType: "front",
  drawerStyle: {
    backgroundColor: colors.bg.tertiary,
    width: "100%",
  },
  drawerLabelStyle: {
    color: colors.text.secondary,
    fontSize: defaultFontSizes.h5,
    fontWeight: fontWeights.regular,
  },
  drawerItemStyle: {
    borderBottomWidth: 0.2,
    borderBottomColor: "white",
  },
  drawerActiveBackgroundColor: "none",
};
