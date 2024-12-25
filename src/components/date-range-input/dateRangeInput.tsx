"use client";
import axios from "axios";
import {
  format,
  startOfMonth,
  endOfMonth,
  addMonths,
  subMonths,
  startOfWeek,
  addDays,
  isSameDay,
  isWithinInterval,
} from "date-fns";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useToken } from "../../../utils/api";
import { ViewDateRangeProps } from "../../../utils/types";
import {
  clearInactiveVendors,
  setInactiveVendors,
  setTotalInActiveVendors,
} from "../../../redux/features/vendorTableSlice";

type DateRange = {
  startDate: Date | null;
  endDate: Date | null;
};

export const DateRangePicker = ({
  onToggle,
}: ViewDateRangeProps): JSX.Element => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [range, setRange] = useState<DateRange>({
    startDate: null,
    endDate: null,
  });
  const dispatch = useDispatch();

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const startDate = startOfMonth(currentMonth);
  const endDate = endOfMonth(currentMonth);
  const startWeek = startOfWeek(startDate);

  const handlePreviousMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const handleNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const handleDateClick = (date: Date) => {
    const normalizedDate = normalizeDate(date);
    if (!range.startDate || (range.startDate && range.endDate)) {
      setRange({ startDate: normalizedDate, endDate: null });
    } else if (range.startDate && !range.endDate) {
      if (normalizedDate < range.startDate) {
        setRange({ startDate: normalizedDate, endDate: range.startDate });
      } else {
        setRange({ startDate: range.startDate, endDate: normalizedDate });
      }
    }
  };
  const normalizeDate = (date: Date): Date => {
    const normalized = new Date(date);
    normalized.setHours(0, 0, 0, 0); // Set the time to 00:00:00
    return normalized;
  };

  const renderDays = () => {
    const days: JSX.Element[] = [];
    let currentDay = startWeek;

    while (
      currentDay <= endDate || // Include all days in the month
      days.length % 7 !== 0 // Fill the last row
    ) {
      const normalizedDay = normalizeDate(currentDay);
      const isCurrentMonth =
        normalizedDay >= startDate && normalizedDay <= endDate;

      const isSelected = range.startDate
        ? isSameDay(normalizedDay, normalizeDate(range.startDate))
        : false;

      const isWithinSelectedRange =
        range.startDate &&
        range.endDate &&
        isWithinInterval(normalizedDay, {
          start: normalizeDate(range.startDate),
          end: normalizeDate(range.endDate),
        });

      days.push(
        <div
          key={normalizedDay.toISOString()}
          className={`py-2 px-2 text-center font-roboto text-sm font-bold rounded-full ${
            isCurrentMonth
              ? "cursor-pointer hover:bg-primary hover:text-white"
              : "text-gray-400"
          } ${isSelected ? "bg-blue-500 text-white" : ""} ${
            isWithinSelectedRange ? "bg-blue-100" : ""
          }`}
          onClick={() => isCurrentMonth && handleDateClick(normalizedDay)}
        >
          {normalizedDay.getDate()}
        </div>
      );
      currentDay = addDays(currentDay, 1);
    }

    return days;
  };

  const token = useToken();

  const handleFilterVendors = async () => {
    try {
      let status: string = "inactive";
      const start_date = range.startDate
        ? format(range.startDate, "yyyy-MM-dd")
        : "";
      const end_date = range.endDate ? format(range.endDate, "yyyy-MM-dd") : "";
      const response = await axios.get(
        `${API_URL}/api/v1/admin/users?type=vendor`,
        {
          params: {
            status,
            start_date,
            end_date,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(clearInactiveVendors());
      dispatch(setInactiveVendors(response?.data?.data?.users?.data));
      const totalPages = Math.ceil(
        response?.data?.data?.total_users /
          response?.data?.data?.users?.per_page
      );
      dispatch(setTotalInActiveVendors(totalPages));
      onToggle(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="fixed inset-0 flex flex-col items-center bg-black/10 h-screen justify-center">
      <div className="w-[409px] h-[520px]   flex flex-col gap-1 rounded-xl shadow-lg">
        {/* Header: Date Range */}
        <div className="w-full h-[79px] bg-white rounded-xl flex items-center justify-between px-8 py-2 text-sidenav font-montserrat font-semibold text-sm rounded-t-lg">
          <button
            className="text-xl font-semibold "
            onClick={handlePreviousMonth}
          >
            <Image src={"/icons/lt.svg"} width={4} height={9} alt="lt.svg" />
          </button>
          <div className="flex items-center space-x-2">
            <p className="text-sm font-medium ">
              {range.startDate
                ? format(range.startDate, "dd MMMM yyyy")
                : "Start Date"}
            </p>
            <span className="">-</span>
            <p className="text-sm font-medium ">
              {range.endDate
                ? format(range.endDate, "dd MMMM yyyy")
                : "End Date"}
            </p>
          </div>
          <button className="text-xl font-semibold " onClick={handleNextMonth}>
            <Image src={"/icons/gt.svg"} width={4} height={9} alt="lt.svg" />
          </button>
        </div>

        {/* Calendar */}
        <div className="px-4 py-2 w-full h-max pb-10 rounded-xl bg-white">
          <div className="items flex flex-col gap-4 ">
            {/* Month Navigation */}
            <div className="flex items-center justify-between mb-2 px-6 ">
              <p className="text-xl text-sidenav font-montserrat font-semibold">
                {format(currentMonth, "MMMM yyyy")}
              </p>
              <div className="btn flex gap-4">
                <button onClick={handleNextMonth}>
                  <Image
                    src={"/icons/calendar-gt.svg"}
                    width={7}
                    height={15}
                    alt="gt.svg"
                  />
                </button>
                <button onClick={handlePreviousMonth}>
                  <Image
                    src={"/icons/calendar-lt.svg"}
                    width={7}
                    height={15}
                    alt="lt.svg"
                  />
                </button>
              </div>
            </div>

            {/* Days of the Week */}
            <div className="grid grid-cols-7  text-[16px] font-medium text-sidenav text-center ">
              {daysOfWeek.map((day) => (
                <p key={day}>{day}</p>
              ))}
            </div>

            {/* Dates */}
            <div className="grid grid-cols-7 gap-1 text-center mt-1 ">
              {renderDays()}
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end  mt-6 gap-2  ">
              <button
                className="w-[125px] h-[46px]  border-[1px] border-filterText text-filterText rounded-xl font-poppins font-medium text-sm "
                onClick={() => {
                  setRange({ startDate: null, endDate: null });
                  onToggle(false);
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleFilterVendors}
                className=" w-[125px] h-[46px] bg-primary rounded-xl text-white font-poppins font-medium text-sm"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
