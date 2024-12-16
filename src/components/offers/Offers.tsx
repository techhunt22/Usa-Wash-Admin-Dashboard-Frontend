import Image from "next/image";

export const Offers = (): JSX.Element | null => {
  return (
    <div className="offer w-[440px] pt-4 h-[236px]  border-[1px] px-4 border-background rounded-lg flex flex-col gap-6">
      <div className="header flex items-center justify-between">
        <div className="image flex items-center gap-2">
          <Image
            src={"/images/vendor-offers-avatar.svg"}
            width={58}
            height={58}
            alt="vendor-offers"
          />
          <h1 className="font-robotoMedium font-medium text-xl">
            Micheal Guzzi
          </h1>
        </div>
        <button className="w-[123px] h-[33px] border-[1px] rounded-lg border-primary text-primary font-robotoMedium text-xs font-medium">
          View Profile
        </button>
      </div>
      <div className="amount flex items-center justify-between">
        <h1 className="text-lg font-robotoMedium font-medium">Bid Amount</h1>
        <h1 className="font-robotoMedium font-bold text-xl text-primary">
          $450
        </h1>
      </div>
      <div className="reviews flex flex-col">
        <h1 className="text-lg font-robotoMedium font-medium">
          About The Vendor
        </h1>
        <div className="flex items-center gap-2">
          <Image
            src={"/images/reviews.svg"}
            width={103}
            height={21}
            alt="reviews.svg"
          />
          <p className="font-roboto text-sm font-normal">4.5 Of 26 Reviews</p>
        </div>
      </div>
    </div>
  );
};
