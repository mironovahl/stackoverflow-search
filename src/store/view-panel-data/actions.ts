import { TSearchBy, TSearchItem } from 'src/types';
import {
  QUICK_VIEW_PANEL_DATA_LOADED,
  QUICK_VIEW_PANEL_DATA_REQUEST,
  VIEW_PANEL_DATA_ERROR,
} from './types';

export const viewPanelDataRequest = (
  searchByType: TSearchBy,
  searchByValue: string | number,
) =>
  ({
    type: QUICK_VIEW_PANEL_DATA_REQUEST,
    payload: { searchByType, searchByValue },
  } as const);

export const viewPanelDataLoaded = (viewPanelData: TSearchItem[]) =>
  ({
    type: QUICK_VIEW_PANEL_DATA_LOADED,
    payload: viewPanelData,
  } as const);

export const viewPanelDataFiled = (error: string) =>
  ({
    type: VIEW_PANEL_DATA_ERROR,
    payload: error,
  } as const);

export type ViewPanelDataRequestAction = ReturnType<
  typeof viewPanelDataRequest
>;
export type ViewPanelDataLoadedAction = ReturnType<typeof viewPanelDataLoaded>;
export type ViewPanelDataFailedAction = ReturnType<typeof viewPanelDataFiled>;

export type ViewPanelDataAction =
  | ViewPanelDataLoadedAction
  | ViewPanelDataRequestAction
  | ViewPanelDataFailedAction;
