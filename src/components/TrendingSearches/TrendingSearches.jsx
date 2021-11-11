import Category from 'components/Category'
import Spinner from 'components/Spinner'
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

  return <>{loading ? <Spinner /> : <Category name="Tendencias" options={trends} />}</>
}
