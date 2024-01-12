'use client';

import { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import OpenAI from 'openai';
import Story from '../components/Story/Story';

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true, // TODO: move this to the server
});

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-large);
  padding: var(--spacing-medium);
`;

const Heading = styled.h1`
  font-family: var(--font-tommy-soft);
  font-weight: 500;
  font-size: 5.6rem;
  text-align: center;
  color: var(--color-ink);
  margin: var(--spacing-huge) 0 0;
`;

const RecordButton = styled.button`
  padding: var(--spacing-medium) var(--spacing-large);
  background-color: var(--color-purple);
  color: var(--color-white);
  border: 3px solid var(--color-purple);
  border-radius: var(--border-radius);
  font-size: 1.8rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: var(--color-white);
    border-color: var(--color-white);
    color: var(--color-purple);
  }
`;

const ReturnButton = styled.button`
  background-color: transparent;
  padding: var(--spacing-medium) var(--spacing-large);
  border: 3px solid var(--color-purple);
  border-radius: var(--border-radius);
  font-size: 1.8rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: var(--color-white);
    border-color: var(--color-white);
    color: var(--color-purple);
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: var(--spacing-large);
  align-items: center;
`;

const VoicePage = () => {
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(
    null,
  );
  const [isRecording, setIsRecording] = useState(false);
  const [story, setStory] = useState<string | null>(null);

  const startRecording = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        const recorder = new MediaRecorder(stream);
        setMediaRecorder(recorder);
        recorder.start();
        setIsRecording(true);

        recorder.ondataavailable = async (e) => {
          const audioData = e.data;

          // convert Blob to File
          const audioFile = new File([audioData], 'recording.mp3', {
            type: 'audio/mp3',
            lastModified: new Date().getTime(),
          });

          // send audio to OpenAI
          try {
            // speech-to-text transcription from OpenAI
            const transcription = await openai.audio.transcriptions.create({
              model: 'whisper-1',
              file: audioFile,
            });

            // generate a short childrens story based on the transcription
            const storyResponse = await openai.completions.create({
              model: 'gpt-3.5-turbo-instruct',
              prompt: `Create a short, fun, and magical story for young children based on this: ${transcription.text}`,
              max_tokens: 150,
            });

            setStory(storyResponse.choices[0].text);
          } catch (error) {
            console.error('Error sending audio to OpenAI:', error);
          }
        };
      })
      .catch(console.error);
  };

  const stopRecording = () => {
    mediaRecorder?.stop();
    setIsRecording(false);
  };

  const toggleRecording = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  return (
    <Wrapper>
      <Heading>Your Voice is Magic – Let&apos;s Hear It!</Heading>
      <ButtonsWrapper>
        <Link href="/">
          <ReturnButton>Return Home</ReturnButton>
        </Link>
        <RecordButton onClick={toggleRecording}>
          {isRecording ? 'Stop Recording' : 'Ready? Press to Talk!'}
        </RecordButton>
      </ButtonsWrapper>
      {story ? <Story text={story} /> : null}
    </Wrapper>
  );
};

export default VoicePage;
