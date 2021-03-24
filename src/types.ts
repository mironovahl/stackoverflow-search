export type TSearchBy = 'tag' | 'author' | null;
export type TSortBy = 'question' | 'tag' | 'answer' | 'author' | 'score' | null;

export type TSearch = {
  searchResult: any;
  searchValue: string;
  loading: boolean;
  searchError: null;
  sortBy: TSortBy;
};

export type TQuestion = {
  questionInfo: any;
  guestionId: string;
  loading: boolean;
  questionError: null;
};

export type TViewPanelData = {
  viewPanelData: any;
  searchByType: TSearchBy;
  searchByValue: string;
  loading: boolean;
  error: null;
};

export type TReducer = {
  search: TSearch;

  question: TQuestion;

  viewPanelData: TViewPanelData;
};
