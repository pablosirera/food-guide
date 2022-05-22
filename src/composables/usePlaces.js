import useAuthUser from './useAuthUser'
import useSupabase from './useSupabase'

export default function usePlaces() {
  const { supabase } = useSupabase()
  const { user } = useAuthUser()

  const createPlace = async place => {
    const { data, error } = await supabase
      .from('places')
      .insert([{ ...place, user: user.value.id }])
    if (error) throw error

    return data
  }

  return {
    createPlace,
  }
}
