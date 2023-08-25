
const Toggle = ({setLogin, login}) => {
  return (
    <div className="px-[20px] 768:px-[55px] w-full">
        <div className="max-768:w-full 768:w-[300px] h-[50px] rounded-md relative bg-primary-dark text-white p-[3px] flex gap-[3px]">
            <button onClick={() => setLogin(true)} className="w-1/2 h-full z-20 text-dark font-semibold rounded-md">Giriş</button>
            <button onClick={() => setLogin(false)} className="w-1/2 h-full z-20 text-dark font-semibold rounded-md">Üye Ol</button>
            <span className={`absolute top-0 ${!login ? 'translate-x-[98.2%]' : 'left-0'} duration-300 h-full w-1/2 transition-all rounded-md p-[3px]`}>
            <span className="bg-secondary w-full h-full flex rounded-md duration-300"></span>
            </span>
        </div>
    </div>
  )
}

export default Toggle