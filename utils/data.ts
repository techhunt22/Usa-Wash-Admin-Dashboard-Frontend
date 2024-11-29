import { ServiceData } from "./types";

export const dummyData :ServiceData[] = [
    {
      id: "J1234",
      service: "Car Wash",
      customer: { name: "John Doe", avatar: "/images/avatar.svg" },
      price: "$500",
      status: { text: "Completed", color: "#28A745" },
      location: "California, USA",
      date: "Nov 20, 2024, 10:00 AM",
    },
    {
      id: "J1235",
      service: "House Cleaning",
      customer: { name: "Jane Smith", avatar: "/images/avatar.svg" },
      price: "$300",
      status: { text: "Bidding", color: "#FFC107" },
      location: "Texas, USA",
      date: "Nov 21, 2024, 11:00 AM",
    },
    {
      id: "J1236",
      service: "Gardening",
      customer: { name: "Alice Brown", avatar: "/images/avatar.svg" },
      price: "$200",
      status: { text: "Not Bid", color: "#007BFF" },
      location: "New York, USA",
      date: "Nov 22, 2024, 12:30 PM",
    },
    {
      id: "J1237",
      service: "Plumbing",
      customer: { name: "Bob White", avatar: "/images/avatar.svg" },
      price: "$450",
      status: { text: "Pending", color: "#DC3545" },
      location: "Florida, USA",
      date: "Nov 23, 2024, 09:15 AM",
    },
    {
      id: "J1238",
      service: "Electric Work",
      customer: { name: "Charlie Green", avatar: "/images/avatar.svg" },
      price: "$600",
      status: { text: "Completed", color: "#28A745" },
      location: "Nevada, USA",
      date: "Nov 24, 2024, 03:45 PM",
    },
  ];
  