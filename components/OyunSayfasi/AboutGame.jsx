/* eslint-disable react/no-unescaped-entities */
import Heart from '../../public/icons/heartfill.svg'
import Line from "../UI & Layout/Line"

const AboutGame = ({
    setShowMore,
    marginTop,
    textSize,
    routeAbout,
    routeReview
}) => {
  return (
    <div className={`${ marginTop && "mt-[580px] max-768:mt-[760px] max-450:mt-[600px]"} gap-x-[60px] gap-y-[20px] grid max-768:grid-cols-1 grid-cols-2`}>
        <div className="text-white">
            <h3 className="heading">Oyun Hakkında</h3>

            <p className="mt-[30px] text-white/75 font-medium text-[13px] leading-6 tracking-wider line-clamp-5">
            Bu oyun, serinin önceki oyunlarının yürüttüğü harika çalışmaya devam ediyor ve bunun gerçek sahada görülen kapsayıcılığı içerdiği de dahil olmak üzere kadın takımlarının güçlü bir şekilde yer aldığı bir oyun.
            Barclays FA Kadınlar Süper Ligi ve Division 1 Arkema gibi ulusal ligler bile var ve bu size ilk kez kariyer modunda bir kadın oyuncu olarak oynamanıza izin verecek.
            Uygun olarak, Chelsea Ladies'den Sam Kerr, franchise'ın ilk kadın kapak yıldızı olurken, Paris St-Germain'den çok değerli Kylian Mbappe ile kapak yıldızlığını paylaşıyor.
            Çapraz platform oyunu desteklenir, bu nedenle farklı oyun konsollarında bulunan arkadaşlarınızla birlikte takım olabilirsiniz ve hepinizin sevdiği deneyimi kaybetmeden oynayabilirsiniz.
            Beklendiği gibi, birkaç oyun modu bulunuyor. Ultimate Team, bu sefer yenilenmiş bir kimya sistemiyle geri dönecek, Career Mode ise "Oynanabilir Önemli Anlar" ile sezonunuzu oynamanız için yeni bir yol sunacak. Pro Clubs ve Volta Football da oynanabilir olacak, bu nedenle sevdiğiniz oyun tarzını seçip çalışmaya başlayabilirsiniz.
            </p>

            <a onClick={() => setShowMore(true)} href={routeAbout} className="font-medium text-secondary">Devamını Oku</a>
        </div>

        <div className="">
            <div className="flex items-center group">
                <Heart width='20' height='20'/>
                <a href={routeReview} className="text-white ml-[8px] group-hover:text-secondary duration-300 cursor-pointer">168 Değerlendirme</a>
            </div>

            <div className="768:mt-[35px] mt-[10px]">
                <Line 
                title='Yükleme' 
                data='Oyunumu Nasıl Aktive Ederim?'
                titleColor='#b6b6f8'
                dataHover={true}
                dataColor='white'
                dataTextSize={textSize}
                titleTextSize={textSize}
                />
                <Line 
                title='Geliştirici' 
                data='Electronic Arts'
                titleColor='#b6b6f8'
                dataHover={true}
                dataColor='white'
                dataTextSize={textSize}
                titleTextSize={textSize}
                />
                <Line 
                title='Çıkış Tarihi' 
                data='25 Eylül 2022'
                titleColor='#b6b6f8'
                dataHover={true}
                dataColor='white'
                dataTextSize={textSize}
                titleTextSize={textSize}
                />
                <Line 
                title='Kategori' 
                data='Spor, Simülasyon'
                titleColor='#b6b6f8'
                dataHover={true}
                dataColor='white'
                dataTextSize={textSize}
                titleTextSize={textSize}
                />
            </div>
        </div>
    </div>
  )
}

export default AboutGame