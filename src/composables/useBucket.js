import useSupabase from './useSupabase'

export default function useBucket() {
  const { supabase } = useSupabase()

  const uploadCategoryFile = async file => {
    const { data, error } = await supabase.storage
      .from('categories')
      .upload(file.name, file)

    if (error) throw error

    return data
  }

  const getCategoryUrl = async imageKey => {
    const { data, error } = await supabase.storage
      .from('categories')
      .getPublicUrl(imageKey)

    if (error) throw error

    return data
  }

  return { uploadCategoryFile, getCategoryUrl }
}
