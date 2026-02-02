import { styled } from '@mui/material/styles';
import { Button as MuiButton, type ButtonProps } from '@mui/material';

interface BrutalistButtonProps extends ButtonProps {
  bgcolor?: string;
}

export const BrutalistButton = styled(MuiButton, {
  shouldForwardProp: (prop) => prop !== 'bgcolor',
})<BrutalistButtonProps>(({ color = 'primary', bgcolor }) => {
  // Determine background color based on prop or color
  let backgroundColor = bgcolor || '#00FF94'; // Default to lime

  if (!bgcolor) {
    if (color === 'primary') {
      backgroundColor = '#00FF94'; // Lime
    } else if (color === 'secondary') {
      backgroundColor = '#FF6B35'; // Orange
    } else if (color === 'error') {
      backgroundColor = '#FF006E'; // Pink
    } else if (color === 'warning') {
      backgroundColor = '#FFD60A'; // Yellow
    }
  }

  return {
    backgroundColor,
    color: '#0A0A0A',
    border: '5px solid #0A0A0A',
    boxShadow: '6px 6px 0px #0A0A0A',
    padding: '12px 24px',
    fontSize: '1rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    borderRadius: 0,
    transition: 'all 0.2s ease-out',

    '&:hover': {
      backgroundColor,
      boxShadow: '3px 3px 0px #0A0A0A',
      transform: 'translate(3px, 3px)',
    },

    '&:active': {
      boxShadow: '0px 0px 0px #0A0A0A',
      transform: 'translate(6px, 6px)',
    },

    '&:focus-visible': {
      outline: '3px solid #0A0A0A',
      outlineOffset: '2px',
    },
  };
});
