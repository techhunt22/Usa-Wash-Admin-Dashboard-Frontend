import Image from "next/image";
import { ChangeEvent } from "react";
import { SearchInputProps } from "utils/types";

export const SearchInput = ({
  setSearchResult,
}: SearchInputProps): JSX.Element | null => {
  // const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
  //   setSearchResult(e.target.value);
  // };

  return (
    <div className="search w-[80%] bg-white justify-center h-[60px] flex items-center rounded-xl gap-2">
      <input
        type="text"
        placeholder="Search...."
        className="outline-none w-[80%] h-full "
        // onChange={handleSearch}
      />
      <button>
        <Image
          src={"/icons/search.svg"}
          width={19}
          height={19}
          alt="search.svg"
        />
      </button>
    </div>
  );
};
