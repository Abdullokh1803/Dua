"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import { IoIosArrowBack } from "react-icons/io";

const Dua4 = () => {
  const { t } = useTranslation();
  return (
    <div className="mx-auto p-[20px] w-[380px] max-[450px]:w-[340px]">
      <Link href="/" aria-label="Back to home">
        <IoIosArrowBack className="size-[42px]" />
      </Link>
      <div className="mt-[50px] flex flex-col gap-8">
        <div className="mx-auto">
          <Image
            src={"/robbana.png"}
            width={400}
            height={400}
            priority={true}
            style={{ width: "auto", height: "auto" }} 
            alt={t("titleDua4.title")}
          />
        </div>
        <p>
          <span className="font-bold">Транскрипция</span>: «Раббана атина
          фи-д-дунья хасанатан ва фи-ль-ахирати хасанатан ва кина ‘азаба-н-нар».
        </p>
        <p>
          <span className="font-bold">{t("meaning")}</span>: «
          {t("titleDua4.translateDua")}».
        </p>
      </div>
    </div>
  );
};

export default Dua4;
