export interface SortableField {
  field: 'tags' | 'storeName' | 'showDate' | 'category' | 'showCount' | 'naturalSorting';
  direction: 'asc' | 'desc';
}

export type EventStatus = 'planned' | 'live' | 'vod' | 'clip';

export interface FiltersSearchQuery {
  categories?: string[];
  tags?: string[];
  eventStartTimestampStart?: number;
  eventStartTimestampEnd?: number;
  currentStatuses?: EventStatus[];
  eventName?: string;
  storeNames?: string[];
}

export interface SearchQuery extends FiltersSearchQuery {
  storeId?: string;
  storeIds?: string[];
  page?: number;
  size?: number;
  eventIds?: string[] | string;
  productIds?: string[] | string;
  showExpired?: boolean;
  sort?: SortableField;
  queryString?: string;
  clipsMode?: boolean;
  skipAggregations?: boolean;
  onsiteMode?: boolean;
  platform?: string;
}
