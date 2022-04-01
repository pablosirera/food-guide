import useSupabase from './useSupabase'

export default function useCategories() {
  const { supabase } = useSupabase()

  const listCategories = async () => {
    const { data, error } = await supabase.from('categories').select('*')
    if (error) throw error

    return data
  }

  const createCategory = async category => {
    const { data, error } = await supabase.from('categories').insert([category])
    if (error) throw error

    return data
  }

  return {
    listCategories,
    createCategory,
  }
}
