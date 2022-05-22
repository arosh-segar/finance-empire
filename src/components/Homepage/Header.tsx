/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

export const Header: React.FC = () => {
  return (
    <div className="container h-screen relative">
      <div className="w-[66px] absolute top-10">
        <img src="/finance-empire-logo.png" alt="logo" className="w-full" />
      </div>
      <div className="flex w-full">
        <div className="w-1/2 h-screen flex flex-col justify-center">
          <h1 className="text-[#0A2623] text-6xl font-semibold leading-[75px]">
            Finance Empire
          </h1>
          <p className="text-[#4B5666] font-light text-3xl leading-[38px] mt-4 pr-10">
            Know where your money goes and manage all your finance in one place.
          </p>
          <a
            href="/Finance Empire.apk"
            download
            className="text-[#228074] font-medium text-xl leading-[25px] demo-button border-2 border-[#228074] transition ease-in-out delay-200 hover:bg-[#228074] hover:text-white w-[180px] rounded-[8px] py-4 mt-10 text-center"
          >
            Check Demo
          </a>
        </div>
        <div className="w-1/2 h-screen flex justify-end items-center">
          <div className="aspect-w-1 aspect-h-1 w-9/12">
            <Image
              src="/header.png"
              alt="header"
              className="w-full h-full"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
      <div className="xl:w-[1092px] xxl:w-[1280px] lg:-mt-24 xl:mt-0 xl:absolute bottom-5">
        <div className="w-full flex">
          <div className="flex w-1/2">
            <p className="mt-4 mr-4 text-[#0A2623] font-light leading-[30px] text-2xl">
              Follow us on:
            </p>
            <div className="flex gap-x-2">
              <a
                href="https://youtube.com/channel/UC1J9DH65qPqBK8Z9c6ZGheQ"
                target="_blank"
                className="w-[80px] h-[80px]"
                rel="noreferrer"
              >
                <img src="/youtube.svg" alt="logo" className="w-full" />
              </a>
              <a
                href="https://www.facebook.com/Finance-Empire-109422755110218/"
                target="_blank"
                className="w-[80px] h-[80px]"
                rel="noreferrer"
              >
                <img src="/facebook.svg" alt="logo" className="w-full" />
              </a>
              <a
                href="https://www.instagram.com/financeempireapp/"
                target="_blank"
                className="w-[80px] h-[80px]"
                rel="noreferrer"
              >
                <img src="/instagram.svg" alt="logo" className="w-full" />
              </a>
            </div>
          </div>
          <div className="flex w-1/2 items-end justify-end">
            <p className="text-[#4B5666] text-base font-thin leading-5">
              © Financial Empire · 2022
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
