// frontend/design-system/buttons/AmButton.style.tsx

// Import modules
import Colors from '../styles/colors';
import styled from 'styled-components';
import type { AmButtonSize } from '../styles/buttonsizes'

// Create props for the StyledAmButton 
type StyledAmButtonProps = {
                            $size: AmButtonSize
                            $color: keyof typeof Colors;
                            $light: boolean;

}

// Create the StyledAmButton as a function of size, color, and light
export const StyledAmButton = styled.button<StyledAmButtonProps>`
        background-color: ${({ $color, $light }) =>
        $light ? Colors[$color]['light'] : Colors[$color]['dark']};
        
        color: ${({ $light }) => ($light ? '#050505' : '#fff')};

        border: none;

        border-radius: 6px;

        padding: ${({ $size }) =>
        $size === 'XL' ? '16px 32px' :
        $size === 'L' ? '12px 24px' :
        $size === 'M' ? '8px 16px' :
        $size === 'S' ? '6px 12px' :
        '8px 16px'};

        font-size: ${({ $size }) =>
        $size === 'XL' ? '1.5rem' :
        $size === 'L' ? '1.25rem' :
        $size === 'M' ? '1rem' :
        $size === 'S' ? '0.75rem' :
        '1rem'};

        cursor: pointer;

        text-decoration: none;

        display: inline-block;

        opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

        pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};

        &:hover {
        opacity: 0.9;
        }
    
    `;
