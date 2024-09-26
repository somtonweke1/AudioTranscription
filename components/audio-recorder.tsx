"use client";

import { useState, useEffect } from 'react';
import { useReactMediaRecorder } from 'react-media-recorder';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Loader2, Mic, Square, Play } from 'lucide-react';

export function AudioRecorder() {
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [isTranscribing, setIsTranscribing] = useState(false);

  const {
    status,
    startRecording,
    stopRecording,
    mediaBlobUrl,
  } = useReactMediaRecorder({ audio: true });

  useEffect(() => {
    if (mediaBlobUrl) {
      fetch(mediaBlobUrl)
        .then(response => response.blob())
        .then(blob => setAudioBlob(blob));
    }
  }, [mediaBlobUrl]);

  const handleTranscribe = async () => {
    if (!audioBlob) return;

    setIsTranscribing(true);
    const formData = new FormData();
    formData.append('audio', audioBlob, 'recording.wav');

    try {
      const response = await fetch('/api/transcribe', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to transcribe audio');
      }

      const data = await response.json();
      console.log('Transcription:', data.transcription);
      // TODO: Update the transcriptions list
    } catch (error) {
      console.error('Error:', error);
      // TODO: Show error message to user
    } finally {
      setIsTranscribing(false);
    }
  };

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <Button
            onClick={startRecording}
            disabled={status === 'recording'}
          >
            <Mic className="mr-2 h-4 w-4" />
            Start Recording
          </Button>
          <Button
            onClick={stopRecording}
            disabled={status !== 'recording'}
          >
            <Square className="mr-2 h-4 w-4" />
            Stop Recording
          </Button>
        </div>
        <div className="text-sm">Status: {status}</div>
        {mediaBlobUrl && (
          <div className="flex items-center space-x-2">
            <audio src={mediaBlobUrl} controls />
            <Button onClick={handleTranscribe} disabled={isTranscribing}>
              {isTranscribing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Transcribing...
                </>
              ) : (
                <>
                  <Play className="mr-2 h-4 w-4" />
                  Transcribe
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
}