import React from "react";
import { useNavigate } from "react-router-dom";
import { RiStethoscopeFill } from "react-icons/ri";

function Doctor({ doctor }) {
  const navigate = useNavigate();
  return (
    <div
      className="card p-4 cursor-pointer "
      onClick={() => navigate(`/book-appointment/${doctor._id}`)}
    >
      <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
        <RiStethoscopeFill size={28} color="#1890ff" />
      </div>
      <h1 className="card-title text-center text-dark">
        {doctor.firstName} {doctor.lastName}
      </h1>
      <hr />
      <p className="mb-2">
        <b>Phone Number : </b>
        {doctor.phoneNumber}
      </p>
      <p className="mb-2">
        <b>Address : </b>
        {doctor.address}
      </p>
      <p className="mb-2">
        <b>Fee per Visit : </b>
        {doctor.feePerCunsultation}
      </p>
      <p className="mb-2 ">
        <b>Timings : </b>
        {doctor.timings[0]} - {doctor.timings[1]}
      </p>
    </div>
  );
}

export default Doctor;
