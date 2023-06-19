// External Libraries
import { CircularProgress } from "@material-ui/core";

// Styles
import { SLoading } from "./styles/loading.styles";

const Loading = () => {
  return (
    <SLoading>
      <CircularProgress className="loading" />
    </SLoading>
  );
};
export default Loading;
