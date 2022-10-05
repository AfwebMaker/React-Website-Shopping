import React from 'react'
//components
import Card from './Card'

const data = [
    {
        id: 1,
        avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
        name: ' محسن چاوشی',
        title: 'پروژه فروشگاهی ساده',
        likes: 225,
        view: 1000,
        cover: 'https://cdn.dribbble.com/userupload/3374439/file/still-8f6e659da463ee37d5524f083024919f.png?compress=1&resize=320x240&vertical=top',
        video: 'https://cdn.dribbble.com/userupload/3374440/file/original-ba107e9b5f86ca1a89ed03c72d578c0f.mp4'
    },
    {
        id: 2,
        avatar: 'https://www.exibartstreet.com/wp-content/uploads/avatars/2465/5e0de52aeee8b-bpfull.jpg',
        name: 'سید میثاق حمزه زاده موسوی',
        title: 'شرکتی با تم های ابی و بنفش',
        likes: 503,
        view: 3500,
        cover: 'https://cdn.dribbble.com/userupload/3373886/file/still-4104f2bbe2968dd895836d9ccaddcddb.png?compress=1&resize=320x240&vertical=top',
        video: 'https://cdn.dribbble.com/userupload/3373887/file/original-b1445fc2db357d0c342f7688e24d18b5.mp4'
    },
    {
        id: 3,
        avatar: 'https://www.assyst.de/cms/upload/sub/digitalisierung/18-F.jpg',
        name: 'سارا جلالی',
        title: 'تمپلیت اماده برای کار',
        likes: 123,
        view: 536,
        cover: 'https://cdn.dribbble.com/users/4898370/screenshots/19271604/media/5b8f4706130c59caeb9f35e3e0284868.png?compress=1&resize=320x240&vertical=top',
        video: null
    },
    {
        id: 4,
        avatar: 'https://www.assyst.de/cms/upload/sub/digitalisierung/15-M.jpg',
        name: 'هوشنگ ابتهاج',
        title: 'قالب وردپرسی کامل',
        likes: 620,
        view: 3256,
        cover: 'https://cdn.dribbble.com/userupload/3371459/file/still-c37a45e7c14c551d2b301976a16f0f07.png?compress=1&resize=320x240&vertical=top',
        video: 'https://cdn.dribbble.com/userupload/3371461/file/original-d86d4603fd3bc8efaf41361b5f88fd62.mp4'
    },
    {
        id: 5,
        avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
        name: 'سیاوش قمیشی',
        title: 'پروژه کتاب فروشی آنلاین',
        likes: 225,
        view: 1000,
        cover: 'https://cdn.dribbble.com/userupload/3396181/file/original-390e9ff588ca3489765d08a7ec757cb7.png?compress=1&resize=320x240&vertical=top',
        video: null
    },
    {
        id: 6,
        avatar: 'https://www.exibartstreet.com/wp-content/uploads/avatars/2465/5e0de52aeee8b-bpfull.jpg',
        name: 'طاهر مرادی',
        title: 'سایت خبری ',
        likes: 503,
        view: 3500,
        cover: 'https://cdn.dribbble.com/userupload/3399152/file/original-b168b6b1abaee17894715c9de9f3b9f0.png?compress=1&resize=320x240&vertical=top',
        video: null
    },
    {
        id: 7,
        avatar: 'https://www.assyst.de/cms/upload/sub/digitalisierung/18-F.jpg',
        name: 'مریم سلطانی',
        title: 'فروشگاه بازی رایانه ای',
        likes: 123,
        view: 536,
        cover: 'https://cdn.dribbble.com/userupload/3399009/file/still-33c8ceb8d72dbf60e6c38855d8f49b14.png?compress=1&resize=320x240&vertical=top',
        video: 'https://cdn.dribbble.com/userupload/3399010/file/original-2d75738472185e048c3aa4745627bd0b.mp4'
    },
    {
        id: 8,
        avatar: 'https://www.assyst.de/cms/upload/sub/digitalisierung/15-M.jpg',
        name: 'فریبرز رحمتی',
        title: 'فروشگاه کالا وردپرسی',
        likes: 620,
        view: 3256,
        cover: 'https://cdn.dribbble.com/userupload/3369157/file/still-ecd04f7915ed6b63722fdfbec589913a.png?compress=1&resize=320x240&vertical=top',
        video: 'https://cdn.dribbble.com/userupload/3369157/file/small-3326111c04c5dd90a51c198557a027c3.mp4'
    },
    {
        id: 9,
        avatar: 'https://www.assyst.de/cms/upload/sub/digitalisierung/18-F.jpg',
        name: 'احمد شاملو',
        title: 'تمپلیت سایت موسیقی',
        likes: 123,
        view: 536,
        cover: 'https://cdn.dribbble.com/users/4497136/screenshots/19270961/media/15d49ed5e889b379e53c5f071b788eb5.png?compress=1&resize=320x240&vertical=top',
        video: null
    },
    {
        id: 10,
        avatar: 'https://www.assyst.de/cms/upload/sub/digitalisierung/15-M.jpg',
        name: 'مازیار کاظمی',
        title: 'قالب اماده فروشگاهی',
        likes: 620,
        view: 3256,
        cover: 'https://cdn.dribbble.com/userupload/3387001/file/still-ad68d62c723101384a525212dc74cf2e.png?compress=1&resize=320x240&vertical=top',
        video: 'https://cdn.dribbble.com/userupload/3387002/file/original-4c62ea456061e108b31f60be337eeb47.mp4'
    }
]

const Cart = () => {
    return (
        <div className='px-5 md:px-8 lg:px-20'>
            <div className='grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5 mb-10'>
                {data && data.map(item => (
                    <Card
                        key={item.id}
                        avatar={item.avatar}
                        name={item.name}
                        title={item.title}
                        likes={item.likes}
                        view={item.view}
                        cover={item.cover}
                        video={item.video}
                    />
                ))}
            </div>
            <div className='w-full flex justify-center mb-10'>
                <button className='px-14 py-2 bg-[#efeff0] rounded-lg text-sm text-color-Text1 hover:bg-[#E7E7E9]'>بارگیری عکس های بیشتر</button>
            </div>

        </div>
    )
}

export default Cart;