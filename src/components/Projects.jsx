"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Image from "next/image";
import Button from "@/components/Button";
import ModalCard from "./ModalCard";

const Slide = ({ title, imageSrc , onProjectDetails, demoLink}) => (
  <div className="h-96 border-2 bg-black-50 dark:bg-black-600 border-black-300 rounded-3xl w-full text-center p-8 text-sm sm:text-lg">
   <div className="flex justify-center">
   <Image
      src={imageSrc}
      alt={title}
      height={400}
      width={400}
      className="w-60 h-36 rounded-xl"
    />
   </div>
    <p className="mt-3 text-xl font-semibold text-black-600 dark:text-white">{title}</p>
    <div className="flex items-center justify-center gap-5 mt-4">
      <Button type="outline" value="Details" className="w-28" onClick={onProjectDetails}/>
      <a href={demoLink} target="_blank">
        <Button type="outline" value="Demo" className="w-28" />
      </a>
    </div>
  </div>
);

const MenuSlider = () => {

  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    modalTitle: '',
    modalDescription: '',
  });

  const handleOpenModal = (title, description) => {
    setModalContent({ modalTitle: title, modalDescription: description });
    setOpenModal(true);
};

  const handleCloseModal = () => {
    setOpenModal(false);
  };


  return (
    <div className="pt-10 pb-28" id="projects">
      <div className="text-center mb-10">
        <p className=" text-black-400 dark:text-black-200">Browse My Recent</p>
        <p className="font-bold text-2xl md:text-5xl mt-3 text-black-600 dark:text-white">
          Projects
        </p>
      </div>
      <Swiper
        effect="coverflow"
        grabCursor={false}
        centeredSlides={true}
        initialSlide={2}
        breakpoints={{
          0: {
            slidesPerView: 1, // Show 1 slide on screens <= 640px
          },
          640: {
            slidesPerView: 4, // Show 4 slides on larger screens
          },
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="swiper"
      >
        <SwiperSlide className="swiper-slide">
          <Slide
            title="Treviya"
            imageSrc="/projects-image/3.png"
            onProjectDetails={() => handleOpenModal(
              'Treviya', 
              `
                <b>Project Technology:</b>
                <ul type="circle" style="margin:10px;list-style:circle;">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>JQuery</li>
                  <li>Bootstrap</li>
                  <li>Laravel</li>
                  <li>MySql</li>
                </ul>
                <br>
                <b>Key Functions:</b>
                <ul type="circle" style="margin-top:10px;list-style:circle;margin-left:10px">
                  <li>E-commerce</li>
                  <li>Light and dark mode website</li>
                  <li>Responsive layout for all screen devices</li>
                  <li>SignIn | SignUp | Reset password</li>
                  <li>Email integration for notifications</li>
                  <li>Secure personal tron crypto wallet address of blockchain for deposit</li>
                  <li>OTP code security</li>
                  <li>Real time transactions history</li>
                  <li>Referral Program</li>
                  <li>MLM integration</li>
                  <li>Real time commission transfer to upline 3 levels</li>
                  <li>Network structure tree (Genealogy)</li>
                </ul>
                <br>
                <b>Project Description:</b>
                <p style="margin-top:10px">
                  Cryptkeeper is a crypto wallet offering a great referral joining program with a monthly subscription fee of 30 USDT. If you join the program and refer someone who joins using your referral code, you will instantly receive a 10 USDT referral gift bonus in your wallet. If your direct referral then refers someone else using their own referral code, they will receive 10 USDT, and you will get 3 USDT from that level 2 referral. Similarly, if your level 2 team member refers someone to join the program, you will receive 2 USDT from that level 3 referral, instantly credited to your wallet.
                </p>
                <br>
                <b>Login Details:</b>
                <p style="margin-top:10px">
                  <b>Link: </b> <a href="https://treviya.com" target="_blank">https://treviya.com</a> <br>
                  <b>Username: </b>demo123 <br>
                  <b>Password: </b>Demo@123
                </p>
              `
            )}
            demoLink="https://treviya.com"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Slide
            title="Cryptkeeper"
            imageSrc="/projects-image/1.png"
            onProjectDetails={() => handleOpenModal(
              'Cryptkeeper', 
              `
                <b>Project Technology:</b>
                <ul type="circle" style="margin:10px;list-style:circle;">
                  <li>Front-end NextJS</li>
                  <li>Back-end API NextJS</li>
                  <li>TronWeb API Integration</li>
                  <li>Database MongoDB</li>
                </ul>
                <br>
                <b>Key Functions:</b>
                <ul type="circle" style="margin-top:10px;list-style:circle;margin-left:10px">
                  <li>Light and dark mode website</li>
                  <li>Responsive layout for all screen devices</li>
                  <li>SignIn | SignUp | Reset password</li>
                  <li>Email integration for notifications</li>
                  <li>Secure personal tron crypto wallet address of blockchain</li>
                  <li>Transfer funds to another wallet</li>
                  <li>OTP code security</li>
                  <li>Real time transactions history on blockchain</li>
                  <li>Referral Program</li>
                  <li>MLM integration</li>
                  <li>Subscription Membership</li>
                  <li>Real time commission transfer to upline 3 levels</li>
                  <li>Network structure tree (Genealogy)</li>
                </ul>
                <br>
                <b>Project Description:</b>
                <p style="margin-top:10px">
                  Cryptkeeper is a crypto wallet offering a great referral joining program with a monthly subscription fee of 30 USDT. If you join the program and refer someone who joins using your referral code, you will instantly receive a 10 USDT referral gift bonus in your wallet. If your direct referral then refers someone else using their own referral code, they will receive 10 USDT, and you will get 3 USDT from that level 2 referral. Similarly, if your level 2 team member refers someone to join the program, you will receive 2 USDT from that level 3 referral, instantly credited to your wallet.
                </p>
                <br>
                <b>Login Details:</b>
                <p style="margin-top:10px">
                  <b>Link: </b> <a href="https://cryptkeeperwallet.vercel.app/login" target="_blank">https://cryptkeeperwallet.vercel.app/login</a> <br>
                  <b>Username: </b>demo123 <br>
                  <b>Password: </b>Demo@123
                </p>
              `
            )}
            demoLink="https://cryptkeeperwallet.vercel.app"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Slide
            title="Cryptex Zone"
            imageSrc="/projects-image/2.png"
            onProjectDetails={() => handleOpenModal(
              'Cryptex Zone', 
              `
                <b>Project Technology:</b>
                <ul type="circle" style="margin:10px;list-style:circle;">
                  <li>Front-end NextJS</li>
                  <li>Back-end API NextJS</li>
                  <li>TronWeb API Integration</li>
                  <li>Database MongoDB</li>
                </ul>
                <br>
                <b>Key Functions:</b>
                <ul type="circle" style="margin-top:10px;list-style:circle;margin-left:10px">
                  <li>Light and dark mode website</li>
                  <li>Responsive layout for all screen devices</li>
                  <li>SignIn | SignUp | Reset password</li>
                  <li>Email integration for notifications</li>
                  <li>Secure personal tron crypto wallet address of blockchain</li>
                  <li>Transfer funds to another wallet</li>
                  <li>OTP code security</li>
                  <li>Real time transactions history on blockchain</li>
                  <li>Referral Program</li>
                  <li>MLM integration</li>
                  <li>Subscription Membership</li>
                  <li>Real time commission transfer to upline 3 levels</li>
                  <li>Network structure tree (Genealogy)</li>
                </ul>
                <br>
                <b>Project Description:</b>
                <p style="margin-top:10px">
                  Cryptkeeper is a crypto wallet offering a great referral joining program with a monthly subscription fee of 30 USDT. If you join the program and refer someone who joins using your referral code, you will instantly receive a 10 USDT referral gift bonus in your wallet. If your direct referral then refers someone else using their own referral code, they will receive 10 USDT, and you will get 3 USDT from that level 2 referral. Similarly, if your level 2 team member refers someone to join the program, you will receive 2 USDT from that level 3 referral, instantly credited to your wallet.
                </p>
                <br>
                <b>Login Details:</b>
                <p style="margin-top:10px">
                  <b>Link: </b> <a href="https://cryptexzone.vercel.app" target="_blank">https://cryptexzone.vercel.app</a> <br>
                  <b>Username: </b>demo123 <br>
                  <b>Password: </b>Demo@123
                </p>
              `
            )}
            demoLink="https://cryptexzone.vercel.app"
          
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Slide
            title="Chillichicks Restaurant"
            imageSrc="/projects-image/4.png"
            onProjectDetails={() => handleOpenModal(
              'Chillichicks Restaurant', 
              `
                <b>Project Technology:</b>
                <ul type="circle" style="margin:10px;list-style:circle;">
                  <li>Tailwind CSS</li>
                  <li>NextJS</li>
                  <li>MongoDB</li>
                </ul>
                <br>
                <b>Key Functions:</b>
                <ul type="circle" style="margin-top:10px;list-style:circle;margin-left:10px">
                  <li>E-commerce</li>
                  <li>Light and dark mode website</li>
                  <li>Responsive layout for all screen devices</li>
                  <li>SignIn | SignUp | Reset password</li>
                  <li>Email integration for notifications</li>
                  <li>User and admin dashboard</li>
                </ul>
                <br>
                <b>Project Description:</b>
                <p style="margin-top:10px">
                  Cryptkeeper is a crypto wallet offering a great referral joining program with a monthly subscription fee of 30 USDT. If you join the program and refer someone who joins using your referral code, you will instantly receive a 10 USDT referral gift bonus in your wallet. If your direct referral then refers someone else using their own referral code, they will receive 10 USDT, and you will get 3 USDT from that level 2 referral. Similarly, if your level 2 team member refers someone to join the program, you will receive 2 USDT from that level 3 referral, instantly credited to your wallet.
                </p>
                <br>
                <b>Login Details:</b>
                <p style="margin-top:10px">
                  <b>Link: </b> <a href="https://chillichicks.vercel.app" target="_blank">https://chillichicks.vercel.app</a> <br>
                  <b>Username: </b>demo123 <br>
                  <b>Password: </b>Demo@123
                </p>
              `
            )}
            demoLink="https://chillichicks.vercel.app"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Slide
            title="Jobpayeer"
            imageSrc="/projects-image/5.png"
            onProjectDetails={() => handleOpenModal(
              'Jobpayeer', 
              `
                <b>Project Technology:</b>
                <ul type="circle" style="margin:10px;list-style:circle;">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>JQuery</li>
                  <li>AJAX</li>
                  <li>Bootstrap</li>
                  <li>Laravel</li>
                  <li>MySql</li>
                </ul>
                <br>
                <b>Key Functions:</b>
                <ul type="circle" style="margin-top:10px;list-style:circle;margin-left:10px">
                  <li>Freelancing Platform</li>
                  <li>Micro jobs posting</li>
                  <li>Responsive layout for all screen devices</li>
                  <li>SignIn | SignUp | Reset password</li>
                  <li>Email integration for notifications</li>
                  <li>User and admin dashboard</li>
                </ul>
                <br>
                <b>Project Description:</b>
                <p style="margin-top:10px">
                  Cryptkeeper is a crypto wallet offering a great referral joining program with a monthly subscription fee of 30 USDT. If you join the program and refer someone who joins using your referral code, you will instantly receive a 10 USDT referral gift bonus in your wallet. If your direct referral then refers someone else using their own referral code, they will receive 10 USDT, and you will get 3 USDT from that level 2 referral. Similarly, if your level 2 team member refers someone to join the program, you will receive 2 USDT from that level 3 referral, instantly credited to your wallet.
                </p>
                <br>
                <b>Login Details:</b>
                <p style="margin-top:10px">
                  <b>Link: </b> <a href="https://jobpayeer.com/login" target="_blank">https://jobpayeer.com/login</a> <br>
                  <b>Username: </b>demo <br>
                  <b>Password: </b>Demo@123
                </p>
              `
            )}
            demoLink="https://jobpayeer.com/login"
          />
        </SwiperSlide>
        
      </Swiper>

      <ModalCard
        openModal={openModal}
        modalTitle={modalContent.modalTitle}
        modalDescription={modalContent.modalDescription}
        onClose={handleCloseModal}
      />

    </div>
  );
};

export default MenuSlider;
