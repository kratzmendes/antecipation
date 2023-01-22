import React from 'react'
import { Container, Flex, TitleH5 } from "../../styles/styles";
import { TextInput } from '../TextInput';
import { useContext, useState } from "react";
import { ISimulation, SimulationContext } from '../contexts/SimulationFormContext';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaSimulation } from '../../validators/schema';

interface Props{
    className?: string;
    children?: React.ReactNode;
}

export const FormSimulationColumn: React.FC <Props> = ({className, children}) => {

    const { onSubmitMakeSimulation } = useContext(SimulationContext);

    const {
      register,
      handleSubmit,
      control,
      formState,
      formState: { errors },
    } = useForm<ISimulation>({ resolver: yupResolver(schemaSimulation) });

    return (
        <Container 
            className={className} 
            width={'377px'} 
            maxWidth={'377px'} 
            padding={'59px 90px 44px 56px'}
            borderWidth={'1px 0px 1px 1px'}
        >
                <TitleH5>Simule sua Antecipação</TitleH5>
                <form onSubmit={handleSubmit(onSubmitMakeSimulation)}>
                    <TextInput 
                        {...register("amount")}
                        label={'Informe o valor da venda *'} 
                        helperText={!!errors.amount?.message ? errors.amount.message : 'Ex: 15000'}
                        
                        ////////////////////////////////////////////////////////////////

                        //error={!!errors.amount?.message} // mudar fundo do container e cor do helper text
                        
                        ////////////////////////////////////////////////////////////////

                    />
                    <TextInput
                        {...register("installments")} 
                        label={'Em quantas parcelas *'} 
                        helperText={!!errors.installments ? errors.installments?.message : 'Maximo de 12 parcelas'}
                    />
                    <TextInput
                        {...register("mdr")}
                        label={'Informe o percentual de MDR *'} 
                        helperText={!!errors.mdr?.message ? errors.mdr.message : 'Ex: 4'}
                    />
                    <button
                        type="submit"
                    >
                        SUBMIT
                    </button>
                </form>   
                {children}
            
        </Container>
    )
}

