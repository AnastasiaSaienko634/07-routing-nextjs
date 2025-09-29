import { ClipLoader } from "react-spinners";

import type { CSSProperties } from "react";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Loading = () => {
  return (
    <ClipLoader
      color="#ffffff"
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Loading;
