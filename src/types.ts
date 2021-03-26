export type TSearchBy = 'tag' | 'author' | null;
export type TSortBy = 'title' | 'tags' | 'answerCount' | 'owner' | null;

export type TSearch = {
  searchResult: TSearchItem[];
  searchValue: string;
  loading: boolean;
  sortBy: TSortBy;
  error: null | string;
};

export type TQuestion = {
  questionInfo: TQuestionInfo;
  questionId: string;
  loading: boolean;
  error: null | string;
};

export type TViewPanelData = {
  viewPanelData: TSearchItem[];
  searchByType: TSearchBy;
  searchByValue: string;
  sortBy: TSortBy;
  loading: boolean;
  error: null | string;
};

export type TState = {
  search: TSearch;

  question: TQuestion;

  viewPanelData: TViewPanelData;
};

export type TSearchItem = {
  answerCount: number;
  contentLicense: string;
  creationDate: Date;
  isAnswered: boolean;
  lastActivityDate: Date;
  link: string;
  owner: TOwner;
  questionId: number;
  score: number;
  tags: string[];
  title: string;
  viewCount: number;
};

export type TOwner = {
  displayName: string;
  link: string;
  profileImage: string;
  reputation: number;
  userId: number;
  userType: string;
};

export type TSearchResponse = {
  hasMore: boolean;
  items: TSearchItem[];
  quotaMax: number;
  quotaRemaining: number;
};

export type TAnswer = {
  answerId: number;
  body: string;
  contentLicense: number;
  creationDate: Date;
  isAccepted: boolean;
  lastActivityDate: Date;
  owner: TOwner;
  questionId: number;
  score: number;
};

export type TQuestionInfo = {
  answerCount: number;
  answers: TAnswer[];
  body: string;
  creationDate: Date;
  isAnswered: boolean;
  lastActivityDate: Date;
  link: string;
  owner: TOwner;
  questionId: number;
  score: number;
  tags: string[];
  title: string;
  viewCount: number;
};

export type TQuestionInfoResponse = {
  hasMore: boolean;
  items: TQuestionInfo[];
  quotaMax: number;
  quotaRemaining: number;
};
