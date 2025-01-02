import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

export const Testimony = (): JSX.Element | null => {
  const reviews = useSelector(
    (state: RootState) => state.vendorDetails.reviews
  );

  // Function to convert the date to a relative format (e.g., "8 days ago")
  function timeAgo(dateStr: string): string {
    const currentDate = new Date();
    const givenDate = new Date(dateStr);
    const diffInMilliseconds = currentDate.getTime() - givenDate.getTime();

    const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24)); // convert ms to days

    if (diffInDays === 0) {
      return "Today";
    } else if (diffInDays === 1) {
      return "1 day ago";
    } else {
      return `${diffInDays} days ago`;
    }
  }

  // Ensure that reviews are available
  if (!reviews || reviews.length === 0) {
    return <div>No Reviews Yet ..... </div>;
  }

  return (
    <div className="flex flex-col gap-4">
      {reviews.map((item, index) => {
        const formattedDate = timeAgo(item?.created_at);

        return (
          <div
            key={index}
            className={`testimony w-[327px] h-[143px] border-[1px] border-background flex gap-2 rounded-xl *:
              ${index % 2 === 0 ? "ml-16" : "mr-16"}
              `}
          >
            <div className="image w-[80px] p-2">
              <Image
                src={"/images/shape.svg"}
                width={50}
                height={50}
                alt="shape.svg"
              />
            </div>
            <div className="content flex flex-col justify-evenly mr-2 w-full">
              <p className="font-roboto text-xs font-bold">
                {item?.customer?.full_name}
              </p>
              <p className="font-roboto text-[10px] font-normal">
                {item?.review}
              </p>
              <Image
                src={"/images/reviews.svg"}
                width={101}
                height={20}
                alt="reviews.svg"
              />
              <p className="font-roboto text-[8px] font-normal">
                {formattedDate}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
