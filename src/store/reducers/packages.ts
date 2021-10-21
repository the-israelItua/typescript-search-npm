import { ActionType, Action } from "../types";

interface PackageState {
  data: string[];
  loading: boolean;
  error: string | null;
}

const initialState = {
  data: [],
  loading: false,
  error: null,
};
export const packagesReducer = (
  state: PackageState = initialState,
  action: Action
): PackageState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};
