import Footer from '@/components/UI & Layout/Footer'
import Input from '@/components/UI & Layout/Form/Input'
import GameWrapper from '@/components/UI & Layout/GameWrapper'
import Header from '@/components/UI & Layout/Header'
import StyledSelect from '@/components/UI & Layout/StyledSelect'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { categoriesOptions, platformOptions, sortOptions, stockOptions } from '../../components/filter'
import { useRouter } from 'next/router'

const SearchPage = () => {
    const {query, push} = useRouter()

    const [platformFilter, setPlatformFilter] = useState(query.platform)
    const [categoryFilter, setCategoryFilter] = useState(query.category)
    const [sortFilter, setSortFilter] = useState(query.sort)
    const [stockFilter, setStockFilter] = useState(query.stock)
    const [minPrice, setMinPrice] = useState(query.min_price)
    const [maxPrice, setMaxPrice] = useState(query.max_price)
   
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
            if (stockFilter) {
              queryParams.push(`stock=${stockFilter}`);
            }
            if (minPrice) {
              queryParams.push(`min_price=${minPrice}`);
            }
            if (maxPrice) {
              queryParams.push(`max_price=${maxPrice}`);
            }
        
            const newURL = `${window.location.pathname}?${queryParams.join('&')}`;
            
            if (categoryFilter || maxPrice || minPrice || platformFilter || sortFilter || stockFilter) {
                window.history.replaceState({}, '', newURL);
                push(newURL)
            }
          };

          updateURLQueryParams()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categoryFilter, maxPrice, minPrice, platformFilter, sortFilter, stockFilter])

    const clearFilter = () => {
        const newURL = `${window.location.pathname}?`;
        push(newURL)
        setPlatformFilter()
        setSortFilter()
        setCategoryFilter()
        setStockFilter()
        setSearchInput()
    }

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
                dropdownHeight='150px'
                width='100%'
                options={platformOptions}
                setValue={setPlatformFilter}
                value={query.platform}
                placeholder='Platform'
            />
            <StyledSelect
                dropdownHeight='250px'
                width='100%'
                options={categoriesOptions}
                setValue={setCategoryFilter}
                value={query.category}
                placeholder='Kategori'
            />
            <StyledSelect
                dropdownHeight='200px'
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
                setValue={setStockFilter}
                value={query.stock}
                placeholder='Stok Durumu'
            />
            </div>

            <div className='flex items-center justify-center gap-[10px] 768:gap-[20px]'>
                <span className='text-[14px] text-white font-medium'>
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

            </div>
                <button
                onClick={() => clearFilter()}
                className='text-secondary underline ml-[15px] duration-300 hover:text-white flex'
                >
                Filtreyi Temizle
                </button>
        </div>

        <GameWrapper
            />

        </main>
        <Footer/>
    </>
  )
}


export default SearchPage