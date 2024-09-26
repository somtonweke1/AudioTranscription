import { AudioRecorder } from '../components/audio-recorder';
import { TranscriptionsGrid } from '../components/transcriptions-grid';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Audio Transcription App</h1>
      <div className="mb-8">
        <AudioRecorder />
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Transcriptions</h2>
        <TranscriptionsGrid />
      </div>
    </div>
  );
}
