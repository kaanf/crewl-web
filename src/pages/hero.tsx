"use client";

import React, { Fragment, useState, useRef } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Modal from "../components/Modal";
import minik from "../components/minik.png"
import ekip from "../components/AG6.png"
import logo from "../components/logo_cloud.png"
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { writeUserData } from "../firebase";
import NeubrutalButton from '../pages/NeubrutalismButton'
import PhoneInput from 'react-phone-number-input';
import { BiRightArrowAlt } from "react-icons/bi";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const userId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  const [value, setValue] = useState()

  const cityInputRef = useRef<HTMLInputElement>(null);

  const cityFocus = () => {
    if (cityInputRef.current) {
      cityInputRef.current.type = "date";
    }
  };

  const cityBlur = () => {
    if (cityInputRef.current) {
      cityInputRef.current.type = "text";
    }
  };
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const formik = useFormik({
    initialValues: {
      name: "",
      tel: "",
      country: "İzmir",
      terms: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "İsim alanı 20 karakterden daha uzun olamaz."),
      tel: Yup.string().matches(phoneRegExp, 'Telefon numarası geçersiz.'),
      terms: Yup.array(),
    }),

    onSubmit: (values) => {
      console.log("form submitted");
      setShowModal(false)
      alert("Form Submitted Successfully")

    writeUserData(userId, name, city, email);
      console.log(values);
    },
  });

  React.useEffect(() => {
    showModal
      ? document.body.classList.add("modal-open")
      : document.body.classList.remove("modal-open");
  }, [showModal]);

  // @ts-ignore
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userId, name, city, email);
    
    writeUserData(userId, name, city, email);
    setShowModal(false);
  };

  return (
    <Fragment>
      <div >
       <div className="pt-12 mt-12 md:pt-12 flex justify-center">
        <Image
          src={logo}
          alt="Monkey"
          width={150}
          height={200}
        />
        
        </div>
      <div className="max-w-7xl mx-auto pb-16 pt-12">

        <div className="pt-4 md:pt-12 flex justify-center">
          <Link
            href="#"
            onClick={() => setShowModal(true)}
            className="border-2 border-[#222] flex items-center justify-center py-2 px-4 bg-orange-300 group relative"
          >
            <span className="text-center text-lg font-mono">
              <br className="block md:hidden" /> {`Kapalı beta'ya katılmak için ön kayıt ol`}
            </span>
            <div className="absolute bg-[#222] h-full w-[101%] -z-10 top-2.5 left-1 group-hover:translate-x-1 group-hover:translate-y-1 transition duration-200"></div>
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center text-center pt-6">
          <h2
            style={{ lineHeight: "1.25" }}
            className="text-5xl md:text-6xl py-12 md:py-12 font-space-grotesk font-light"
          >
            Dünyanın ilk interaktif<br></br>
            <span className="font-bold"> Pub Crawl </span>
            {`uygulamasına`}
            <span className="font-bold"> {`şimdi katıl`}</span>.
          </h2>
          <p className="pt-8 max-w-4xl mx-auto text-xl font-light">
          <i>Crewl</i>, şehrindeki en iyi barları gezip eğlenceli oyunlar oynayarak unutulmaz anlar yaşayabileceğin, sosyal bir pub crawl deneyimi sunan interaktif bir mobil uygulamadır.
        </p>
          
        </div>
        

        <div className="pt-4 md:pt-12 flex justify-center">
        <Image
          src={minik}
          alt="Monkey"
          width={100}
          height={200}
        />
        </div>
        <div className="flex flex-col items-center justify-center text-center">
        <p className="pt-8 max-w-4xl mx-auto text-3xl font-light">
      Çok yakında  &mdash; 
          <span className="font-semibold"> Play Store</span> ve <span className="font-semibold">App Store</span>'da.
        </p>


      </div>
      </div>

      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-3 border-t-2 border-b-2 border-[#222] relative">
          <div className="border-b-2 md:border-b-0 md:border-r-2 border-[#222] p-12 flex flex-col relative">
            <span className="font-light text-sm">1. Bar</span>
            <p className="py-6 text-4xl font-light tracking-widest">
            {`Takımınla Başlangıç Yap!`}
            </p>
            <p className="text-sm font-mono">
            {`1. Uygulamayı indir ve etkinlik biletini satın al.`} <br />
              <br />
              {`2. İlk bara git ve takımını oluştur. `}<br /> <br />
              {`3. Takımının gücünü birleştirerek belirtilen puanı topla ve
              sonraki bar'ın kilidini açan ilk takım olmaya çalış.`}
              <br /> <br />
              <span className="font-light text-sm">
              {`(Sonraki bar'a ulaşan ilk takım o barın özel içeceğini kazanır.)`}
              </span>
            </p>
            <div className="absolute top-[92%] right-3/5 md:top-1/2 md:-right-6 bg-blue-200 rounded-full h-12 w-12 border-2 border-[#222] flex justify-center items-center text-2xl">
              <BiRightArrowAlt className="rotate-90 md:rotate-0" />
            </div>
          </div>
          <div className="border-b-2 md:border-b-0 md:border-r-2 border-[#222] p-12 flex flex-col relative">
            <span className="font-light text-sm">2. Bar</span>
            <p className="py-6 text-4xl font-light tracking-widest">
            {`Diğer Ekiplerle Rekabete Gir!`}
            </p>
            <p className="text-sm font-mono">
            {`1. İkinci barda ekibinle beraber diğer ekiplerle heyecan dolu
              oyunlara katıl. `}<br />
              <br />
              {`2. Stratejilerini kullanarak diğer ekipleri geride bırak ve
              Crewl'un en iyisi olmak için mücadele et.`} <br />
              <br />
              {`3. Kazandığında sana verilen ipuçlarını birleştir ve sonraki barın
              kilidini aç.`}
              <br />
              <br />
              <span className="font-light text-sm">
              {`(Sonraki bar'a ulaşan ilk takım o barın özel içeceğini kazanır.)`}
              </span>
            </p>
            <div className="absolute top-[92%] right-3/5 md:top-1/2 md:-right-6 bg-orange-300 rounded-full h-12 w-12 border-2 border-[#222] flex justify-center items-center text-2xl">
              <BiRightArrowAlt className="rotate-90 md:rotate-0" />
            </div>
          </div>
          <div className="p-12 flex flex-col">
            <span className="font-light text-sm">3. Bar</span>
            <p className="py-6 text-4xl font-light tracking-widest">
            {`Bireysel Performansını Göster!`}
            </p>
            <p className="text-sm font-mono">
            {`1. Son barda takımına veda edip diğer oyuncularla bireysel oyunlar
              oyna. `}<br />
              <br />
              {`2. Verilen görevleri yerine getirerek yüksek puanlar topla ve
              liderlik için mücadele et.`} <br />
              <br />
              {`3. Liderlik sırasına girmek için son düzlükte en iyisi ol.`} <br />
              <br />
              <span className="font-light text-sm">
              {`(İlk 3 oyuncu unutulmaz ödüllerin sahibi olacak.)`}
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12">
        <div className="flex flex-col justify-center items-center py-16 mb-16">
        <Image
          src={ekip}
          alt="Your Image Alt Text"
          className="mb-12"
          width={200} // Adjust the width and height as needed
          height={200}
        />
          <span className="text-xs uppercase tracking-widest">
          Ekibimize katılmak ister misin?
          </span>
          <p className="font-semibold text-3xl py-4 text-center">
          Crewl ekibine katılmak için heyecan verici bir fırsat!
          </p>
          <p className="font-mono text-sm w-1/2 text-center pb-6">
          Bar gezintisi, oyunlar, eğlence ve yeni insanlarla tanışma deneyimini bizimle yaşayarak unutulmaz anılara ortak olabilirsin. Hadi, birlikte büyüyelim ve eğlence dolu bir yolculuğa çıkalım!
          </p>
          <div className="border-2 border-[#222] flex items-center justify-center py-2 mt-2 px-4 bg-orange-300 relative group cursor-pointer">
            <span className="text-center text-sm md:text-sm font-mono">
              Discord'a Katıl
            </span>
            <div className="absolute bg-[#222] h-full w-[101%] -z-10 top-2 md:top-2.5 left-1 md:left-2 group-hover:translate-x-1 group-hover:translate-y-1 transition duration-200"></div>
          </div>
        </div>
        

      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
       

        <form
          onSubmit={formik.handleSubmit}
          className="bg-white flex-col rounded-lg font-latoRegular"
        >
          
          <div className="flex-1 text-gray-700  p-12">
            <h1 className="text-3xl pb-2 font-latoBold">
              Kapalı Beta Kayıt Formu 👋
            </h1>
            <br></br>
            <p className="text-md  text-gray-500">
            {` Crewl uygulamamızın beta versiyonunu test etmek için sınırlı sayıda partilemeyi seven katılımcı arıyoruz! `}
            <br></br><br></br>
            {`Şehrindeki en iyi barları gezeceksin, ücretsiz kokteylleri deneyeceksin ve yeni insanlarla eğlence dolu bir gece geçireceksin. `}
            <br></br><br></br>
            {`Ücretsiz ön kayıt etkinliğimizde bize eşlik etmek için kayıt ol!`}
            </p>
            
            <div className="mt-6 ">
              {/* Name input field */}
              <div className="pb-4">
                <label
                  htmlFor="name"
                  className={`block font-latoBold text-sm pb-2 ${
                    formik.touched.name && formik.errors.name
                      ? "text-red-400"
                      : ""
                  } `}
                >
                  {formik.touched.name && formik.errors.name
                    ? formik.errors.name
                    : "İsim"}
                </label>
                <p className="text-sm font-latoBold text-red-400 "></p>
                <input
                  className="border-2 border-gray-500 p-2 rounded-md focus:border-teal-500 focus:ring-teal-500 "
                  type="text"
                  name="name"
                  placeholder="İsim Soyisim"
                  onChange={
                    (e) => setName(e.target.value)
                  }
                  required
                />
              </div>
              {/* Email input field */}
              <div className="pb-4">
                <label
                  htmlFor="phone"
                  className={`block font-latoBold text-sm pb-2 ${
                    formik.touched.tel && formik.errors.tel
                      ? "text-red-400"
                      : ""
                  }`}
                >
                  {formik.touched.tel && formik.errors.tel
                    ? formik.errors.tel
                    : "Telefon Numarası"}
                </label>

                <p></p>
                <input
                  className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500"
                  type="tel" name="tel" placeholder="5xx xxx xxxx" required
                  onChange={(e) => setEmail(e.target.value)}
                  minLength={10}
                  maxLength={10}
                />
              </div>

              {/* Email input field */}
              <div className="pb-4">
                <label
                  htmlFor="phone"
                  className={`block font-latoBold text-sm pb-2 ${
                    formik.touched.tel && formik.errors.tel
                      ? "text-red-400"
                      : ""
                  }`}
                >
                  {formik.touched.tel && formik.errors.tel
                    ? formik.errors.tel
                    : "Instagram Kullanıcı Adı"}
                </label>

                <p></p>
                <input
                  className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500"
                  type="tel" name="tel" placeholder="@crewlapp (Opsiyonel)" pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
                  onChange={(e) => setEmail(e.target.value)}
                  minLength={10}
                  maxLength={10}
                />
              </div>
              
              {/* Country input field */}
              <div className="pb-4">
                <label
                  htmlFor="country"
                  className="block font-latoBold text-sm pb-2"
                >
                  Şehir
                </label>
                <select
                  className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500"
                  name="country"
                >
                  <option>İzmir</option>
                </select>
              </div>
              {/* Terms of service*/}
              
              <div className="pb-4">
                <label
                  htmlFor="terms"
                  className={`block font-latoBold text-sm pb-2 ${
                    formik.touched.terms && formik.errors.terms
                      ? "text-red-400"
                      : ""
                  }`}
                >
                  {formik.touched.terms && formik.errors.terms
                    ? formik.errors.terms
                    : "Kişisel Veriler"}
                </label>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="terms"
                    value="checked"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="h-5 w-5 text-teal-500 border-2  background-gray-500 focus:border-teal-500 focus:ring-teal-500"
                    required
                  />
                  <p className="text-sm font-latoBold text-gray-500">
                    KVKK kapsamında kişisel verilerimi paylaşmayı kabul ediyorum.
                  </p>
                </div>
              </div>
              <button
                type="submit"
                className="bg-teal-500 font-latoBold text-sm text-white py-3 mt-6 rounded-lg w-full"
              >
                Kayıt Ol
              </button>
            </div>
          </div>
          <div className="relative flex-1">
          </div>
        </form>
      </Modal>

      <div className="text-xs font-mono text-center">
            <span>&copy; Alis Development House. All Rights Reserved.</span>
          </div>
      </div>
      </div>
    </Fragment>
  );
};

export default Hero;
