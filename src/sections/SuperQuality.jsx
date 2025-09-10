import React from "react";
import { Button } from "../components";
import { shoe8 } from "../assets/images";
import Atropos from "atropos/react";

export default function SuperQuality() {
  return (
    <>
      <section
        id='about-us'
        className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
      >
        <div className='flex flex-1 flex-col'>
          <h2 className='font-Poppins capitalize text-4xl lg:max-w-lg font-bold'>
            We Provide You <br />
            <span className='text-blue-500'> Super </span>
            <span className='text-blue-500'>Quality </span> Shoes
          </h2>
          <p className='mt-4 lg:max-w-lg info-text'>
            Ensuring premium comfort and style, our meticulously crafted footwear is designed
            to elevate your experience, providing you with unmatched quality, innovation, and a
            touch of elegance.
          </p>
          <p className='mt-6 lg:max-w-lg info-text'>
            Our dedication to detail and excellence ensures your satisfaction
          </p>
          <div className='mt-11'>
            <Button label='View details' />
          </div>
        </div>

        <div className='flex-1 flex justify-center items-center'>
          <Atropos
            className='my-atropos transition-all'
            shadow={false}
          >
            <img
              src={shoe8}
              alt='product detail'
              width={570}
              height={522}
              className='object-contain rounded-3xl'
            />
          </Atropos>
        </div>
      </section>
    </>
  );
}
