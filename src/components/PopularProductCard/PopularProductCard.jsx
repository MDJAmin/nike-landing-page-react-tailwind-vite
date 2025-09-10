import "../PopularProductCard/PopularProductCard.css";
import { star } from "../../assets/icons";
import Atropos from "atropos/react";

export default function PopularProductCard({ imgURL, name, price, starNumber }) {
  const myAtropos = Atropos({
    el: ".my-atropos",
    // rest of parameters
  });
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
      <Atropos
        className='my-atropos transition-all rounded-full'
        shadow={false}
      >
        <div className='rounded-full min-w-36'>
          <img
            src={imgURL}
            alt={name}
            className='w-[282px] h-[100%] rounded-full border-4 border-blue-100 cursor-pointer mb-5 shadow-lg'
          />
        </div>
      </Atropos>
      <div className='mt-8 flex justify-start gap-2.5'>
        <img
          src={star}
          alt='rating icon'
          width={25}
          height={0.1}
          className='relative mt-[2.7px]'
        />
        <p className=' text-xl leading-normal text-gray-800'>{starNumber}</p>
      </div>
      <h3 className=' mt-2 text-2xl leading-normal font-semibold font-Poppins'>{name}</h3>
      <p className=' mt-2 font-semibold font-Poppins text-blue-500 text-2xl leading-normal'>
        {price}
      </p>
    </div>
  );
}
