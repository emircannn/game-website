/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const Description = ({showMore, setShowMore, routeAbout}) => {
  return (
    <div onClick={() => setShowMore(!showMore)} className={`flex cursor-pointer flex-col gap-[30px] ${!showMore && 'max-h-[250px] overflow-hidden'} duration-300  relative`}>
        <div>
            <h4 className='heading mb-[20px]'>Açıklama</h4>
            <p className='text-white/75 font-medium text-[13px] leading-6 tracking-wider'>
                PC için FIFA 23, futbol temalı oyunların muazzam bir serisinin en yeni oyunudur. FIFA International 
                Soccer'ın 1993'teki mütevazı başlangıcından bu yana, bu oyun serisi 18'den fazla dilde 51 ülkede üretilmiş 
                ve 325 milyondan fazla kopya satmıştır - herhangi bir video oyunu serisi için etkileyici bir rekor.</p>
        </div>

        <div id={routeAbout}>
        <h4 className="heading">Oyun Hakkında</h4>

        <p className="mt-[20px] text-white/75 font-medium text-[13px] leading-6 tracking-wider">
        Bu oyun, serinin önceki oyunlarının yürüttüğü harika çalışmaya devam ediyor ve bunun gerçek sahada görülen kapsayıcılığı içerdiği de dahil olmak üzere kadın takımlarının güçlü bir şekilde yer aldığı bir oyun.
        Barclays FA Kadınlar Süper Ligi ve Division 1 Arkema gibi ulusal ligler bile var ve bu size ilk kez kariyer modunda bir kadın oyuncu olarak oynamanıza izin verecek.
        Uygun olarak, Chelsea Ladies'den Sam Kerr, franchise'ın ilk kadın kapak yıldızı olurken, Paris St-Germain'den çok değerli Kylian Mbappe ile kapak yıldızlığını paylaşıyor.
        Çapraz platform oyunu desteklenir, bu nedenle farklı oyun konsollarında bulunan arkadaşlarınızla birlikte takım olabilirsiniz ve hepinizin sevdiği deneyimi kaybetmeden oynayabilirsiniz.
        Beklendiği gibi, birkaç oyun modu bulunuyor. Ultimate Team, bu sefer yenilenmiş bir kimya sistemiyle geri dönecek, Career Mode ise "Oynanabilir Önemli Anlar" ile sezonunuzu oynamanız için yeni bir yol sunacak. Pro Clubs ve Volta Football da oynanabilir olacak, bu nedenle sevdiğiniz oyun tarzını seçip çalışmaya başlayabilirsiniz.
        </p>
        </div>

        <div>
        <h4 className="heading">Detaylar</h4>
        <p className="mt-[20px] text-white/75 font-medium text-[13px] leading-6 tracking-wider">
        Bu sürümde, FIFA 23, EA Sports ve FIFA arasındaki lisanslama müzakerelerinin çökmesi sonrasında birlikte yapılan son oyun olacak - ancak EA Sports tarafından üretilen son futbol oyunu olmayacak. Bunun yerine, odak gerçek oyuncu ve takımlardan hayali olanlara kayacak. Ya da belki de EA Sports ile sözleşme imzalayan oyuncular ve takımlar yer alacak: Henüz çok fazla bilinmese de, adı EA Sports FC olacak.
        Bu arada, FIFA'nın piyasada mevcut olan 'en iyi' futbol oyununu üretmek için yeni bir geliştirici ile işbirliği yapmayı planladığı iddia ediliyor - FIFA adını taşıyacak tamamen yeni bir franchise. Bu yüzden bu oyunu bildiğiniz ve sevdiğiniz oyun olarak tanımlamak mümkün, ancak önümüzdeki bir yıl içinde, eski işbirliği yapan iki taraf da farklı oyunlar çıkarınca seçim yapmanız gerekebilir!
        Video oyununda oyun süresi yaklaşık 12 dakika sürer, bu nedenle eylem gerçek hayatta olduğundan daha hızlıdır. Uzun top sürüşleri ve voleybolleri maç süresini kolayca tüketebilir!
        Süper ayrıntılı grafik özelliği Hypermotion, son PC teklifinde (FIFA 22'de) atlanmıştı, bu da birçok futbol hayranını hayal kırıklığına uğratmıştı, bu yüzden bu sefer PC'lerin diğer konsollar kadar güncel tutulduğu haberleri rahatlatıcı bir haber, sahada biraz karışıklık olsa bile keskin ve son derece ayrıntılı oyun vaat ediyor.
        Kaleci animasyonları ve oynanış hissi ve görünümü, detaylı hareket yakalama (mo-cap) sayesinde büyük ölçüde iyileştirildi. Uzaktan şutlar büyük ölçüde geliştirildi, bazı yerlerde oyununuza hafif bir arcade hissi kattı - ancak inanılmaz uzak mesafeli şutlar yapmanıza izin verdiği için bunun pek sorun yaratmayacağına eminiz!
        </p>
        </div>

        <div>
        <h4 className="heading">Yenilikler</h4>
        <p className="mt-[20px] text-white/75 font-medium text-[13px] leading-6 tracking-wider">
        Yeni özelliklerin özetle şunları içerdiği: <br />
        İstediğiniz gibi oynayabileceğiniz iki dünya kupası <br />
        Kadın futbolculara daha fazla oyun deneyimi sunan iki kadın iç ligi <br />
        Daha gerçekçi oynanış için HyperMotion 2 teknolojisi. Bu, gerçek maçların kayıtlarından mo-cap kullanımı sayesinde gerçekçi bir his sunuyor. <br />
        Gerçek maç kayıtlarından elde edilen 6.000'den fazla animasyon, oyunu dramatik şekilde geliştirdi. Dribbling, volleler ve oyuncu hızlanması gibi unsurlar önceki oyunlara göre fark edilir şekilde iyileştirildi. <br />
        FIFA 23 PC sürümü, perakende fiyatının kesintili bir kısmı için Instant Gaming'den satın alınabilir. Resmi bir anahtar alacaksınız ve oyunu saniyeler içinde oynayabileceksiniz. Akıllıca oynayın, daha az ödeyin. <br />
        </p>
        </div>

        <div className={`${!showMore && 'opacity-gradient h-[100px] absolute'}   bottom-0 left-0 w-full  flex items-center justify-center`}>
                <button onClick={() => setShowMore(!showMore)} className={`bg-secondary ${!showMore && 'mt-[20px]'} text-white p-[16px] rounded-full`}>
                    {!showMore ? <AiOutlinePlus size={20}/> : <AiOutlineMinus size={20}/>}
                </button>
        </div>
    </div>
  )
}

export default Description