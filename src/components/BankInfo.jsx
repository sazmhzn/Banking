"use client";

// import { useSearchParams, useRouter } from "react-router-dom";

const BankInfo = ({type, label}) => {
  return (
    
    <div className="bank-info shadow-sm border-blue-700 isActive rounded-xl hover:shadow-sm cursor-pointer">
      <figure className="flex-center h-fit rounded-full bg-blue-100 ">
        <img
          src="/icons/connect-bank.svg"
          width={20}
          height={20}
          alt="Account "
          className="m-2 min-w-5"
        />
      </figure>
      <div className="flex w-full flex-1 flex-col justify-center gap-1">
        <div className="bank-info_content">
          <h2 className="text-16 line-clamp-1 flex-1 font-bold text-blue-900">
            Suron Maharjan 
          </h2>
          {label === "checking" ? (
            <p
              className={`bg-blue-200 text-12 rounded-full px-3 py-1 font-medium text-blue-700 `}
            >
              {/* {account.subtype} */}
              Checking 
            </p>
          ): 
          <p
              className={`text-12 rounded-full px-3 py-1 font-medium text-blue-700 bg-blue-200 `}
            >
              Saving
            </p>
            
          }
        </div>

        <p className={`text-16 font-medium text-blue-700`}>$1000</p>
      </div>
    </div>
  );
};

export default BankInfo;
