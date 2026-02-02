import { styled } from "@mui/material"

const StyledContainer = styled("div")(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '10%',
    marginRight: '10%',
    padding: '80px 0',
    overscrollBehavior: 'none',
    WebkitOverflowScrolling: 'touch',
    overflowX: 'hidden',
    [theme.breakpoints.down('md')]: {
        marginLeft: '5%',
        marginRight: '5%',
        padding: '40px 0',
    },
}))

export default function Container({ children } : { children: React.ReactNode}) {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}