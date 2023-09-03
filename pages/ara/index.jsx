import Footer from '@/components/UI & Layout/Footer'
import Input from '@/components/UI & Layout/Form/Input'
import GameWrapper from '@/components/UI & Layout/GameWrapper'
import Header from '@/components/UI & Layout/Header'
import StyledSelect from '@/components/UI & Layout/StyledSelect'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { platformOptions, sortOptions, stockOptions } from '../../components/filter'
import { useRouter } from 'next/router'
import { getCategory, getGames } from '@/utils/Requests'
import Pagination from '@/components/UI & Layout/Pagination'
import Button from '@/components/UI & Layout/Form/Button'

const SearchPage = () => {
    const {query, push} = useRouter()

    const [platformFilter, setPlatformFilter] = useState(query.platform)
    const [categoryFilter, setCategoryFilter] = useState(query.category)
    const [sortFilter, setSortFilter] = useState(query.sort)
    const [stokFilter, setStokFilter] = useState(query.stok)
    const [minPrice, setMinPrice] = useState(query.min_price)
    const [maxPrice, setMaxPrice] = useState(query.max_price)

    const [categories, setCategories] = useState()
    const [games, setGames] = useState()
    const [totalPages, setTotalPages] = useState()
    const [page, setPage] = useState(1)
   
    useEffect(() => {
        const updateURLQueryParams = () => {
            const queryParams = [];
            if (sortFilter) {
              queryParams.push(`sort=${sortFilter}`);
            }
            if (categoryFilter) {
              queryParams.push(`category=${categoryFilter}`);
            }
            if (platformFilter) {
              queryParams.push(`platform=${platformFilter}`);
            }
            if (stokFilter) {
              queryParams.push(`stok=${stokFilter}`);
            }
            if (minPrice) {
              queryParams.push(`minPrice=${minPrice}`);
            }
            if (maxPrice) {
              queryParams.push(`maxPrice=${maxPrice}`);
            }
        
            const newURL = `${window.location.pathname}?${queryParams.join('&')}`;
            
            if (categoryFilter || maxPrice || minPrice || platformFilter || sortFilter || stokFilter) {
                window.history.replaceState({}, '', newURL);
                push(newURL)
            }
          };

          updateURLQueryParams()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categoryFilter, maxPrice, minPrice, platformFilter, sortFilter, stokFilter])

    const clearFilter = () => {
        const newURL = `${window.location.pathname}?`;
        push(newURL)
        setPlatformFilter()
        setSortFilter()
        setCategoryFilter()
        setStokFilter()
        setMaxPrice()
        setMinPrice()
    }

    useEffect(() => {
      getCategory(setCategories)
    }, [])
    
    const categoriesOptions =
      categories?.map((category) => (
        {label: category?.name, value: category?.seo}
      ))

      useEffect(() => {
        getGames(setGames,setTotalPages,page, query.sort, query.category,query.platform,query.stok,query.minPrice,query.maxPrice,query.preOrder)
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [query, page])


  return (
    <>
        <Head>
            <title>Arama</title>
        </Head>

        <Header/>
        <main className="container min-h-[calc(100vh_-_300px)] my-[30px]">

        <div className='flex flex-col items-center gap-[15px] w-full'>
            <div className='grid-cols-2 grid 768:grid-cols-4 gap-[15px] 768:gap-[30px] w-full'>
            <StyledSelect
                dropdownHeight='162px'
                width='100%'
                options={platformOptions}
                setValue={setPlatformFilter}
                value={query.platform}
                placeholder='Platform'
            />
            <StyledSelect
                dropdownHeight='162px'
                width='100%'
                options={categoriesOptions}
                setValue={setCategoryFilter}
                value={query.category}
                placeholder='Kategori'
            />
            <StyledSelect
                dropdownHeight='162px'
                width='100%'
                options={sortOptions}
                setValue={setSortFilter}
                value={query.sort}
                placeholder='Sırala'
            />
            <StyledSelect
                dropdownHeight='90px'
                width='100%'
                options={stockOptions}
                setValue={setStokFilter}
                value={query.stock}
                placeholder='Stok Durumu'
            />
            </div>

            <div className='flex items-center justify-center gap-[10px] 768:gap-[20px] flex-wrap'>
                <span className='text-[12px] 768:text-[14px] text-white font-medium'>
                    Fiyat Aralığı
                </span>

                <Input
                    width='80px'
                    textCenter
                    placeholder='0'
                    onChange={(e) => setMinPrice(e.target.value)}
                    value={minPrice}
                />
                <span className='text-[14px] text-white font-semibold'>
                    -
                </span>
                <Input
                    width='80px'
                    textCenter
                    placeholder='100'
                    onChange={(e) => setMaxPrice(e.target.value)}
                    value={maxPrice}
                />
                <span className='text-[18px] text-white font-medium'>
                ₺
                </span>

                <Button
                  mt='0'
                  height='h-[40px]'
                  title='Filtreyi Temizle'
                  onClick={() => clearFilter()}
                />

            </div>
        </div>

        <GameWrapper
        search
        data={games}
        />

      <div className='flex justify-center'>
          {totalPages > 1 && <Pagination siblingCount={5} totalPages={totalPages} onPageChange={setPage}/>}
      </div>

        </main>
        <Footer/>
    </>
  )
}


export default SearchPage