<template>
  <div class="py-3 px-5 rounded-lg border border-slate-100 shadow bg-white hover:shadow-lg">
    <div class="flex item-center justify-between cursor-pointer" @click="handleLeagueClick">
      <div>
        <h3 class="font-bold">{{ league.strLeague }}</h3>
        <h4>{{ league.strLeagueAlternate }}</h4>
        <p class="text-sm text-main">{{ league.strSport }}</p>
      </div>
      <button class="text-2xl">&gt;</button>
    </div>
    <div class="mt-5" v-if="seasonImage">
      <img class="w-[100px] h-auto" :src="seasonImage" :alt="league.strLeague" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLeagueStore } from '@/stores/useLeagueStore'
import type { League } from '@/types'
import { ref } from 'vue'

interface Props {
  league: League
}
const props = defineProps<Props>()
const seasonImage = ref('')
const handleLeagueClick = async () => {
  seasonImage.value = (await useLeagueStore().fetchSeasonData(props?.league?.idLeague)) ?? ''
}
</script>

<style scoped></style>
