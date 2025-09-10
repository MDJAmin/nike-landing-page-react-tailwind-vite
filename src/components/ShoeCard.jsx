export default function ShoeCard({ imgURL, changeBigShoeImage, bigShoeImg }) {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };
  return (
    <div
      className={`transition-all border-4 rounded-2xl ${
        bigShoeImg === imgURL.bigShoe ? "border-blue-300 scale-110" : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4 shadow-xl'>
        <img
          src={imgURL.bigShoe}
          alt='shoe colletion'
          width={127}
          height={103.34}
          className='object-contain -rotate-12'
        />
      </div>
    </div>
  );
}
