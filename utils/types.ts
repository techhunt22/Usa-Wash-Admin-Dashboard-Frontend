export interface InputProps {
  name:string,
  placeholder:string,
  width:string,
  height:string,
  type:string,
}

export interface PasswordInputProps {
  name:string,
  width:string,
  height:string,
}

export interface ButtonProps  {
    path: string;
    name: string;
    ImageUrl: string;
    ActiveImageUrl: string;
  };

 export  interface UserSelectionProps {
    onToggle: (isVisible: boolean) => void;
  };

  export interface LogoutModal  {
    onToggle: (isVisible: boolean) => void;
  };

  export interface GraphStats {
    number:number,
    name:string,
    src:string,
    width:string,
  }

export interface ViewDetailsProps {
  path:string,
  color:string,
}

export interface Job {
    id: number;
    user_id: number;
    service_id: number;
    job_title: string;
    location: string;
    budget: number;
    status: string;
    scheduled_time: string;
    job_description: string;
    created_at: string;
    updated_at: string;
    user: {
      id: number;
      full_name: string;
      profile_pic:string
    };
    service: {
      id: number;
      name: string;
    };
  }

export interface jobTableSlice{
    jobs:Job[]
    totalPages:number
}


export interface JobFilterProp {
  onToggle : (isVisible:boolean)=> void
  setStatus:(status:string|undefined)=>void
  setMinBudget:(min_budget:number|undefined)=>void
  setMaxBudget:(max_budget:number|undefined)=>void
  setServiceId :(service_id:number|undefined)=>void
}

export interface ChartData {
  name: string;
  jobs: number;
}

export interface DataItem {
  name: string;
  value: number;
}

export interface PendingApprovalsStats {
  width:string
}

export interface VendorData {
  id:number
  name:string,
  email:string,
  phone:string,
}

export interface VendorData1 {
  
  name:string,
  email:string,
  phone:string,
  status:string
}

export interface ViewDateRangeProps {
  onToggle:(isVisible:boolean)=>void
  SetStartDate:(start_date:string)=>void
  SetEndDate:(end_date:string)=>void
}

export interface SuspendProps { 
  onToggle : (isVisible:boolean) => void
  heading:string,
  content:React.ReactNode
}

export interface ActiveProps { 
  onToggle : (isVisible:boolean) => void
  heading:string,
  content:React.ReactNode
}

export interface MarkAsCompletedModal { 
  onToggle : (isVisible:boolean) => void
  heading:React.ReactNode
  content:React.ReactNode
}

export interface DeleteProps { 
  onToggle : (isVisible:boolean) => void
  heading:string,
  content:React.ReactNode
}

export interface ApproveProps { 
  onToggle : (isVisible:boolean) => void
  heading:string,
  content:React.ReactNode
}

export interface AdminLoginProps {
  email:string
  password:string
}

export interface ApiError extends Error {
  response?: {
    data?: {
      errors?: {
        messages?: string[];
      };
    };
  };
}

export interface AuthState{
  token:string|null,
  data:{
    name:string|null,
  image:string|null
  }
}


export  interface UsersSlice {
  id:number,
  full_name:string,
  email:string,
  phone_number:string,
  role:string,
  location:string,
  business_information:string,
  profile_pic:string,
  status:string,
  onesignal_player_id:string|null,
}

export interface User {
  user:UsersSlice[]
}

export interface JobType {
    id: number,
    name:string
    description:string
}

export interface Customer{
                    id: number,
                    full_name: string,
                    email: string,
                    phone_number: string,
                    role: string,
                    location:string,
                    business_information:string,
                    profile_pic:string,
                    status: string,
                    onesignal_player_id: string | null
                    created_at:string
}

export interface CustomerSlice {
  customers:Customer[],
  total_users:number
}


export interface Vendor{
  id: number,
  full_name: string,
  email: string,
  phone_number: string,
  role: string,
  location:string,
  business_information:string,
  profile_pic:string,
  status: string,
  onesignal_player_id: string | null
  created_at:string
}

export interface VendorSlice {
  vendors:Vendor[],
  vendors_inactive:Vendor[],
  total_inactiveVendors:number,
  total_vendors:number
}


export interface SearchInputProps {
  onToggle:(searchQuery:string)=>void
}

export interface TableProps { 
  searchTerm : string 
}

export interface VendorApprovalsProps {
  searchTerm : string ,
  start_date:string|undefined,
  end_date:string|undefined,
}

export interface JobTableProps { 
  search:string|undefined
  status:string|undefined
  min_budget:number|undefined
  max_budget:number|undefined
  service_id:number|undefined
}

export interface UserFilterProps { 
  type:string,
  search:string | undefined,
  page:number,
  
}

export interface VendorApprovalFilterProps { 
  type:string,
  status:string,
  search:string | undefined,
  page:number,
  start_date:string | undefined,
  end_date:string | undefined
}

export interface JobTableFilterProps{
  search:string|undefined
status:string|undefined
min_budget:number|undefined
max_budget:number|undefined
service_id:number|undefined
page:number
}

export interface AnalyticsProps{
  totalCustomers:number|null ,
  totalVendors:number|null,
  totalUsers:number|null,
  totalInactiveVendors:number|null,
  totalJobs:number|null
}

export interface JobDetailsProps{
  id:string|undefined
}

// -------------------




export interface Jobs{
  job_title:string,
  location:string,
  budget:number,
  status:string,
  scheduled_time:string,
  job_description:string,
  job_applications:job_applications[]
  user:Users,
  vendor:Vendor
}

export interface Users {
    id:number
    full_name:string,
    email:string,
    phone_number:string,
    location:string
    profile_pic:string,
    status:string,
    created_at:string
    about:string
}

export interface vendorReviews{
    totalReviews: number,
      averageRating:string
}


interface VendorOffers{
  id: number,
  full_name: string,
  profile_pic: string
  reviews_count: number,
  reviews_avg_rating: string,
}

export interface job_applications { 
  user:VendorOffers | null
  budget:number
}

export interface JobDetailsData{
  job:Jobs  |null ,
  vendorReviews:vendorReviews|null ,
  job_applications:job_applications[] |null
}

export interface UserDetailsData{
  user:Users |null,
  totalJobsPosted:number,
  jobs:Job[]
  totalPages:number
}

export interface Documents {
  file_path:string,
  file_name:string,
  created_at:string

}

export interface reviewDetails {
  full_name:string,
  profile_pic:string
}

export interface Reviews {
  id:number,
  rating:number,
  review:string,
  created_at:string,
  customer:reviewDetails
}

export interface VendorDetailsData { 
  user:Users|null,
  reviewCount:number|null,
  avgRating:string|null,
  documents:Documents[],
  reviews:Reviews[],
}