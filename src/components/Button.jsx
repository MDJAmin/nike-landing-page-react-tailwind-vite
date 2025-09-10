const Button = ({ label, iconURL, backgroundColor, textColor, borderColor, fullWidth }) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-Poppins text-lg leading-none hover:scale-x-105 transition-all shadow-md
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-blue-500 text-white"
      } rounded-full ${fullWidth && "w-full"}`}
    >
      {label}

      {iconURL && (
        <img
          src={iconURL}
          alt='arrow right icon'
          className='transition-all ml-1 text-blue-500 w-5 h-5 hover:scale-125'
        />
      )}
    </button>
  );
};

export default Button;
