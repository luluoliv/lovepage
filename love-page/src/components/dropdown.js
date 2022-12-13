import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Dropdown() {
    return (
        <Menu as="div" className="relative inline-block text-left w-full">
            <div>
                <Menu.Button className="inline-flex w-full justify-between rounded-xl border border-solid border-[#757575] bg-[#252525] px-4 py-2 items-center text-xs font-medium text-[#757575] shadow-sm focus:outline-none">
                    Quem é você?
                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#form"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Luara
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#form"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Guilherme
                                </a>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}