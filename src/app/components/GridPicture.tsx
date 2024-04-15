import { Typography } from "@mui/material";
import Image from "next/image";

type GridPictureProps = {
  title: string;
  subtitle: string;
  image: string;
};

const GridPicture = ({title, subtitle, image}: GridPictureProps) => {
    return <div style={{ width: "100%", position: "relative"}}>
        <div style={{ position: "absolute", top: 3, left: 3}}>
            <Typography variant="h5" color="white">{title}</Typography>
            <Typography variant="h6" color="white">{subtitle}</Typography>
        </div>
        <Image src={image} alt="Picture" unoptimized width={400} height={300} />
    </div>
}

export default GridPicture;