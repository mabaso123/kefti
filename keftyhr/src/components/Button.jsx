import React from 'react'

const Button = ({ styles }) => {
  return (
    <button type="button" className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>
      <a a href="https://formfacade.com/public/108237552681107675414/home/form/1FAIpQLSeXaT1lvOaoDlew1rwjXb7HRIM-hrTYwizu4n5kpDLtrMXBWw" target="_blank">Get Started</a>
    </button>
  )
}

export default Button