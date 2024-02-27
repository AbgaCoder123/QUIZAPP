export interface FormContextType {
  scrollForm: React.RefObject<HTMLElement>;
  setToast: React.Dispatch<React.SetStateAction<boolean>>;
  TrackProgress: React.RefObject<HTMLDivElement>;
  setErr: React.Dispatch<React.SetStateAction<any>>;
  LevelOne: boolean; 
  Err:any,
  Toast:boolean,
  setLevelOne: React.Dispatch<React.SetStateAction<boolean>>;
  setLevelTwo: React.Dispatch<React.SetStateAction<boolean>>;
  LevelTwo: boolean; 
  LevelThree: boolean; 
  setLevelThree: React.Dispatch<React.SetStateAction<boolean>>;
  LevelFour: boolean; 
  setLevelFour: React.Dispatch<React.SetStateAction<boolean>>;
  Inputs: any; 
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}