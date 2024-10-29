import NextJsTopLoader from "nextjs-toploader";

import { colors } from "~/styles/colors";

export function TopLoader() {
  return <NextJsTopLoader color={colors.gray} showSpinner={false} />;
}
