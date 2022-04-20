import React from "react";
import Links from "./Links";
import Image from 'next/image'
import me from '../../../assets/images/me.jpeg'

export default function Me() {
  return (
    <div className="avatar">
      <Links />
      <Image className="me" alt="Jack Bentsen" src={me} width="150" height="200" style={{ borderRadius: 100 }}/>
    </div>
  );
}