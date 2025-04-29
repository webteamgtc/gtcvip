'use client'
import { useTranslations } from 'next-intl'
import React from 'react'

const CopyRight = () => {
    const t = useTranslations('footerCopyRight');
  return (
    <div className='text-gray-400 flex justify-center items-center mt-10 text-[8px] md:text-sm  text-center'>
        {t("copyRightText")}
    </div>
  )
}

export default CopyRight