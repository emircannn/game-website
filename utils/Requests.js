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

export const getReviews = async (setData,page,limit,setTotalPages) => {
    try {
        let queryParams = ''; 
        if (page) queryParams += `page=${page}`;
        if (limit) queryParams += `${queryParams ? '&' : ''}limit=${limit}`;
        const res = await axios.get(`${process.env.REQUEST}review/getAll?${queryParams}`)
        setData(res?.data?.data)
        setTotalPages && setTotalPages(res?.data?.totalPages)
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

  export const getFriends = async (setGame, user) => {
    try {
        if(user) {
            const token = localStorage.getItem('authToken')
        const res = await axios.get(`${process.env.REQUEST}user/getFriends?id=${user?._id}`,{
        headers: {
            Authorization: `Bearer ${token}`
        }
        })
        setGame(res?.data?.data)
        }
        else {
            setGame(null)
        }
    } catch (error) {
        toast.error(error?.response?.data?.message.split(':')[1] || error?.response?.data?.message, {position: 'bottom-right'})
    }
}
  export const getFriendRequest = async (setGame, user) => {
    try {
        if(user) {
            const token = localStorage.getItem('authToken')
        const res = await axios.get(`${process.env.REQUEST}user/getFriendRequest?id=${user?._id}`,{
        headers: {
            Authorization: `Bearer ${token}`
        }
        })
        setGame(res?.data?.data)
        }
        else {
            setGame(null)
        }
    } catch (error) {
        toast.error(error?.response?.data?.message.split(':')[1] || error?.response?.data?.message, {position: 'bottom-right'})
    }
}
  export const getLibrary = async (setGame, user) => {
    try {
        if(user) {
            const token = localStorage.getItem('authToken')
        const {data} = await axios.get(`${process.env.REQUEST}user/getLibrary?username=${user?.username}`,{
        headers: {
            Authorization: `Bearer ${token}`
        }
        })
        setGame(data?.data?.library)
        }
        else {
            setGame(null)
        }
    } catch (error) {
        toast.error(error?.response?.data?.message.split(':')[1] || error?.response?.data?.message, {position: 'bottom-right'})
    }
}
  export const addOrder = async (user, cart) => {
    try {
        if(user) {
            if(cart) {
                const token = localStorage.getItem('authToken')
                const res = await axios.post(`${process.env.REQUEST}order/add?user=${user?._id}`,{},{
                headers: {
                Authorization: `Bearer ${token}`
                }
                })
                toast.success(res?.data?.message, {position: 'bottom-right'})
                window.location.replace('/')
            } else {
                toast.error('Sepetiniz boş', {position: 'bottom-bottom-right'})
            }
        }
        else {
            toast.error('Sipariş vermek için oturum açın', {position: 'bottom-right'})
        }
    } catch (error) {
        toast.error(error?.response?.data?.message?.split(':')[1] || error?.response?.data?.message, {position: 'bottom-right'})
    }
}
  export const addFriend = async (user, friendRequests) => {
    try {
        if(user) {
                const token = localStorage.getItem('authToken')
                const res = await axios.post(`${process.env.REQUEST}user/addFriend?id=${user?._id}`,{friendRequests},{
                headers: {
                Authorization: `Bearer ${token}`
                }
                })
                toast.success(res?.data?.message, {position: 'bottom-right'})
            } 
        else {
            toast.error('Arkadaş eklemek için oturum açın', {position: 'bottom-right'})
        }
    } catch (error) {
        toast.error(error?.response?.data?.message?.split(':')[1] || error?.response?.data?.message, {position: 'bottom-right'})
    }
}
  export const acceptFriend = async (user, friendRequests) => {
    try {
        if(user) {
                const token = localStorage.getItem('authToken')
                const res = await axios.post(`${process.env.REQUEST}user/acceptFriend?id=${user?._id}`,{friendRequests},{
                headers: {
                Authorization: `Bearer ${token}`
                }
                })
                toast.success(res?.data?.message, {position: 'bottom-right'})
                window.location.reload()
            } 
        else {
            toast.error('Arkadaş eklemek için oturum açın', {position: 'bottom-right'})
        }
    } catch (error) {
        toast.error(error?.response?.data?.message?.split(':')[1] || error?.response?.data?.message, {position: 'bottom-right'})
    }
}
  export const declineFriend = async (user, friendRequests) => {
    try {
        if(user) {
                const token = localStorage.getItem('authToken')
                const res = await axios.post(`${process.env.REQUEST}user/declineFriend?id=${user?._id}`,{friendRequests},{
                headers: {
                Authorization: `Bearer ${token}`
                }
                })
                toast.success(res?.data?.message, {position: 'bottom-right'})
                window.location.reload()
            } 
        else {
            toast.error('Arkadaş eklemek için oturum açın', {position: 'bottom-right'})
        }
    } catch (error) {
        toast.error(error?.response?.data?.message?.split(':')[1] || error?.response?.data?.message, {position: 'bottom-right'})
    }
}
  export const deleteFriend = async (user, friendRequests) => {
    try {
        if(user) {
                const token = localStorage.getItem('authToken')
                const res = await axios.post(`${process.env.REQUEST}user/deleteFriend?id=${user?._id}`,{friendRequests},{
                headers: {
                Authorization: `Bearer ${token}`
                }
                })
                toast.success(res?.data?.message, {position: 'bottom-right'})
                window.location.reload()
            } 
        else {
            toast.error('Arkadaş eklemek için oturum açın', {position: 'bottom-right'})
        }
    } catch (error) {
        toast.error(error?.response?.data?.message?.split(':')[1] || error?.response?.data?.message, {position: 'bottom-right'})
    }
}

  export const getUserOrder = async (user, setData) => {
    try {
        const token = localStorage.getItem('authToken')
        const res = await axios.get(`${process.env.REQUEST}order/getUserOrder?user=${user?._id}`,{
        headers: {
        Authorization: `Bearer ${token}`
        }
        })
        setData(res?.data?.data)
    } catch (error) {
        toast.error(error?.response?.data?.message?.split(':')[1] || error?.response?.data?.message, {position: 'bottom-right'})
    }
}
  export const getWithSeo = async (seo, setData, page, setTotalPages, setImages) => {
    try {
        let queryParams = '';
        if (page) queryParams += `page=${page}`;
        if (seo) queryParams += `${queryParams ? '&' : ''}seo=${seo}`;
        const token = localStorage.getItem('authToken')
        const res = await axios.get(`${process.env.REQUEST}review/getWithSeo?${queryParams}`,{
        headers: {
        Authorization: `Bearer ${token}`
        }
        })
        setData(res?.data?.data)
        setTotalPages && setTotalPages(res?.data?.totalPages)
        setImages && setImages(res?.data?.images)
    } catch (error) {
        toast.error(error?.response?.data?.message?.split(':')[1] || error?.response?.data?.message, {position: 'bottom-right'})
    }
}

  export const createReview = async ({user, game, rate, review}) => {
    try {
        if(user && user?.library.includes(game)) {
        const token = localStorage.getItem('authToken')
        const res = await axios.post(`${process.env.REQUEST}review/create`,{user:user?._id, game, rate, review},{
        headers: {
        Authorization: `Bearer ${token}`
        }
        })
        toast.success(res?.data?.message, {position: 'bottom-right'})
        window.location.reload()
        }
        else {
            toast.error('Değerlendirmek için oyuna sahip olmalısınız.', {position: 'bottom-bottom-right'});
        }
    } catch (error) {
        toast.error(error?.response?.message?.split(':')[1] || error?.response?.data?.message, {position: 'bottom-right'})
    }
}

  export const like = async (user, id) => {
    try {
        if(user) {
            const token = localStorage.getItem('authToken')
            const res = await axios.post(`${process.env.REQUEST}review/like?user=${user}&&id=${id}`,{},
            {
            headers: {
            Authorization: `Bearer ${token}`
            }
            })
        toast.success(res?.data?.message, {position: 'bottom-right'})
        } else {
            toast.error('Oturum Açın', {position: 'bottom-right'})
        }
    } catch (error) {
        toast.error(error?.response?.message?.split(':')[1] || error?.response?.data?.message, {position: 'bottom-right'})
    }
}
  export const dislike = async (user, id) => {
    try {
        if(user) {
            const token = localStorage.getItem('authToken')
            const res = await axios.post(`${process.env.REQUEST}review/dislike?user=${user}&&id=${id}`,{},{
            headers: {
            Authorization: `Bearer ${token}`
            }
            })
            toast.success(res?.data?.message, {position: 'bottom-right'})
        } else {
            toast.error('Oturum Açın', {position: 'bottom-right'})
        }
    } catch (error) {
        toast.error(error?.response?.message?.split(':')[1] || error?.response?.data?.message, {position: 'bottom-right'})
    }
}