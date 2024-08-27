const Button = (props) => {
    return (
      <>
        {props?.type === 'outline' ? (
          <div className="text-sm font-semibold cursor-pointer transition-all duration-300 border-2 border-black-800 dark:border-white dark:text-white text-black-800 px-4 py-3 rounded-full hover:bg-black-500 hover:text-white hover:dark:bg-white hover:dark:text-black-700">
            {props.value}
          </div>
        ) : (
          <div className="text-sm font-semibold cursor-pointer transition-all duration-300 border-2 border-black-800 dark:border-white text-white dark:text-black-800 px-4 py-3 rounded-full bg-black-500 dark:bg-white hover:bg-black-800 hover:dark:bg-black-100">
            {props.value}
          </div>
        )}
      </>
    );
  };
  
  export default Button;
  