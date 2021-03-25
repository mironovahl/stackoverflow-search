import { TSearchBy, TSearchItem } from 'src/types';
import {
  QUICK_VIEW_PANEL_DATA_LOADED,
  QUICK_VIEW_PANEL_DATA_REQUEST,
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

export type ViewPanelDataRequestAction = ReturnType<
  typeof viewPanelDataRequest
>;
export type ViewPanelDataLoadedAction = ReturnType<typeof viewPanelDataLoaded>;

export type ViewPanelDataAction =
  | ViewPanelDataLoadedAction
  | ViewPanelDataRequestAction;
