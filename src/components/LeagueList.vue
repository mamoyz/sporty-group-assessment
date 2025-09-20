<template>
  <div class="mt-10">
    <div v-if="leaguesList?.length" class="flex flex-col gap-4">
      <LeagueItem v-for="league in leaguesList" :key="league.idLeague" :league="league" />
    </div>
    <div v-else class="text-center bg-white p-10">
      <div v-if="loading">Loading ...</div>
      <div v-if="error">{{ error }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LeagueItem from './LeagueItem.vue'
import { useLeagueStore } from '@/stores/useLeagueStore'
import { computed, onMounted } from 'vue'

const leaguesList = computed(() => useLeagueStore().leaguesList)
const error = computed(() => useLeagueStore().error)
const loading = computed(() => useLeagueStore().loading)
onMounted(async () => {
  await useLeagueStore().fetchLeagues()
})
</script>

<style scoped></style>
