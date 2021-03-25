export type TSearchBy = 'tag' | 'author' | null;
export type TSortBy = 'title' | 'tags' | 'answer_count' | 'owner' | null;

export type TSearch = {
  searchResult: TSearchItem[];
  searchValue: string;
  loading: boolean;
  sortBy: TSortBy;
  error: null | string;
};

export type TQuestion = {
  questionInfo: TQuestionInfo;
  guestionId: string;
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

export type TReducer = {
  search: TSearch;

  question: TQuestion;

  viewPanelData: TViewPanelData;
};

export type TSearchItem = {
  answer_count: number;
  content_license: string;
  creation_date: Date;
  is_answered: boolean;
  last_activity_date: Date;
  link: string;
  owner: TOwner;
  question_id: number;
  score: number;
  tags: string[];
  title: string;
  view_count: number;
};

type TOwner = {
  display_name: string;
  link: string;
  profile_image: string;
  reputation: number;
  user_id: number;
  user_type: string;
};

export type TSearchResponse = {
  has_more: boolean;
  items: TSearchItem[];
  quota_max: number;
  quota_remaining: number;
};

export type TAnswer = {
  answer_id: number;
  body: string;
  content_license: number;
  creation_date: Date;
  is_accepted: boolean;
  last_activity_date: Date;
  owner: TOwner;
  question_id: number;
  score: number;
};

export type TQuestionInfo = {
  answer_count: number;
  answers: TAnswer[];
  body: string;
  creation_date: Date;
  is_answered: boolean;
  last_activity_date: Date;
  link: string;
  owner: TOwner;
  question_id: number;
  score: number;
  tags: string[];
  title: string;
  view_count: number;
};

export type TQuestionInfoResponse = {
  has_more: boolean;
  items: TQuestionInfo[];
  quota_max: number;
  quota_remaining: number;
};
