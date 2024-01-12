'use client';

import { useState, useEffect } from 'react';
import styled from 'styled-components';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true, // TODO: move this to the server
});

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  text-align: center;
  background-color: var(--color-light-grey);
  padding: var(--spacing-large);
  border-radius: var(--border-radius);
  margin-top: var(--spacing-large);
`;

const Title = styled.h2`
  font-size: 2.4rem;
  color: var(--color-ink);
`;

const Content = styled.p`
  font-size: 1.6rem;
  line-height: 1.5;
`;

type StoryProps = {
  text: string;
};

const Story = ({ text }: StoryProps) => {
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [storyTitle, setStoryTitle] = useState<string | null>(null);

  useEffect(() => {
    if (text) {
      // convert text to speech and set audio URL
      const convertTextToSpeech = async () => {
        try {
          const audio = await openai.audio.speech.create({
            model: 'tts-1',
            voice: 'fable',
            input: text,
          });

          const blob = await audio.blob();
          const url = URL.createObjectURL(blob);
          setAudioUrl(url);
        } catch (error) {
          console.error('Error generating audio:', error);
        }
      };

      // generate story title
      const generateStoryTitle = async () => {
        try {
          // generate a short childrens story based on the transcription
          const generatedTitle = await openai.completions.create({
            model: 'gpt-3.5-turbo-instruct',
            prompt: `I need a catchy and imaginative title suitable for a children's story. The story involves a friendly duck and a magical yellow wolf who embark on a whimsical adventure. What would be a good title for this story?`,
            max_tokens: 60,
            temperature: 0.7, // creativity
          });

          setStoryTitle(generatedTitle.choices[0].text);
        } catch (error) {
          console.error('Error generating story title:', error);
        }
      };

      convertTextToSpeech();
      generateStoryTitle();
    }
  }, [text]);

  if (!audioUrl || !storyTitle)
    return (
      <Wrapper>
        <Title>Generating your story...</Title>
      </Wrapper>
    );

  return (
    <Wrapper>
      <Title>{storyTitle}</Title>
      <Content>{text}</Content>
      {audioUrl && (
        <audio controls src={audioUrl}>
          Your browser does not support the audio element.
          <track kind="captions" />
        </audio>
      )}
    </Wrapper>
  );
};

export default Story;
