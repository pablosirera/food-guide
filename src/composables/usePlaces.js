import useAuthUser from './useAuthUser'
import useSupabase from './useSupabase'

export default function usePlaces() {
  const { supabase } = useSupabase()
  const { user } = useAuthUser()

  const listPlaces = async () => {
    const { data, error } = await supabase
      .from('places')
      .select('*')
      .eq('user', user.value.id)
    if (error) throw error

    return data
  }

  const listPlacesHome = async () => {
    const { data, error } = await supabase
      .from('places')
      .select('*')
      .eq('user', user.value.id)
      .order('id', { ascending: false })
      .limit(8)
    if (error) throw error

    return data
  }

  const listPlacesByCategory = async category => {
    const { data, error } = await supabase
      .from('places')
      .select('*')
      .eq('user', user.value.id)
      .eq('category', category)
    if (error) throw error

    return data
  }

  const createPlace = async place => {
    const { data, error } = await supabase
      .from('places')
      .insert([{ ...place, user: user.value.id }])
    if (error) throw error

    return data
  }

  const readPlace = async placeId => {
    const { data, error } = await supabase
      .from('places')
      .select('*')
      .eq('id', placeId)
    if (error) throw error

    return data[0]
  }

  return {
    listPlaces,
    listPlacesHome,
    createPlace,
    listPlacesByCategory,
    readPlace,
  }
}
