import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import image from "../../assets/LIS-icon1.jpg";
import { useTranslation } from "react-i18next";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { RoomContext } from "../../Context/RoomsContext";

export default function HotelCard({ room }) {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const navigate = useNavigate();
  const { setRoom } = useContext(RoomContext);
  const isMobile = useMediaQuery(theme.breakpoints.down(390));
  return (
    <Card sx={{ maxWidth: isMobile ? "100%" : 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt="photo"
          onClick={() => {
            setRoom(room);
            navigate("/room");
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {room.name}
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
            {room.cost} {t("cost")}
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
