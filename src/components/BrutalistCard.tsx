import { styled } from '@mui/material/styles';
import { Card as MuiCard, type CardProps } from '@mui/material';

interface BrutalistCardProps extends CardProps {
  bgcolor?: string;
  accentcolor?: string;
  accentposition?: 'top' | 'left' | 'none';
}

export const BrutalistCard = styled(MuiCard, {
  shouldForwardProp: (prop) => !['bgcolor', 'accentcolor', 'accentposition'].includes(prop as string),
})<BrutalistCardProps>(({ bgcolor = '#FFFFFF', accentcolor, accentposition = 'none' }) => {
  const baseStyles = {
    border: '5px solid #0A0A0A',
    boxShadow: '8px 8px 0px #0A0A0A',
    borderRadius: 0,
    backgroundColor: bgcolor,
    padding: '24px',
    transition: 'all 0.2s ease-out',
    position: 'relative' as const,

    '&:hover': {
      boxShadow: '12px 12px 0px #0A0A0A',
      transform: 'translate(-2px, -2px)',
    },
  };

  // Add accent styles based on position
  if (accentcolor && accentposition === 'top') {
    return {
      ...baseStyles,
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '8px',
        backgroundColor: accentcolor,
      },
    };
  } else if (accentcolor && accentposition === 'left') {
    return {
      ...baseStyles,
      borderLeft: `10px solid ${accentcolor}`,
    };
  }

  return baseStyles;
});
