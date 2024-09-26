"use client";

import { useState } from 'react';
import { Card } from './ui/card';
import { Download, Heart } from 'lucide-react';

type Transcription = {
  id: string;
  text: string;
};

export function TranscriptionsGrid() {
  const [transcriptions, setTranscriptions] = useState<Transcription[]>([]);

  const handleDownload = (id: string) => {
    // TODO: Implement download functionality
  };

  const handleLike = (id: string) => {
    // TODO: Implement like functionality
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {transcriptions.map((transcription) => (
        <Card key={transcription.id} className="p-4 relative group">
          <p className="text-sm">{transcription.text}</p>
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => handleDownload(transcription.id)}
              className="p-1 hover:bg-gray-100 rounded-full"
            >
              <Download size={16} />
            </button>
            <button
              onClick={() => handleLike(transcription.id)}
              className="p-1 hover:bg-gray-100 rounded-full ml-2"
            >
              <Heart size={16} />
            </button>
          </div>
        </Card>
      ))}
    </div>
  );
}