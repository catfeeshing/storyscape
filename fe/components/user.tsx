'use client'
import React from 'react'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, User} from "@nextui-org/react";

const Userdropdown = (data: any) => {
  return (
    <div>
      <Dropdown placement="bottom-end" backdrop="blur">
        <DropdownTrigger className=" rounded-3xl p-2">
          <User
            as="button"
            avatarProps={{
              isBordered: true,
              src: data.img,
            }}
            className="transition-transform text-slate-600 font-bold text-xl"
            // description={data.email}
            name={data.name}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="User Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-bold">Signed in as</p>
            <p className="font-bold">{data.name}</p>
          </DropdownItem>
          <DropdownItem key="dashboard" href="/levels">Learn</DropdownItem>
          {/* <DropdownItem key="history">History</DropdownItem> */}
          {/* <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem> */}
          <DropdownItem key="settings">Settings</DropdownItem>
          <DropdownItem key="logout" color="danger" onClick={data.logout}>Log Out</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}

export default Userdropdown