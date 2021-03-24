export type TSearchBy = 'tag' | 'author' | null;

export type TReducer = {
  searchResult: any;
  searchValue: string;
  resultLoading: boolean;
  searchError: null;

  questionInfo: any;
  guestionId: string;
  questionLoading: boolean;
  questionError: null;

  viewPanelData: any;
  searchByType: TSearchBy;
  searchByValue: string;
  viewPanelDataLoading: boolean;
  dError: null;
};
