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
    };
    service: {
      id: number;
      name: string;
    };
  }


export interface JobFilterProp {
  onToggle : (isVisible:boolean)=> void
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
  token:string|null
}

