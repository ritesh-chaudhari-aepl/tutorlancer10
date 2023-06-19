"use client";
import React from 'react';
// import { GoPeople } from "react-icons/go";
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
export default function GridCard  ({icon,title,msg }) {
  return (
    <div>
        <div className='text-center'>
              {icon}
            <div className='font-extrabold py-4 text-normalWhite'>{title}</div>
            <div className='text-normalWhite font-sans text-sm'>{msg}</div>
        </div>
    </div>
  )
}

 