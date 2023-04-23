import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import image from "../../assets/LIS-icon1.jpg";
import image2 from "../../assets/CardPageImg/LISimg1.jpg";
import { useTranslation } from "react-i18next";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RoomContext } from "../../Context/RoomsContext";

export default function HotelCard({ room }) {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const [coverImage, setCoverImage] = useState(image);
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down(390));
  useEffect(() => {
    if (room.id == 1) {
      setCoverImage(image);
    } else if (room.id == 2) {
      setCoverImage(image2);
    }
  }, [room]);
  return (
    <Card sx={{ maxWidth: isMobile ? "100%" : 345 }}>
      <CardActionArea
        onClick={() => {
         
          window.scrollTo(0, 0);
          navigate(`/room/${room.id}`);
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={coverImage}
          alt="photo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {room.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {t("dek")}
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            marginTop={"2rem"}
          >
            {room.price} {t("cost")}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          {t("book")}
        </Button>
      </CardActions>
    </Card>
  );
}
