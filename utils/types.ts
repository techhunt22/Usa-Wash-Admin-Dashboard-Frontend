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

interface Status {
  text: string;
  color: string;
}

interface Customer {
  name: string;
  avatar: string;
}

export interface ServiceData {
  id: string;
  service: string;
  customer: Customer;
  price: string;
  status: Status;
  location: string;
  date: string;
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

export interface ViewDateRangeProps {
  onToggle:(isVisible:boolean)=>void
}



