import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import image from "../../assets/LIS-icon1.jpg";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function HotelCard() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down(390));
    return (
        <Card sx={{ maxWidth: isMobile ? "100%" : 345 }}>
            <CardActionArea >
                <CardMedia component="img" height="200" image={image} alt="photo" />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Cottage 1
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Cotage has 2 floars, a king size bed and an option of one additional
                        bed
                    </Typography>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        marginTop={"2rem"}
                    >
                        100000 AMD
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button
                    size="small"
                    color="primary"

                >
                    Book Now
                </Button>
            </CardActions>
        </Card>
    );
}