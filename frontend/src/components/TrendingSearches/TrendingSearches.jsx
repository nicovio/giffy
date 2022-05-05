import Category from 'components/Category/Category'
import { useEffect, useState } from 'react'
import { gifService } from 'services/gifService'

export default function TrendingSearches() {
  const [trends, setTrends] = useState([])

  useEffect(() => {
    const fetchTrends = async () => {
      const trends = await gifService.getTrendingTerms()
      setTrends(trends)
    }
    fetchTrends()
  }, [])

  return <Category name="Tendencias" options={trends}></Category>
}
