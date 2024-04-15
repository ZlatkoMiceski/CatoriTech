"use client";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Typography } from "@mui/material";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

const LinearProgressBar = () => {
  const userName = useSelector((state: RootState) => state.tobeRenamed.user);
  return (
    <div style={{margin: "20px", padding: "15px"}}>
        <Typography color="white">{`Welcome back ${userName}`}</Typography>
      <BorderLinearProgress variant="determinate" value={50} />
    </div>
  );
};

export default LinearProgressBar;
