import PersistentDrawerLeft from "../components/Nav2";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default async function FaqPage() {
  const response = await fetch("http://localhost:3000/api/accordion", {
    cache: "no-store",
  });
  const data = await response.json();

  return (
    <div>
      <PersistentDrawerLeft>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1>FAQ Page</h1>
        </div>
        {data.map((faq: any) => {
          return (
            <Accordion sx={{ backgroundColor: "#131a2e", color: "white" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography>{faq.category}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.question}</Typography>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </PersistentDrawerLeft>
    </div>
  );
}
