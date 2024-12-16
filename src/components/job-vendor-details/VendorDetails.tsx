import Image from "next/image";

export const VendorDetails = (): JSX.Element | null => {
  return (
    <div className="vendor-info w-[75%] h-[280px] bg-white rounded-xl flex flex-col gap-2 px-2">
      <div className="header flex items-center justify-between h-20 px-8 ">
        <h1 className="font-roboto text-lg font-semibold">Vendor Info</h1>
        <button className="w-[104px] h-[36px] font-roboto text-xs font-normal bg-primary/10 text-primary rounded-lg">
          View Profile
        </button>
      </div>
      <div className="vendor-details w-full  bg-white rounded-xl flex">
        <div className="image w-[20%]  flex items-start justify-center ">
          <Image
            src={"/images/vendor-details.svg"}
            width={124}
            height={124}
            alt="customer-details.svg"
          />
        </div>
        <div className="details w-[80%] flex flex-col   items-center justify-center">
          <div className="w-full flex flex-col gap-3">
            <div className="name flex justify-between    w-full px-2 ">
              <p className="font-roboto w-[70px]  text-sm font-normal text-filterText">
                Full Name
              </p>
              <p className=" font-roboto w-[30%] flex  text-sm font-normal">
                Michael Guzzi
              </p>
              <div className="flex gap-2 items-center w-[140px]">
                <p className="text-base font-roboto font-semibold">4.7</p>
                <Image
                  src={"/images/reviews.svg"}
                  width={101}
                  height={20}
                  alt="reviews.svg"
                />
              </div>
            </div>
            <div className="w-full h-[2px] bg-background" />
            <div className="name flex justify-between    w-full px-2 ">
              <p className="font-roboto w-[70px]  text-sm font-normal text-filterText">
                Phone
              </p>
              <p className=" font-roboto w-[30%] flex  text-sm font-normal">
                +1 333 6656 666
              </p>

              <div className="flex gap-2 items-center  w-[140px]">
                <p className="text-base font-roboto font-semibold">135</p>
                <p className="text-sm font-roboto font-medium">Reviews</p>
              </div>
            </div>

            <div className="w-full h-[2px] bg-background" />
            <div className="name flex justify-between w-full px-2 ">
              <p className="font-roboto w-[70px] text-sm font-normal text-filterText">
                Email
              </p>
              <p className=" font-roboto w-[30%] text-sm font-normal">
                micheal guzzi@gmail.com
              </p>
              <div className="flex gap-2 items-center  w-[140px]">
                <p className="text-base font-roboto font-semibold">15</p>
                <p className="text-sm font-roboto font-medium">Jobs Done</p>
              </div>
            </div>
            <div className="w-full h-[2px] bg-background" />
            <div className="name flex justify-between w-[43%] px-2  ">
              <p className="font-roboto w-[70px] text-sm font-normal text-filterText">
                Location
              </p>
              <p className=" font-roboto    text-sm font-normal">
                California,Usa
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
