"use client";
import GridCard from '@/components/card/gridCard'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
const Grid = () => {
  return (
    <div class="grid grid-cols-2  sm:grid-cols-4 lg:grid-cols-4 grid-flow-row  ">
  
        <div className='sm:py-10 py-3 sm:px-7 sm-2 items-center   bg-btnColor'>
            <GridCard   icon={<div className='p-3 border-2  border-normalWhite  rounded-full w-fit m-auto'>
                <PeopleAltOutlinedIcon fontSize='medium' className=''/></div>} 
                title="TUTOR LANCER"
                 msg="This is the best tutorinal inthe worls "/></div>
        
        <div className='sm:py-10 py-3 sm:px-7 sm-2 items-center  e bg-darkBlue'>
            <GridCard icon={<div className='p-3 border-2  border-normalWhite  rounded-full w-fit m-auto'>
                <PeopleAltOutlinedIcon fontSize='medium' className=''/></div>} 
                title="TUTOR LANCER"
                 msg="This is the best tutorinal inthe worls "/></div>
        
        <div className='sm:py-10 py-3 sm:px-7 sm-2 items-center bg-darkBlue sm:bg-btnColor'>
            <GridCard icon={<div className='p-3 border-2 border-normalWhite  rounded-full w-fit m-auto'>
                <PeopleAltOutlinedIcon fontSize='medium' className=''/></div>} 
                title="TUTOR LANCER"
                 msg="This is the best tutorinal inthe worls "/></div>
        
        <div className='sm:py-10 py-3 sm:px-7 sm-2 items-center bg-btnColor sm:bg-darkBlue '>
            <GridCard icon={<div className='p-3 border-2 border-normalWhite  rounded-full w-fit m-auto'>
                <PeopleAltOutlinedIcon fontSize='medium' className=''/></div>} 
                title="TUTOR LANCER"
                 msg="This is the best tutorinal inthe worls "/></div>
        
        <div className='sm:py-10 py-3 sm:px-7 sm-2 items-center   bg-btnColor sm:bg-darkBlue '>
            <GridCard icon={<div className='p-3 border-2 border-normalWhite  rounded-full w-fit m-auto'>
                <PeopleAltOutlinedIcon fontSize='medium' className=''/></div>} 
                title="TUTOR LANCER"
                 msg="This is the best tutorinal inthe worls "/></div>
        
        <div className='sm:py-10 py-3 sm:px-7 sm-2 items-center bg-darkBlue sm:bg-btnColor  '>
            <GridCard icon={<div className='p-3 border-2 border-normalWhite  rounded-full w-fit m-auto'>
                <PeopleAltOutlinedIcon fontSize='medium' className=''/></div>} 
                title="TUTOR LANCER"
                 msg="This is the best tutorinal inthe worls "/></div>
        
        <div className='sm:py-10 py-3 sm:px-7 sm-2 items-center   bg-darkBlue  '>
            <GridCard icon={<div className='p-3 border-2 border-normalWhite  rounded-full w-fit m-auto'>
                <PeopleAltOutlinedIcon fontSize='medium' className=''/></div>} 
                title="TUTOR LANCER"
                 msg="This is the best tutorinal inthe worls "/></div>
        
        <div className='sm:py-10 py-3 sm:px-7 sm-2 items-center   bg-btnColor '>
            <GridCard icon={<div className='p-3 border-2 border-normalWhite  rounded-full w-fit m-auto'><PeopleAltOutlinedIcon fontSize='medium' className=''/></div>} title="TUTOR LANCER" msg="This is the best tutorinal inthe worls "/></div>
</div>
  )
}

export default Grid


