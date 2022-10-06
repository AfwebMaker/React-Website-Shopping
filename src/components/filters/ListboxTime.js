import { Fragment, useState } from 'react'
//headlessui
import { Listbox, Transition } from '@headlessui/react'
//react-icons
import { BsCheck, BsChevronBarExpand } from 'react-icons/bs';


const people = [
  { name: 'اکنون' },
  { name: 'یک هفته گذشته' },
  { name: 'یک ماه گذشته' },
  { name: 'یک سال گذشته' },
  { name: 'همیشه' },
]

export default function ListboxTime() {
  const [selected, setSelected] = useState(people[0])

  return (
    <div className="z-50 col-span-8 flex items-center justify-star mt-2">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative w-full">
          <Listbox.Button className="border cursor-pointer border-color-light-main-2 relative w-full rounded-lg bg-white py-2 pl-10 pr-3 text-right shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus:ring-4 hover:ring-4 hover:ring-color-light-main-1 hover:border hover:border-color-main-1 focus:border focus:border-color-main-1 focus:ring-color-light-main-1 sm:text-sm transition-all duration-300 outline-none ">
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center pr-2">
                <BsChevronBarExpand/>
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-2 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-color-light-main-1 transition-all duration-150 text-color-Text3' : 'text-color-Text3'
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-color-main-1">
                            <BsCheck className='text-xl'/>
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}