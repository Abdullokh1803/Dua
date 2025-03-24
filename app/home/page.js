'use client'

import Link from 'next/link'
import React from 'react'

const Home = ({t}) => {
  return (
    <div className="w-[380px] p-[20px] max-[450px]:w-[380px] mx-auto flex h-[70vh] flex-col justify-evenly text-[18px]">
        <div>
          <Link
            className=" font-semibold flex items-center gap-3 hover:underline hover:pl-[9px] transition-all"
            href="../dua1"
          >
            <p className="text-green-700 size-[27px]">👉︎</p>
            {t("titleDua1.title")}
          </Link>
        </div>
        <div>
          <Link
            className="font-semibold flex items-center gap-3 hover:underline hover:pl-[9px] transition-all"
            href="../dua2"
          >
            <p className="text-green-700 size-[27px]">👉︎</p>
            {t("titleDua2.title")}
          </Link>
        </div>
        <div>
          <Link
            className="font-semibold flex items-center gap-3 hover:underline hover:pl-[9px] transition-all"
            href="../dua3"
          >
            <p className="text-green-700 size-[27px]">👉︎</p>
            {t("titleDua3.title")}
          </Link>
        </div>
        <div>
          <Link
            className=" font-semibold flex items-center gap-3 hover:underline hover:pl-[9px] transition-all"
            href="../dua4"
          >
            <p className="text-green-700 size-[27px]">👉︎</p>
            {t("titleDua4.title")}
          </Link>
        </div>
        <div>
          <Link
            className=" font-semibold flex items-center gap-3 hover:underline hover:pl-[9px] transition-all"
            href="../dua5"
          >
            <p className="text-green-700 size-[27px]">👉︎</p>
            {t("titleDua5.title")}
          </Link>
        </div>
      </div>
  )
}

export default Home