"use client"
import React from "react";
import Link  from 'next/link';
import Form from './form';

const Contacts = () => {

  return (
    <React.Fragment>
      <div id="contact">
        <Link href="https://github.com/RemyXVX">GitHub</Link>
        <Link href="https://www.linkedin.com/in/remyflores/">LinkedIn</Link>
        <Link href="https://www.instagram.com/youngglitterbearxvx/">Instagram</Link>
      </div>
      <div>
        <Form />
      </div>
    </React.Fragment>
  )
}

export default Contacts;
