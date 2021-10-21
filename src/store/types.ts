export enum ActionType {
  SEARCH_REPOSITORIES = "SEARCH_REPOSITORIES",
  SEARCH_REPOSITORIES_ERROR = "SEARCH_REPOSITORIES_ERROR",
  SEARCH_REPOSITORIES_SUCCESS = "SEARCH_REPOSITORIES_SUCCESS",
}

interface SearchRepositories {
  type: ActionType.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccess {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface SearchRepositoriesError {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type Action =
  | SearchRepositories
  | SearchRepositoriesSuccess
  | SearchRepositoriesError;
