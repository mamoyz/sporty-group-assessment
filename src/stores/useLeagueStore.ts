import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { API_URL } from '@/constants'
import type { League } from '@/types'
interface LeagueResponse {
  leagues: League[]
}
interface Season {
  strSeason: string
  strBadge: string
}
interface SeasonResponse {
  seasons: Season[]
}
export const useLeagueStore = defineStore('useLeagueStore', () => {
  const leagues = ref<League[] | null>(null)
  const loading = ref<boolean>(false)
  const error = ref()
  const selectedSport = ref('')
  const searchQuery = ref('')
  const fetchLeagues = async () => {
    try {
      loading.value = true
      const res = await fetch(API_URL + 'all_leagues.php')
      const data: LeagueResponse = await res.json()
      leagues.value = data.leagues
    } catch (err) {
      error.value = 'Could not fetch leagues' // Set error state
      console.error('League fetch error:', err)
    } finally {
      loading.value = false
    }
  }

  const fetchSeasonData = async (id: string) => {
    try {
      const res = await fetch(API_URL + 'search_all_seasons.php?badge=1&id=' + id)
      const data: SeasonResponse = await res.json()
      return data.seasons[0]?.strBadge
    } catch (err) {
      error.value = 'Could not fetch seasons' // Set error state
      console.error('Season fetch error:', err)
    }
  }

  const sportsList = computed(() => {
    return [...new Set(leagues.value?.map((item) => item.strSport))]
  })

  const leaguesList = computed(() =>
    leagues.value?.filter((item) => {
      const filterBySearchQuery = searchQuery.value
        ? item.strLeague.toLowerCase().includes(searchQuery.value.toLowerCase())
        : item
      const filterBySport = selectedSport.value
        ? item.strSport.toLowerCase().includes(selectedSport.value)
        : item

      return filterBySearchQuery && filterBySport
    }),
  )
  return {
    leaguesList,
    fetchLeagues,
    fetchSeasonData,
    loading,
    error,
    sportsList,
    selectedSport,
    searchQuery,
  }
})
