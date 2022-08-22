import useAuthUser from './useAuthUser'
import useSupabase from './useSupabase'

export default function useCategories() {
  const { supabase } = useSupabase()
  const { user } = useAuthUser()

  const listCategories = async () => {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .eq('user', user.value.id)
    if (error) throw error

    return data
  }

  const createCategory = async category => {
    const { data, error } = await supabase
      .from('categories')
      .insert([{ ...category, user: user.value.id }])
    if (error) throw error

    return data
  }

  const readCategory = async categoryId => {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .eq('id', categoryId)
    if (error) throw error

    return data[0]
  }

  return {
    listCategories,
    createCategory,
    readCategory,
  }
}
