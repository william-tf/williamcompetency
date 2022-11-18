import React from 'react'

export default function WelcomeCard({icon, title, text}) {
    console.log(icon, title, text)
  return (
    <div
    id="container"
    className=" h-2/4 w-1/4 bg-lightShade flex flex-col mx-4"
    >
    <div
    id="icon/title container"
    className="flex  h-1/2 w-full flex flex-row "
    >
    <div
    id="icon"
    className="w-1/12 h-full flex items-center justify-start"
    >
<i className={`fa-regular fa-${icon} text-3xl text-mainColor`}/>
    </div>
    <div
    id="title"
    className="w-full h-full flex items-center justify-start text-darkShade text-baskerville font-bold pl-4"
    >
        <span className="text-baskerville text-semibold text-2xl tracking-tight leading-tight">
        {title}
        </span>
    </div>
    </div>
    <div
    id="text/empty space container"
    className="h-full w-full  flex flex-row"
    >
    <div
    id="empty space"
    className="w-2/12 h-full "
    >

    </div>
    <div
    id="text"
    className="flex items-start justify-start text-darkShade pl-4 text-sans-pro font-medium "
    >
        <span>{text}</span>
    </div>
    </div>
    </div>
  )
}
