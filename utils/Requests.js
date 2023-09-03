import axios from "axios"
import { toast } from "react-hot-toast"


export const getCategory = async (setData) => {
    try {
        const res = await axios.get(`${process.env.REQUEST}category/getAll`)
        setData(res?.data?.data)
    } catch (error) {
        toast.error(error?.response?.data?.message.split(':')[1] || error?.response?.data?.message, {position: 'bottom-right'})
    }
}

export const getGames = async (setGameData,setTotalPages, page, sort, category, platform, stok, minPrice, maxPrice,preOrder) => {
    try {
        let queryParams = ''; // Boş bir sorgu parametreleri dizesi oluşturun

        // Sadece tanımlı parametreleri sorgu parametrelerine ekleyin
        if (page) queryParams += `page=${page}`;
        if (sort) queryParams += `${queryParams ? '&' : ''}sort=${sort}`;
        if (category) queryParams += `${queryParams ? '&' : ''}category=${category}`;
        if (platform) queryParams += `${queryParams ? '&' : ''}platform=${platform}`;
        if (stok) queryParams += `${queryParams ? '&' : ''}stok=${stok}`;
        if (minPrice) queryParams += `${queryParams ? '&' : ''}minPrice=${minPrice}`;
        if (maxPrice) queryParams += `${queryParams ? '&' : ''}maxPrice=${maxPrice}`;
        if (preOrder) queryParams += `${queryParams ? '&' : ''}preOrder=${preOrder}`;
        const res = await axios.get(`${process.env.REQUEST}game/getAll?${queryParams}`)
        setGameData(res?.data?.data)
        setTotalPages ? setTotalPages(res?.data?.totalPages) : null
    } catch (error) {
        toast.error(error?.response?.data?.message.split(':')[1] || error?.response?.data?.message, {position: 'bottom-right'})
    }
  }

export const getDiscountedGames = async (setData, setTotalPages, page) => {
    try {
        const token = sessionStorage.getItem('adminToken');
        let queryParams = '';
        if (page) queryParams += `?page=${page}`;
        const res = await axios.get(`${process.env.REQUEST}admin/discountedGames${queryParams}`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        setData(res?.data?.data)
        setTotalPages(res?.data?.totalPages)
    } catch (error) {
        toast.error(error?.response?.data?.message?.split(':')[1] || error?.response?.data?.message, {position: 'bottom-right'})
    }
  }