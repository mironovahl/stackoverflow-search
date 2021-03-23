export type TSearchBy = 'tag' | 'author' | null;

export type TReducer = {
  searchResult: any;
  searchValue: string;
  resultLoading: boolean;

  questionInfo: any;
  guestionId: string;
  questionLoading: boolean;

  viewPanelData: any;
  searchByType: TSearchBy;
  searchByValue: string;
  viewPanelDataLoading: boolean;
};
