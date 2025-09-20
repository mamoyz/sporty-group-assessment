<template>
  <div class="flex flex-col gap-4">
    <div>
      <label>Search Leagues</label>
      <input class="input" type="text" v-model="useLeagueStore().searchQuery" />
    </div>
    <div>
      <label>Filter by Sport </label>
      <select v-model="useLeagueStore().selectedSport" class="input" name="" id="">
        <option selected disabled>Choose a Sport</option>
        <option
          :value="sport.toLowerCase()"
          v-for="sport in useLeagueStore().sportsList"
          :key="sport"
        >
          {{ sport }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLeagueStore } from '@/stores/useLeagueStore'
</script>

<style scoped></style>
