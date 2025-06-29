import React from "react";
import Profile from "../../components/Profile";
import SidebarBuyer from "../../components/SidebarBuyer";

const BuyerProfile = () => {
  // Mock user data - replace with actual data from your backend
  const userData = {
    name: "John Silva",
    email: "john.silva@example.com",
    phone: "+94 77 123 4567",
    address: "123 Main Street, Colombo 03",
    profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
    joinDate: "January 2024",
    totalListings: 5,
    activeListings: 3,
    totalViews: 1250,
    totalInquiries: 28,
    subscription: "PRO",
    subscriptionExpiry: "March 15, 2024",
  };

  const recentActivity = [
    {
      id: 1,
      type: "listing",
      action: "Added new property",
      property: "Luxury Villa in Colombo 7",
      date: "2024-02-20",
      status: "active",
    },
    {
      id: 2,
      type: "inquiry",
      action: "New inquiry received",
      property: "Modern Apartment in Dehiwala",
      date: "2024-02-19",
      status: "unread",
    },
    {
      id: 3,
      type: "subscription",
      action: "Upgraded to PRO plan",
      date: "2024-02-15",
      status: "completed",
    },
  ];

  return (
    <Profile
      userType="buyer"
      SidebarComponent={SidebarBuyer}
      userData={userData}
      recentActivity={recentActivity}
    />
  );
};

export default BuyerProfile;
