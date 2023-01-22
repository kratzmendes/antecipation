import { createContext } from "react";
import { SubmitHandler } from "react-hook-form";

export interface ISimulation {
    amount: number;
    installments: number;
    mdr: number;
    days?: Array<number>;
  }

export interface ISimulationProviderData {

    /////////////////////////////////////////////////////////////
    simulation: ISimulation | null;
    setSimulation: React.Dispatch<React.SetStateAction<ISimulation | null>>;
    ////PRECISA??
    /////////////////////////////////////////////////////////////

    onSubmitMakeSimulation: SubmitHandler<ISimulation>;
  }
  
export const SimulationContext = createContext<ISimulationProviderData>(
    {} as ISimulationProviderData
  );