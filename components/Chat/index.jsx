import Support from '@/public/icons/support.svg'
import { useContext, useEffect, useRef, useState } from 'react'
import { AiFillCloseCircle, AiOutlineClose } from 'react-icons/ai'
import Message from './Message'
import SendMessage from './SendMessage'
import Image from 'next/image'
import { UserContext } from '@/context/userContext'
import { toast } from 'react-hot-toast'
import axios from 'axios'
import { useSocket } from '@/utils/socket'
import * as WS from '@/utils/socket'

const Chat = () => {
    useEffect(() => {
        WS.connectWebSocket()
    }, [])
    const [open, setOpen] = useState(false)
    const [photo, setPhoto] = useState()
    const [photoPre, setPhotoPre] = useState()
    const {user} = useContext(UserContext)
    const [content, setContent] = useState()
    const [data, setData] = useState()
    const [messages, setMessages] = useState([])
    const ref = useRef();
    const [notification, setNotification] = useState(false)

    useEffect(() => {
        if(user) {
            const getData = async() => {
                try {
                    const token = localStorage.getItem('authToken')
                    const res = await axios.get(`${process.env.REQUEST}chat/getMessage?id=${user?._id}`,{
                        headers: {
                        Authorization: `Bearer ${token}`
                        }
                        })
                        setData(res?.data?.data)
                } catch (error) {
                    toast.error(error?.response?.message?.split(':')[1] || error?.response?.data?.message, {position: 'bottom-right'})
                }
            }
            getData()
        }
    }, [user])
    
    useEffect(() => {
      if(data) {
        setMessages(data?.messages)
      }
    }, [data])

    useEffect(() => {
        const element = document?.getElementById('last');
        element?.scrollIntoView({ behavior: 'smooth' });
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages])
    

    const handleSubmit = async(e) => {
        e.preventDefault();
        const token = localStorage.getItem('authToken')
        if(user) {
            if(photo) {
                try {
                    const formData = new FormData()
                    formData.append('media', photo)
                    formData.append('chat', user?._id)
                    formData.append('content', content)
                    const res =await axios.post(`${process.env.REQUEST}chat/sendMessage`,formData,{
                        headers: {
                        Authorization: `Bearer ${token}`
                        }
                        })
                    setPhoto()
                    setPhotoPre()
                    setContent('')
                    if (messages === []) {
                        setMessages(res?.data?.data?.messages)
                    }
                } catch (error) {
                    toast.error(error?.response?.message?.split(':')[1] || error?.response?.data?.message, {position: 'bottom-right'})
                }
            } else {
                await axios.post(`${process.env.REQUEST}chat/sendMessage`,{content, chat: user?._id},{
                    headers: {
                    Authorization: `Bearer ${token}`
                    }
                    })
                    setContent('')
            }
        } else {
            toast.error('Destek talebi için oturum açın', {position: 'bottom-right'})
        }
    }

    const socket = useSocket(); 

    useEffect(() => {
        if (!socket) return;

        socket.on('sendMessage', (_data) => {
            if(user?._id === _data.chat) {
                setMessages((prev) => [...prev, _data.message])
                if(_data.message.isAdminMessage === true) {
                    setNotification(true)
                    const audio = new Audio('/sounds/sound1.mp3');
                    audio.play();
                }
            }
        })
    
    return () => {
        socket.off('sendMessage')
    }
    }, [socket, user])
    
  return (
    <>
        <button 
        onClick={() => {setOpen(true), setNotification(false)}}
        className={`w-[50px] 450:w-[60px] aspect-square rounded-full bg-secondary hover:bg-graident duration-300 flex items-center justify-center z-50
        ${open ? 'translate-x-[200%]' : 'translate-x-0'} fixed bottom-6 right-6 450:right-12 ${notification && 'animate-pulse'}`}>   
            <Support fill='#fff' width='30' height='30' />
        </button>

        <div 
        className={`450:w-[400px] 450:h-[500px] w-full h-full fixed bottom-0 right-0 450:right-2 z-[999] duration-300 ${open ? 'translate-y-0' : 'translate-y-[200%]'} hover:border-graident
        rounded-t-xl overflow-hidden bg-gradient-to-tl from-primary-dark via-primary-light to-primary border-x border-t flex flex-col border-secondary`}>
            <div className='w-full h-[8%] bg-secondary duration-300 hover:bg-graident p-[10px] flex items-center justify-between'>
                <span className='text-white font-semibold text-[14px]'>Destek</span>
                <button
                onClick={() => setOpen(false)}>
                    <AiOutlineClose size={20} className='text-white hover:rotate-180 duration-300'/>
                </button>
            </div>
            <div
            className='w-full h-[77%] flex flex-col overflow-y-auto gap-[15px] p-[20px]'>
            {messages?.map((message, i) => (
                <Message
                    key={i}
                    user={message.isAdminMessage}
                    content={message.content}
                    media={message.media}
                    timestamp={message.timestamp}
                    readed={message.isReaded}
                    
                />
            ))}
            <div id='last' ref={ref} className='py-[2px] w-full' />
            </div>
            <div className='w-full h-[15%] relative'>
           {photo &&
           <div className="absolute w-full h-[75px] bg-secondary/50 bottom-[100%] z-50 flex items-center justify-between p-[10px]">
                <div className='w-[50px] aspect-square border border-secondary rounded-xl relative overflow-hidden'>
                    <Image alt='' src={photoPre} fill quality={100} className='object-cover'/>
                </div>

                <button onClick={() => {setPhoto(), setPhotoPre()}}>
                <AiFillCloseCircle size={25} className='text-white hover:text-secondary duration-300'/>
                </button>
            </div>}
            <SendMessage
                handleSubmit={handleSubmit}
                setPhotoPre={setPhotoPre}
                setPhoto={setPhoto}
                setContent={setContent}
                content={content}
            />
        </div>
        </div>
    </>
  )
}

export default Chat