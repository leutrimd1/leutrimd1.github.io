import { styled } from '@mui/material/styles';
import { Chip as MuiChip } from '@mui/material';

export const BrutalistChip = styled(MuiChip)({
  backgroundColor: '#FFD60A',
  color: '#0A0A0A',
  border: '3px solid #0A0A0A',
  borderRadius: 0,
  fontFamily: '"Courier New", "Courier", monospace',
  fontWeight: 700,
  fontSize: '0.875rem',
  padding: '4px 8px',
  height: 'auto',

  '& .MuiChip-label': {
    padding: '4px 8px',
  },
});
