import { Icon } from '@iconify/react';
import React from 'react'
import Avatar from 'react-avatar';

const UserItem = ({ data }) => {
  const { displayName, isTyping } = data;
  return (
    <div className="flex items-center w-full gap-2 px-6 py-3 select-none ">
      <Avatar
        color={Avatar.getRandomColor("sitebase", [
          "#AF2D2D",
          "#1c3bec",
          "#ffa000",
          "#5500e1",
          "#52d7e7",
          "#ff598c",
          "#f4a261",
          "#762575",
        ])}
        name={displayName}
        size="30"
        round="30px"
      />
      <div className="font-medium grow">{displayName}</div>
      <div>
        <Icon
          icon="material-symbols:circle"
          className="w-2.5 h-2.5 text-green-500"
        />
      </div>
    </div>
  );
}

export default UserItem