'use client'

import Link from "next/link";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Dua1 = () => {

  const { t } = useTranslation();

  return (
    <div className="mx-auto p-[20px] w-[380px]  max-[420px]:w-[340px]">
      <Link href="../home">
        <IoIosArrowBack className="size-[42px]" />
      </Link>
      <div className="mt-[50px] flex flex-col gap-8">
        <div className="mx-auto">
          <Image
            alt="laylat al-Qodr"
            src={"/kadirdua.jpg"}
            width={300}
            height={300}
            loading='lazy'
            />
        </div>
        <p>
          <span className="font-bold">Транскрипция</span>: «Аллаhумма иннака
          ‘афуввун туẍиббу-ль-‘афва фа’фу ‘анни».
        </p>
        <p>
          <span className="font-bold">{t("meaning")}</span>: «{t("titleDua1.translateDua")}»
        </p>
      </div>
    </div>
  );
};

export default Dua1;
