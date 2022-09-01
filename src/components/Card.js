import React, { useRef } from 'react';
import HoverVideoPlayer from 'react-hover-video-player';
//router dom
import { Link } from 'react-router-dom';
//icons
import { BsEyeFill } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';
import { FaVideo } from 'react-icons/fa';
import { FaFolderPlus } from 'react-icons/fa'
//function
import kformat from '../utils/KFormat';

const Card = ({ avatar, name, likes, view, cover, video, title }) => {
    const hoverElement = useRef(null)

    return (
        <div className='w-full'>
            <div ref={hoverElement} className='rounded-lg w-full pb-2/3 relative h-0 overflow-hidden group'>
                <Link className='flex w-full h-full' to='/'>
                    {video &&
                        <div className='text-white absolute z-10 p-3 group-hover:hidden'>
                            <FaVideo />
                        </div>
                    }
                    <HoverVideoPlayer
                        className='w-full h-0 pb-2/3 relative'
                        videoSrc={video}
                        videoClassName='inset-0 absolute top-0 h-full w-full object-cover'
                        hoverTarget={hoverElement}
                        pausedOverlay={
                            <img
                                src={cover}
                                alt="cover"
                                className='inset-0 absolute top-0 h-full w-full object-cover'
                            />
                        }
                        loadingOverlay={
                            <div className="loading-overlay">
                                <div className="loading-spinner" />
                            </div>
                        }
                    />
                    <div className='opacity-0 group-hover:opacity-100 transition-all duration-500 absolute w-full h-1/3 z-10 bottom-0 from-transparent to-black bg-gradient-to-b '>
                        <div className='flex items-center justify-between px-4 absolute w-full bottom-5'>
                            <span className='align-middle text-white text-md overflow-hidden whitespace-nowrap text-ellipsis pl-2'>
                                {title}
                            </span>
                            <div className='flex'>
                                <button className='flex items-center justify-center w-9 h-9 bg-slate-50 rounded-lg ml-2 hover:bg-slate-200'>
                                    <FaFolderPlus className='text-color-Text2 text-lg' />
                                </button>
                                <button className='flex items-center justify-center w-9 h-9 bg-slate-50 rounded-lg hover:bg-slate-200'>
                                    <AiFillHeart className='text-color-Text2 text-lg' />
                                </button>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className='w-full mt-2 flex items-center text-sm justify-between'>
                <Link className='flex items-center overflow-hidden ml-2' to='/'>
                    <img className='w-6 h-6 object-cover rounded-full flex ml-2' src={avatar} alt="avatar" />
                    <span className='flex-1 overflow-hidden whitespace-nowrap text-ellipsis'>{name}</span>

                </Link>
                <div className='flex items-center'>
                    <div className='flex items-center ml-2'>
                        <span className='flex items-center text-xs h-24px'>{view && kformat(view, 1)}</span>
                        <BsEyeFill className='text-base mr-1 text-color-Text2 hover:text-color-main-1' />
                    </div>
                    <div className='flex items-center'>
                        <span className='flex items-center text-xs'>{likes && kformat(likes, 1)}</span>
                        <AiFillHeart className='text-base mr-1 text-color-Text2 hover:text-color-main-1 hover:cursor-pointer' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;