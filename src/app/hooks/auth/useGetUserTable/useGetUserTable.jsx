import { useState } from 'react'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { supabase } from '../../../lib/supabaseClient'
import { setUserTable } from '../../../lib/features/auth/auth.slice'
import { useTranslation } from 'react-i18next'

export const useGetUserTable = () => {
  const sbUrl = process.env.NEXT_PUBLIC_SUPABASE_URL.slice(8, 28)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)
  const dispatch = useDispatch()
  const { t } = useTranslation()
  
  const getUserTable = async ({ phone }) => {
    setIsLoading(false)
    setError(null)

    if (!phone) {
      setError(t('Email yoki Telefon kiritilmagan'))
      toast.error(t('Email yoki Telefon kiritilmagan'), { theme: 'dark' })
      return
    }

    try {
      setIsLoading(true)

      const { data, error } = await supabase
        .from('user')
        .select()
        .eq('phone', phone)

      if (error) {
        setError(error.message)
        toast.error(error.message)
        return
      }
      if (!data[0]) {
        setError(t('Parol yoki telefon raqam notogri kiritilgan'))
        toast.error(t('Parol yoki telefon raqam notogri kiritilgan'), { theme: 'dark' })
        return
      }
      if (data && data[0]) {
        dispatch(setUserTable(data[0]))
        localStorage.setItem(`user-table-${sbUrl}`, JSON.stringify(data[0]))
        setData(data)
      }
    } catch (error) {
      setError(error.message)
      toast.error(error.message, { theme: 'dark' })
    } finally {
      setIsLoading(false)
    }
  }
  return { getUserTable, isLoading, error, data }
}