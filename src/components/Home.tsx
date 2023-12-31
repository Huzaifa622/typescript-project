import {Container , Typography , Stack, Button} from "@mui/material"
import { useNavigate } from "react-router-dom";
const languages = [
    {
      name: "Japanese",
      code: "ja",
    },
    {
      name: "Hindi",
      code: "hi",
    },
    {
      name: "Spanish",
      code: "es",
    },
    {
      name: "French",
      code: "fr",
    },
  ];
const Home = () => {
    const navigation = useNavigate();
    const languageSelectHandler = (language:string):void =>{
       navigation(`/learning?lang=${language}`);
    }
  return (
    <Container maxWidth={"sm"}>
        <Typography variant="h3" p={"2rem"} textAlign={"center"}>
            Welcome Begin Your Journey of learning
        </Typography>
        <Stack direction={"row"}
        spacing={"2rem"}
        p={"2rem"}
        alignItems={"center"}
        justifyContent={"center"}>
                  {languages?.map((i) => (
          <Button
          onClick={() => languageSelectHandler(i.code)}
          key={i.code}
          variant="contained"
          >
            {i.name}
          </Button>
        ))}
        </Stack>
        <Typography textAlign={"center"}>
        Choose one language from above
      </Typography>
    </Container>
  )
}

export default Home