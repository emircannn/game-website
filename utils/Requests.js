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
        let queryParams = ''; 
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

  export const getGameBySeo = async (setData, gameSeo) => {
    try {
      const res = await axios.get(`${process.env.REQUEST}game/getBySeo?seo=${gameSeo}`)
      setData(res?.data?.data)
    } catch (error) {
      toast.error(error?.response?.message?.split(':')[1] || error?.response?.message, {position: 'bottom-right'})
    }
  }

  export const addToWishlist = async(id, wishlist) => {
    try {
        const token = localStorage.getItem('authToken');
        const res = await axios.post(`${process.env.REQUEST}user/addWishlist?id=${id}`, {wishlist}, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        toast.success(res.data?.message, {position: 'bottom-right'})
         window.location.reload()
    } catch (error) {
        toast.error(error?.response?.data?.message.split(':')[1] || error?.response?.data?.message, {position: 'bottom-right'})
    }
  }
  export const deleteToWishlist = async(id, wishlist) => {
    try {
        const token = localStorage.getItem('authToken');
        const res = await axios.post(`${process.env.REQUEST}user/deleteWishlist?id=${id}`, {wishlist}, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        toast.success(res.data?.message, {position: 'bottom-right'})
        window.location.reload()
    } catch (error) {
        toast.error(error?.response?.data?.message.split(':')[1] || error?.response?.data?.message, {position: 'bottom-right'})
    }
  }

  export const getCart = async(id, setData) => {
    try {
        if(id) {
            const token = localStorage.getItem('authToken');
        const res = await axios.get(`${process.env.REQUEST}cart/getUserCart?id=${id}`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        setData(res?.data?.data)
        }
        else {
            return setData(null)
        }
    } catch (error) {
        toast.error(error?.response?.data?.message?.split(':')[1] || error?.response?.data?.message, {position: 'bottom-right'})
    }
  }
  export const getCartCount = async(id, setData) => {
    try {
        if(id) {
            const token = localStorage.getItem('authToken');
        const res = await axios.get(`${process.env.REQUEST}cart/cartCount?id=${id}`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        setData(res?.data?.data)
        }
        else {
            return setData(null)
        }
    } catch (error) {
        toast.error(error?.response?.data?.message?.split(':')[1] || error?.response?.data?.message, {position: 'bottom-right'})
    }
  }

  export const addToCart = async(user, game) => {
    try {
        if(user) {
        const token = localStorage.getItem('authToken');
        const res = await axios.post(`${process.env.REQUEST}cart/add`,{user, game}, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        toast.success(res?.data?.message, {position: 'bottom-right'})
        window.location.reload()
        }
        else {
            toast.error('Oturum açın', {position: 'bottom-right'})
        }
    } catch (error) {
        toast.error(error?.response?.data?.message.split(':')[1] || error?.response?.data?.message, {position: 'bottom-right'})
    }
  }
  export const deleteToCart = async(user, game) => {
    try {
        if(user) {
        const token = localStorage.getItem('authToken');
        const res = await axios.post(`${process.env.REQUEST}cart/delete`,{user, game}, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        toast.success(res?.data?.message, {position: 'bottom-right'})
        window.location.reload()
        }
        else {
            toast.error('Oturum açın', {position: 'bottom-right'})
        }
    } catch (error) {
        toast.error(error?.response?.data?.message.split(':')[1] || error?.response?.data?.message, {position: 'bottom-right'})
    }
  }

  export const getWishlist = async (setGame, user) => {
    try {
        if(user) {
            const token = localStorage.getItem('authToken')
        const {data} = await axios.get(`${process.env.REQUEST}user/getWishlist?username=${user?.username}`,{
        headers: {
            Authorization: `Bearer ${token}`
        }
        })
        setGame(data?.data?.wishlist)
        }
        else {
            setGame(null)
        }
    } catch (error) {
        toast.error(error?.response?.data?.message.split(':')[1] || error?.response?.data?.message, {position: 'bottom-right'})
    }
}