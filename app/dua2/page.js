'use client'

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import { IoIosArrowBack } from "react-icons/io";

const Dua2 = () => {

  const { t } = useTranslation(); 
  return (
    <div className="mx-auto p-[20px] w-[380px] max-[450px]:w-[340px]">
      <Link href="/" aria-label="Back to home">
        <IoIosArrowBack className="size-[42px]" />
      </Link>
      <div className="mt-[50px] flex flex-col gap-8">
        <div className="mx-auto">
          <Image
            src={"/child.png"}
            width={400}
            height={400}
            priority={true}
            style={{ width: "auto", height: "auto" }} 
            alt={t("titleDua2.title")}
            />
        </div>
        <p>
          <span className="font-bold">Транскрипция</span>: «Раббана hаб ляна мин
          азважина ва ҙуррийятина ḱуррата а‘юнин важ‘альна лильмуттаḱина имама».
        </p>
        <p>
          <span className="font-bold">{t("meaning")}</span>: «{t("titleDua2.translateDua")}»
        </p>
      </div>
    </div>
  );
};

export default Dua2;
