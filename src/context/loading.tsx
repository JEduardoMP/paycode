import { createContext, useReducer, ReactNode, FC } from "react";

interface InitialState {
  loading: boolean;
}

interface Action {
  type: string;
  payload?: boolean;
}

interface Provider {
  children: ReactNode;
}

interface IContextLoading {
  state: InitialState;
  dispatch: React.Dispatch<Action>;
}

const initialState: InitialState = {
  loading: false,
};

const LoadingContext = createContext<IContextLoading>({
  state: initialState,
  dispatch: () => null,
});

const reducer = (state: InitialState, action: Action) => {
  switch (action.type) {
    case "LOADING-TRUE":
      return {
        loading: true,
      };
    case "LOADING-FALSE":
      return {
        loading: false,
      };
    default:
      return state;
  }
};

const LoadingContextProvider: FC<Provider> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const data = { state, dispatch };

  return (
    <LoadingContext.Provider value={data}>{children}</LoadingContext.Provider>
  );
};

export default LoadingContext;
export { LoadingContextProvider };
