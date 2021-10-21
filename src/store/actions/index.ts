import axios from "axios";
import { Dispatch } from "redux";
import { ActionType, Action } from "../types";

export const searchRepositories =
  (term: string) => async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES,
    });
    try {
      const { data } = await axios.get(
        `https://registry.npmjs.org/-/v1/search?text=${term}`
      );
      const names = data?.objects?.map((item: any) => {
        return item.package.name;
      });

      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names,
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: err.message,
      });
    }
  };
