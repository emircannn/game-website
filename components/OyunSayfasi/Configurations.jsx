import Line from "../UI & Layout/Line"

const Configurations = ({isResponsive, textSize, data}) => {

    const minInfo = [
        {title: 'İşletim Sistemi', data: data?.minimumSystemRequirements?.operatingSystem},
        {title: 'İşlemci', data: data?.minimumSystemRequirements?.processor},
        {title: 'Bellek', data: data?.minimumSystemRequirements?.memory},
        {title: 'Ekran Kartı', data: data?.minimumSystemRequirements?.graphicsCard},
        {title: 'Ağ', data: data?.minimumSystemRequirements?.network},
        {title: 'Depolama', data: data?.minimumSystemRequirements?.disk},
    ]
    const maxInfo = [
        {title: 'İşletim Sistemi', data: data?.recommendedSystemRequirements?.operatingSystem},
        {title: 'İşlemci', data: data?.recommendedSystemRequirements?.processor},
        {title: 'Bellek', data: data?.recommendedSystemRequirements?.memory},
        {title: 'Ekran Kartı', data: data?.recommendedSystemRequirements?.graphicsCard},
        {title: 'Ağ', data: data?.recommendedSystemRequirements?.network},
        {title: 'Depolama', data: data?.recommendedSystemRequirements?.disk},
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