import MovieCard from '../movie-card/MovieCard'
import Button, { OutlineButton } from '../button/Button'
import { useCallback, useEffect, useState } from 'react'
import tmdbApi, { category, tvType, movieType } from '../../api/tmdbApi'
import './movie-zone.scss'
import { useNavigate, useParams } from 'react-router-dom'
import Input from '../input/Input'


const MovieZone = (props) => {
    const [items, setItems] = useState([])
    const {keyword} = useParams()
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)

    useEffect(()=>{
        const getList = async () =>{
            let resp = null
            if(keyword === undefined){
                const params = {}
                switch (props.category){
                    case category.movie:
                        resp = await tmdbApi.getMoviesList(movieType.upcoming, {params})
                        break
                    default:
                        resp = await tmdbApi.getTvList(tvType.popular, {params})
                }
            }else{
                const params = {query:keyword}
                resp = await tmdbApi.search(props.category, {params})
            }
            setItems(resp.results)
            setTotalPage(resp.total_pages)
        }
        getList()
    }, [props.category, keyword])

    const loadMore = async()=>{
        let resp = null 
        if (keyword === undefined){
            const params = {
                page: page+1
            }
            switch (props.category) {
                case category.movie:
                    resp = await tmdbApi.getMoviesList(movieType.upcoming, {params})
                    break;
            
                default:
                    resp = await tmdbApi.getTvList(tvType.popular, {params})
            }
        }else{
            const params = {
                page: page+1,
                query: keyword,
            }

            resp = await tmdbApi.search(props.category, {params})
        }

        setItems([...items, ...resp.results])
        setPage(page+1)
    }

	return (
		<>
			<div className='section mb-3'>
                <MovieSearch category={props.category} keyword={keyword}/>
            </div>
            <div className="movie__zone">
                {items.map((item, index)=>(
                    <MovieCard category={props.category} key={index} {...item}/>
                ))}
            </div>
            { page< totalPage ? (<div className="movie__zone__more">
                <OutlineButton onClick={loadMore}>Load more</OutlineButton>
            </div>):null}
		</>
	)
}


const MovieSearch = (props) => {
    const history = useNavigate()

    const [keyword, setKeyword] = useState(props.keyword ? props.keyword : '')

    const goToSearch = useCallback(()=>{
        if(keyword.trim().length>0){
            history(`/${category[props.category]}/search/${keyword}`)
        }
    }, [history, props.category, keyword])

    useEffect(() => {
      const enterEvent = (e) => {
        e.preventDefault()
        if(e.keyCode === 13){
            goToSearch()
        }
      }
      document.addEventListener('keyup', enterEvent)
    
      return () => {
        document.removeEventListener('keyup', enterEvent)
      }
    }, [keyword, goToSearch])
    

  return (
    <div className='movie__search'>
        <Input type='text' placeholder='Enter keyword' value={keyword} onChange={(e)=> setKeyword(e.target.value)}/>
        <Button className='small' onClick={goToSearch}>Search</Button>
    </div>
  )
}


export default MovieZone
