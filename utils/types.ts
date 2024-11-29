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