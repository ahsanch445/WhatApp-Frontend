import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatIcon from '@mui/icons-material/Chat';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
const Menu = () => {
  return (
    <>
      <nav  className='  px-2 flex gap-[13vw] items-center w-full h-16 bg-[#F0F2F5]'>

  <img className='h-10 w-10 rounded-full' src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
<div className='flex items-center gap-[4vw]'>

  <ChatIcon/>


<HistoryToggleOffIcon/>

<div className=" dropdown-menu-lg-start">
  <div className=" " id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    <MoreVertIcon/>
  </div>
  <ul className=" mt-3 dropdown-menu dropdown-menu-end dropdown-menu-lg-end">
    <li><a className="dropdown-item" href="#">Profile</a></li>
    <li><a className="dropdown-item" href="#">Chat</a></li>
    <li><a className="dropdown-item" href="#">Logout</a></li>
  </ul>
</div>
</div>


</nav>
    </>
  )
}

export default Menu
