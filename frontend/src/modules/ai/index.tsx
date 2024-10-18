import { keyframes } from "@emotion/react";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import StopIcon from "@mui/icons-material/Stop";
import { LoadingButton } from "@mui/lab";
import { Box, Chip, Dialog, DialogContent, Typography } from "@mui/material";
import { useState } from "react";
import SpeechRecognition, {
    useSpeechRecognition,
} from "react-speech-recognition";
import { aiApi } from "store";
import Typewriter from "typewriter-effect";

const pulseAnimation = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.7);
  }
  70% {
    box-shadow: 0 0 0 20px rgba(255, 0, 0, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 0, 0, 0);
  }
`;

const AIAssistant = () => {
    const [generatedContent, setGeneratedContent] = useState<string | null>(
        null,
    );
    const [dialogOpen, setDialogOpen] = useState(false);

    const { transcript, listening } = useSpeechRecognition();

    const [generateContent, { isLoading }] = aiApi.useGenerateContentMutation();

    const handleClickMagicButton = () => {
        if (listening) {
            SpeechRecognition.stopListening();
        } else {
            SpeechRecognition.startListening();
        }
    };

    const handleClickGenerateContent = () => {
        if (!transcript) return;

        generateContent(transcript)
            .unwrap()
            .then((data) => {
                setGeneratedContent(data.response);
                setDialogOpen(true);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <Box
            p={2}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={3}
            overflow="auto"
            height={1}
        >
            <Typography fontSize={18} fontWeight="bold">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString("Нажми на кнопку и начни говорить")
                            .start();
                    }}
                    options={{
                        delay: 50,
                        autoStart: true,
                        cursor: "",
                    }}
                />
            </Typography>

            <Box
                width="128px"
                height="128px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                bgcolor="white"
                borderRadius="50%"
                sx={{
                    animation: listening
                        ? `${pulseAnimation} 1.5s infinite`
                        : "none",
                }}
                onClick={handleClickMagicButton}
            >
                {listening ? (
                    <StopIcon sx={{ fontSize: 40 }} color="error" />
                ) : (
                    <AutoAwesomeIcon sx={{ fontSize: 40 }} color="secondary" />
                )}
            </Box>

            {transcript ? (
                <Typography overflow="auto" fontSize={13}>
                    {transcript}
                </Typography>
            ) : (
                <Box
                    display="flex"
                    justifyContent="center"
                    gap={1}
                    flexWrap="wrap"
                >
                    <Chip label="Составить программу тренировок" size="small" />
                    <Chip label="Диета для похудения" size="small" />
                    <Chip label="Предложить список блюд" size="small" />
                </Box>
            )}

            {transcript && (
                <LoadingButton
                    onClick={handleClickGenerateContent}
                    variant="outlined"
                    size="small"
                    loading={isLoading}
                >
                    Сгенерировать контент
                </LoadingButton>
            )}

            <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
                <DialogContent>{generatedContent}</DialogContent>
            </Dialog>
        </Box>
    );
};

export { AIAssistant };
