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
    src:string
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