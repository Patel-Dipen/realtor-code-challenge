import { useEffect } from 'react'

export default (props) => {
  const { loadSiteData, loadProfileData, loadEarthquakeData } = props

  useEffect(() => {
    loadSiteData()
    loadProfileData()
    loadEarthquakeData()
  }, [])

  return props.children
}
