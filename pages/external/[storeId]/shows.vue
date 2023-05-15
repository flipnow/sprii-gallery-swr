<template>
  <div>
    <h2>Events</h2>
    <div v-for="show in (data as any).events.rows" class="card">
      <img :src="show.event.coverPhotoPath" />
      <div>{{ show.event.eventName }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SearchQuery, EventStatus } from '~/types';

const route = useRoute();

const params: SearchQuery = {
  storeIds: [route.params.storeId as string],
  tags: [],
  currentStatuses: route.query.statuses as EventStatus[],
  page: 1,
  size: 10,
  skipAggregations: true,
  onsiteMode: true,
  platform: 'on_site',
  sort: {
    field: 'naturalSorting',
    direction: route.query.sort as 'asc' | 'desc',
  },
  showExpired: !route.query.hideExpired,
};

const { data } = useFetch('https://europe-west1-elisashop-a7b5f.cloudfunctions.net/shopApi/search/liveEvents', {
  method: 'post',
  body: params,
  headers: { 'Content-Type': 'application/json' },
});
</script>

<style lang="scss" scoped>
.card {
  width: 364px;
  height: 224px;
  position: relative;
  margin-bottom: 12px;

  img {
    width: 100%;
    height: auto;
    max-height: 100%;
    object-fit: cover;
  }

  div {
    position: absolute;
    width: 100%;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.4);
  }
}
</style>
