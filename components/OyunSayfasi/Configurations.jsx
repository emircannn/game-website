import Line from "../UI & Layout/Line"

const Configurations = ({isResponsive, textSize}) => {

    const minInfo = [
        {title: 'İşletim Sistemi', data: 'Windows 10 64-bit'},
        {title: 'İşlemci', data: 'Intel Core i5 6600k or AMD Ryzen 5 1600'},
        {title: 'Bellek', data: '8 GB RAM'},
        {title: 'Ekran Kartı', data: 'NVIDIA GeForce GTX 1660 or AMD Radeon RX 5600 XT'},
        {title: 'Ağ', data: 'Genişbant İnternet bağlantısı'},
        {title: 'Depolama', data: '100 GB kullanılabilir alan'},
    ]
    const maxInfo = [
        {title: 'İşletim Sistemi', data: 'Windows 10 64-bit'},
        {title: 'İşlemci', data: 'Intel Core i7 6700 or AMD Ryzen 7 2700X'},
        {title: 'Bellek', data: '12 GB RAM'},
        {title: 'Ekran Kartı', data: 'NVIDIA GeForce GTX 1050 Ti or AMD Radeon RX 570'},
        {title: 'Ağ', data: 'Genişbant İnternet bağlantısı'},
        {title: 'Depolama', data: '100 GB kullanılabilir alan'},
    ]

  return (
    <div className="my-[30px]">
        <h5 className="heading">Sistem Gereksinimleri</h5>

        <div className={`grid ${isResponsive ? 'grid-cols-1' : 'grid-cols-2'} gap-x-[30px] gap-y-[15px] mt-[20px]`}>
            <div>
                <h5 className="text-white font-semibold">Minimum</h5>
                <div className="mt-[20px]">
                    {minInfo.map((min, i) => (
                        <Line key={i}
                        title={min.title}
                        titleWidth="30"
                        titleColor='white'
                        dataColor='white/75'
                        data={min.data}
                        dataFont='light'
                        dataTextSize={textSize}
                        titleTextSize={textSize}
                        />
                    ))}
                </div>
            </div>

            <div>
            <h5 className="text-white font-semibold">Önerilen</h5>
                <div className="mt-[20px]">
                    {maxInfo.map((max, i) => (
                        <Line key={i}
                        title={max.title}
                        titleWidth="30"
                        titleColor='white'
                        dataColor='white/75'
                        data={max.data}
                        dataFont='light'
                        dataTextSize={textSize}
                        titleTextSize={textSize}
                        />
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Configurations