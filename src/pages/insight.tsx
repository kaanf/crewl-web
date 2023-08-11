import React from 'react'

import {
  BiRightArrowAlt
} from 'react-icons/bi'

const Insight = () => {
  return (
    <div className="max-w-7xl mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-3 border-t-2 border-b-2 border-[#222] relative">
        <div className="border-b-2 md:border-b-0 md:border-r-2 border-[#222] p-12 flex flex-col relative">
          <span className="font-light text-sm">1. Bar</span>
          <p className="py-6 text-4xl font-light tracking-widest">{`Takımınla Başlangıç Yap!`}</p>
          <p className="text-sm font-mono">
          {`1. Uygulamayı indir ve etkinlik biletini satın al.`} <br /><br />
          {`2. İlk bara git ve takımını oluştur.`} <br /> <br />
          {`3. Takımının gücünü birleştirerek belirtilen puanı topla ve sonraki bar'ın kilidini açan ilk takım olmaya çalış.`}<br /> <br />
          
          <span className="font-light text-sm">{`(Sonraki bar'a ulaşan ilk takım o barın özel içeceğini kazanır.)`}</span>
          </p>
          <div className="absolute top-[92%] right-3/5 md:top-1/2 md:-right-6 bg-blue-200 rounded-full h-12 w-12 border-2 border-[#222] flex justify-center items-center text-2xl">
            <BiRightArrowAlt 
              className="rotate-90 md:rotate-0" />
          </div>
        </div>
        <div className="border-b-2 md:border-b-0 md:border-r-2 border-[#222] p-12 flex flex-col relative">
          <span className="font-light text-sm">2. Bar</span>
          <p className="py-6 text-4xl font-light tracking-widest">{`Diğer Ekiplerle Rekabete Gir!`}</p>
          <p className="text-sm font-mono">
          {`1. İkinci barda ekibinle beraber diğer ekiplerle heyecan dolu oyunlara katıl. `}<br /><br />
          {`2. Stratejilerini kullanarak diğer ekipleri geride bırak ve Crewl'un en iyisi olmak için mücadele et. `} <br /><br />
          {`3. Kazandığında sana verilen ipuçlarını birleştir ve sonraki barın kilidini aç.`}<br /><br />
          
          <span className="font-light text-sm">{`(Sonraki bar'a ulaşan ilk takım o barın özel içeceğini kazanır.)`}</span>
          </p>
          <div className="absolute top-[92%] right-3/5 md:top-1/2 md:-right-6 bg-orange-300 rounded-full h-12 w-12 border-2 border-[#222] flex justify-center items-center text-2xl">
            <BiRightArrowAlt 
              className="rotate-90 md:rotate-0" />
          </div>
        </div>
        <div className="p-12 flex flex-col">
          <span className="font-light text-sm">3. Bar</span>
          <p className="py-6 text-4xl font-light tracking-widest">{`Bireysel Performansını Göster!`}</p>
          <p className="text-sm font-mono">
          {`1. Son barda takımına veda edip diğer oyuncularla bireysel oyunlar oyna. `} <br /><br />
          {`2. Verilen görevleri yerine getirerek yüksek puanlar topla ve liderlik için mücadele et. `} <br /><br />
          {`3. Liderlik sırasına girmek için son düzlükte en iyisi ol. `} <br /><br />

          <span className="font-light text-sm">{`(İlk 3 oyuncu unutulmaz ödüllerin sahibi olacak.)`}</span>
          </p>
        </div>
      </div>

    </div>
  )
}

export default Insight