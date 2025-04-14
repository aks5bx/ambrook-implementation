// buttons/AmButton.tsx

// Import modules
import Colors from '../styles/colors';
import React from 'react';
import { StyledAmButton } from './AmButton.style'
import type { AmButtonSize } from '../styles/buttonsizes'

// Define the AmButtonColor type
type AmButtonColor = keyof typeof Colors;

// Create an interface to extend the React Button
interface AmButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: AmButtonSize;
    color?: AmButtonColor;
    light?: boolean;
    href?: string; 
    children: React.ReactNode;
}

// Create the AmButton
// Note: href not currently operationalized given that there is no live site
const AmButton = ({
    // Set defaults
    size = 'M',
    color = 'green',
    light = false,
    disabled = false,
    href,
    children,
    ...rest
  }: AmButtonProps): React.JSX.Element => {
    const commonProps = {
      $size: size,
      $color: color,
      $light: light,
      disabled,
      'aria-disabled': disabled,
      ...rest,
    };
  
    return (
      <StyledAmButton as="button" type="button" {...commonProps}>
        {children}
      </StyledAmButton>
    );
  };

// Export
export default AmButton;
