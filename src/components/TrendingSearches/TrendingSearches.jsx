import Category from 'components/Category/Category'
import { useEffect, useState } from 'react'
import { gifService } from 'services/gifService'

export default function TrendingSearches() {
  const [trends, setTrends] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchTrends = async () => {
      setLoading(true)
      const trends = await gifService.getTrendingTerms()
      setTrends(trends)
      setLoading(false)
    }
    fetchTrends()
  }, [])

  return (
    <>
      <Category name="Tendencias" options={trends} loading={loading}></Category>
    </>
  )
}
