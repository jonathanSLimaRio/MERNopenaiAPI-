"use client";

import { useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Stack,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "../../styles/main.module.scss";
import Header from "../../components/Header";

export default function Main() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  console.log("prompt", prompt);
  console.log("response", response);

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8080/chat", { prompt })
      .then((response) => {
        setResponse(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const exempleQuestions = () => {
    return (
      <>
        <Box>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontSize: "26px", fontWeight: "600" }}
          >
            Example of types of question to ask RealAssist
          </Typography>
          <Grid container spacing={2} sx={{ marginTop: '2rem' }}>
            <Grid xs={6}>
              <Paper
                onClick={(e) => {
                  setPrompt("Creating blog content specific to real estate"),
                    handleSubmit(e);
                }}
                elevation={0}
                sx={[
                  {
                    padding: "1rem",
                    marginBottom: "2rem",
                    cursor: "pointer",
                  },
                  {
                    "&:hover": {
                      color: "white",
                      backgroundColor: "#0f1c35",
                    },
                  },
                ]}
              >
                <Typography variant="subtitle1" gutterBottom>
                  Creating blog content specific to real estate
                </Typography>
              </Paper>
            </Grid>
            <Grid xs={6}>
              <Paper
                onClick={(e) => {
                  setPrompt("Creating blog content specific to designers"),
                    handleSubmit(e);
                }}
                elevation={0}
                sx={[
                  {
                    padding: "1rem",
                    marginBottom: "2rem",
                    cursor: "pointer",
                  },
                  {
                    "&:hover": {
                      color: "white",
                      backgroundColor: "#0f1c35",
                    },
                  },
                ]}
              >
                <Typography variant="subtitle1" gutterBottom>
                  Creating blog content specific to real estate
                </Typography>
              </Paper>
            </Grid>
            <Grid xs={6}>
              <Paper
                onClick={(e) => {
                  setPrompt(
                    "Creating email drip campaign content for your clients"
                  ),
                    handleSubmit(e);
                }}
                elevation={0}
                sx={[
                  {
                    padding: "1rem",
                    marginBottom: "2rem",
                    cursor: "pointer",
                  },
                  {
                    "&:hover": {
                      color: "white",
                      backgroundColor: "#0f1c35",
                    },
                  },
                ]}
              >
                <Typography variant="subtitle1" gutterBottom>
                  Creating email drip campaign content for your clients
                </Typography>
              </Paper>
            </Grid>
            <Grid xs={6}>
              <Paper
                onClick={(e) => {
                  setPrompt(" Writing answers to your clients texts/emails"),
                    handleSubmit(e);
                }}
                elevation={0}
                sx={[
                  {
                    padding: "1rem",
                    marginBottom: "2rem",
                    cursor: "pointer",
                  },
                  {
                    "&:hover": {
                      color: "white",
                      backgroundColor: "#0f1c35",
                    },
                  },
                ]}
              >
                <Typography variant="subtitle1" gutterBottom>
                  Writing answers to your clients texts/emails
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </>
    );
  };

  const responseText = () => {
    return (
      <>
        <Paper
          elevation={0}
          sx={{
            padding: "2rem",
            marginBottom: "2rem",
          }}
        >
          <Typography variant="body1" gutterBottom>
            {response}
          </Typography>
        </Paper>
      </>
    );
  };

  return (
    <>
      <div className={styles.container}>
        <Header />
        <div className={styles.main}>
          {response === "" ? exempleQuestions() : responseText()}
          <form onSubmit={handleSubmit} className={styles.formAI}>
            <Stack direction="row" spacing={2}>
              <TextField
                id="outlined-basic"
                label="Ask RealAssist Something"
                variant="outlined"
                fullWidth
                autoFocus
                value={prompt}
                onChange={(event) => setPrompt(event.target.value)}
                color="primary"
              />
              {response !== "" && (
                <Button
                  onClick={() => {
                    setResponse(""), setPrompt("");
                  }}
                  type="submit"
                  variant="contained"
                  endIcon={<DeleteIcon />}
                  color="secondary"
                >
                  CLEAN
                </Button>
              )}

              <Button type="submit" variant="contained" endIcon={<SendIcon />}>
                ASK
              </Button>
            </Stack>
          </form>
        </div>
      </div>
    </>
  );
}
