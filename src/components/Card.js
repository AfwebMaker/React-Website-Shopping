import React, { useState } from 'react';
//router dom
import { Link } from 'react-router-dom';
//icons
import { BsEyeFill } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';
import { FaVideo } from 'react-icons/fa';

const Card = ({ avatar, name, likes, view, cover, video }) => {
    const [isPlay, setIsPlay] = useState(false);

    const videoHandler = (play) => {
        (play === 'play' && video) ? setIsPlay(true) : setIsPlay(false);
    }

    return (
        <div>
            <div onMouseEnter={() => videoHandler('play')} onMouseOut={() => videoHandler('pause')} className='rounded-lg pb-2/3 relative h-0 overflow-hidden'>
                <Link className='flex' to='/'>
                    {video &&
                        <div className='text-white absolute z-10 p-3'>
                            <FaVideo />
                        </div>
                    }
                    {!isPlay ?
                        <img className='inset-0 absolute h-full w-full object-cover' src={cover} alt="avatar" />
                        : <video autoPlay muted className='inset-0 absolute h-full w-full object-cover z-20' src={video}></video>
                    }
                </Link>
            </div>
            <div className='mt-2 flex items-center text-sm justify-between'>
                <div className='flex items-center'>
                    <img className='w-6 h-6 object-cover rounded-full flex ml-2' src={avatar} alt="avatar" />
                    <span className='flex items-center'>{name}</span>
                </div>
                <div className='flex items-center'>
                    <div className='flex items-center ml-2'>
                        <span className='flex items-center text-xs h-24px'>{view}</span>
                        <BsEyeFill className='text-base mr-1 text-color-Text2 hover:text-color-main-1' />
                    </div>
                    <div className='flex items-center'>
                        <span className='flex items-center text-xs'>{likes}</span>
                        <AiFillHeart className='text-base mr-1 text-color-Text2 hover:text-color-main-1 hover:cursor-pointer' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;