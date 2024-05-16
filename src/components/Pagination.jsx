import { useNavigate, useSearchParams } from 'react-router-dom';
import { formUrlQuery } from '../utils/common';

const Pagination = ({ page, totalPages }) => {
  const router = useNavigate();
  const searchParams = useSearchParams();


  const handleNavigation = (type) => {
    const pageNumber = type === "prev" ? page - 1 : page + 1;

    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: "page",
      value: pageNumber.toString(),
    });

    router.push(newUrl, { scroll: false });
  };

  return (
    <div className="flex justify-between gap-3">
      <button
      className="p-0 hover:bg-transparent h-11 rounded-md px-8 hover:bg-accent hover:text-accent-foreground"
        onClick={() => handleNavigation("prev")}
        disabled={Number(page) <= 1}
      >
        <img
          src="/icons/arrow-left.svg"
          alt="arrow"
          width={20}
          height={20}
          className="mr-2"
        />
        Prev
      </button>
      <p className="text-14 flex items-center px-2">
        {page} / {totalPages}
      </p>
      <button
              className="p-0 hover:bg-transparent h-11 rounded-md px-8 hover:bg-accent hover:text-accent-foreground"

        onClick={() => handleNavigation("next")}
        disabled={Number(page) >= totalPages}
      >
        Next
        <img
          src="/icons/arrow-left.svg"
          alt="arrow"
          width={20}
          height={20}
          className="ml-2 -scale-x-100"
        />
      </button>
    </div>
  )
}

export default Pagination