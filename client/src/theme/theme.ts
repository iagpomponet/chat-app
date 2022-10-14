import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode("#F7FAFC", "green")(props),
        height: "100%",
      },
    }),
  },
});

export default theme;
