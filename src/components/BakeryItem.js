import { Button, Card, CardMedia, Typography, Box} from "@mui/material"

// TODO: create a component that displays a single bakery item
export default function BakeryItem({item, handleClick}) {
    return (
        <Card sx={{ width: 1, height: 1 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%'}}>
            <CardMedia
                component='img'
                image={item.image}
                alt={item.name}
            />
            <Box bgcolor="#e7d2ad"
            sx={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                    gap: '1rem',
                    padding: '1rem 1rem'
                }}
                >
                    <Box>
                        <Typography sx={{ 
                            fontSize: 'h7.fontSize',
                            fontWeight: 'bold',
                            color: '#3D1F04',
                        }}
                        >
                            {item.name}
                        </Typography>
                        <Typography sx={{
                            color: '#3D1F04'
                        }}>
                            {item.description}
                        </Typography>
                    </Box>
                    <Box sx={{ 
                        display: 'flex', 
                        justifyContent: 'space-around',
                        alignItems: 'center'
                        }}
                    >
                        <Typography
                            sx={{color: '#3D1F04'}}
                            >
                            {'$' + item.price}
                        </Typography>
                        <Button 
                            variant="contained"
                            color="secondary"
                            disableElevation
                            onClick={() => handleClick(item)}
                        >
                            +
                        </Button>
                    </Box>   
                </Box>
            </Box>
        </Card>
    )
}