/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function Profile() {
  return (
    <>
      <div className="profile ">
        <img src="/profile.jpg" alt="" className="shadow-lg" />
      </div>
      <div className="p-4">
        <h3 className="text-center">Mr.Sok Dara</h3>
        <p className="text-center">Web Developer</p>
      </div>
    </>
  );
}
