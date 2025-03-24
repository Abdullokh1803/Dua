'use client'

import React from 'react'
import { useTranslation } from 'react-i18next'

const Btn = () => {

    const { i18n } = useTranslation()

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("i18nextLng", lng);
      };

  return (
    <div className="mx-auto flex gap-5 pt-[20px] pl-[20px] w-[380px] max-[450px]:w-[380px]">
        <button
          className="bg-green-200 p-[7px] border cursor-pointer"
          onClick={() => changeLanguage("ru")}
        >
          ru
        </button>
        <button
          className="bg-green-200 p-[7px] border cursor-pointer"
          onClick={() => changeLanguage("kg")}
        >
          kg
        </button>
        <button
          className="bg-green-200 p-[7px] border cursor-pointer"
          onClick={() => changeLanguage("uz")}
        >
          uz
        </button>
      </div>
  )
}

export default Btn