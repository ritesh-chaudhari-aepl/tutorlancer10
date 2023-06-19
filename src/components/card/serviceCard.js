 import React from 'react'
 

const ServiceCard = ({ icon, bgColor, badgeCount, iconColor, title,msg }) => {
    return (
        <div className={`card  shadow-sm bg-white rounded-md  w-64  pb-4 flex flex-col justify-center items-center`}>
          {icon && (
            <div className={`h-10 mb-3 w-10 p-9 rounded-full ${bgColor} flex flex-col items-center justify-center relative`}>
              {React.cloneElement(icon, { color: iconColor })}
              {badgeCount && (
                <div className=" bg-btnColor text-base w-6 h-6 text-normalWhite flex items-center justify-center absolute   top-1 left-[53px] rounded-lg">
                  <span className="text-sm text-white ">{badgeCount}</span>
                </div>
              )}
            </div>
          )}
          <p className="font-[500] text-lg py-3 text-center px-3">{title}</p>
          <p className="font-[500] text-xs text-center px-3">{msg}</p>
        </div>
      );
}

export default ServiceCard