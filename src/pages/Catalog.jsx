import PageHeader from '../components/page-header/PageHeader'
import { category as cate } from '../api/tmdbApi'
import MovieZone from '../components/movie-zone/MovieZone'
import { useParams } from 'react-router-dom'

const Catalog = () => {
  const {category} = useParams()
  console.log(cate.movie);
  return (

    <div>
      <PageHeader>
        {category === cate.movie ? 'Movies' : 'TV Series'}
      </PageHeader>
      <div className='container'>
        <div className='section mb-3'>
          <MovieZone category={category}/>
        </div>
      </div>
    </div>
  )
}

export default Catalog