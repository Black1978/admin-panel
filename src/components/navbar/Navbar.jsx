import './navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import ListOutlinedIcon from '@mui/icons-material/ListOutlined'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='wrapper'>
                <div className='search'>
                    <input type='text' placeholder='Search ...' />
                    <SearchOutlinedIcon />
                </div>
                <div className='items'>
                <div className='item'>
                        <LanguageOutlinedIcon className='icon'/>
                        English
                    </div>
                    <div className='item'>
                        <DarkModeOutlinedIcon className='icon'/>
                        English
                    </div>
                    <div className='item'>
                        <FullscreenExitOutlinedIcon className='icon'/>
                    </div>
                    <div className='item'>
                        <NotificationsNoneOutlinedIcon className='icon'/>
                        <div className="counter">1</div>
                    </div>
                    <div className='item'>
                        <ChatBubbleOutlineOutlinedIcon className='icon'/>
                        <div className="counter">2</div>
                    </div>
                    <div className='item'>
                        <ListOutlinedIcon />
                    </div>
                    <div className='item'>
                        <img src="https://picjumbo.com/wp-content/uploads/young-woman-welcoming-a-new-day-right-after-morning-shower-free-photo-1080x720.jpg" alt="" className='avatar'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
