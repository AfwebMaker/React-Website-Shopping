import React from 'react'
//components
import Card from '../../components/Card';

const data = [
  {
    avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
    name: ' محسن چاوشی',
    likes: 225,
    view: 1000,
    cover: 'https://cdn.dribbble.com/userupload/3374439/file/still-8f6e659da463ee37d5524f083024919f.png?compress=1&resize=320x240&vertical=top',
    video: 'https://cdn.dribbble.com/userupload/3374440/file/original-ba107e9b5f86ca1a89ed03c72d578c0f.mp4'
  },
  {
    avatar: 'https://www.exibartstreet.com/wp-content/uploads/avatars/2465/5e0de52aeee8b-bpfull.jpg',
    name: 'محمد امینی',
    likes: 503,
    view: 3500,
    cover: 'https://cdn.dribbble.com/userupload/3373886/file/still-4104f2bbe2968dd895836d9ccaddcddb.png?compress=1&resize=320x240&vertical=top',
    video: 'https://cdn.dribbble.com/userupload/3373887/file/original-b1445fc2db357d0c342f7688e24d18b5.mp4'
  },
  {
    avatar: 'https://www.assyst.de/cms/upload/sub/digitalisierung/18-F.jpg',
    name: 'سارا جلالی',
    likes: 123,
    view: 536,
    cover: 'https://cdn.dribbble.com/userupload/3369157/file/still-ecd04f7915ed6b63722fdfbec589913a.png?compress=1&resize=320x240&vertical=top',
    video: 'https://cdn.dribbble.com/userupload/3369157/file/small-3326111c04c5dd90a51c198557a027c3.mp4'
  },
  {
    avatar: 'https://www.assyst.de/cms/upload/sub/digitalisierung/15-M.jpg',
    name: 'هوشنگ ابتهاج',
    likes: 620,
    view: 2352,
    cover: 'https://cdn.dribbble.com/userupload/3371459/file/still-c37a45e7c14c551d2b301976a16f0f07.png?compress=1&resize=320x240&vertical=top',
    // video: 'https://cdn.dribbble.com/userupload/3371461/file/original-d86d4603fd3bc8efaf41361b5f88fd62.mp4'
  }
]

const LikeSubMenu = () => {
  return (
    <div className='grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 my-16'>
      {
        data && data.length === 0 ?
          <div className='col-span-3 flex flex-col items-center justify-center mb-14'>
            <img className='w-[380px]' src="https://cdn.dribbble.com/assets/art-banners/new-style-96de72c34429242b10db10db7c0ff7036611fdfefc82a7703e9c3cd1e976f0e1.png" alt="like" />
            <div className='flex flex-col items-center'>
              <span className='font-bold text-2xl mb-5'>قدردانی خود را ابراز کنید</span>
              <span className='text-sm text-color-Text2 w-[600px] text-center'>
                قدردانی خود را از کار دیگران با لایک کردن عکس هایی که دوست دارید نشان دهید. ما همه لایک‌های شما را در اینجا جمع‌آوری می‌کنیم تا هر زمان که بخواهید دوباره ببینید.
              </span>
            </div>
          </div>

          : data.map(item => (
            <Card
              avatar={item.avatar}
              name={item.name}
              likes={item.likes}
              view={item.view}
              cover={item.cover}
              video={item.video}

            />
          ))
      }
    </div>

  )
}

export default LikeSubMenu;