import { FC, HTMLAttributes, InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { VariantProps } from 'class-variance-authority';
import { inputRootStyle } from './styles';

export interface TextInputRootProps extends HTMLAttributes<HTMLDivElement>,  VariantProps<typeof inputRootStyle> {
  children: ReactNode;
}

function TextInputRoot ({ 
className,  
width,
  children,    
  ...props
}: TextInputRootProps){
  return (
    <div className={inputRootStyle({width, className})} {...props}>
      {children}
    </div>
  )
}


export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps) {
  return (
    <Slot className="w-6 h-6 text-gray-400">
      {props.children}
    </Slot>
  )}


export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
  return (
    <input 
      className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
      {...props}
    />
  )
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
}