/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useNavigationState } from '@react-navigation/native'

export const useMountHook = (name) =>
  useEffect(() => {
    console.log(`Mount ${name}`)
    return () => console.log(`Unmount ${name}`)
  }, [])

export const useLogNavigationState = () => {
  const routes = useNavigationState((state) =>
    state.routes.map(({ name }) => name)
  )
  console.log('Routes', routes)
}
