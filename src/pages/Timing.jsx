import React, { useEffect, useState } from 'react';
import { useHuddle01 } from '@huddle01/react';
import { useLobby, useAudio, useVideo, useRoom, usePeers } from '@huddle01/react/hooks';
import getRoomId from '../api/create-meeting';
import { useGlobalContext } from '../Context/WalletContext';
import { Audio, Video } from '@huddle01/react/components';

const Timing = () => {
  const { initialize, isInitialized } = useHuddle01();
  const { meId } = useHuddle01();
  const { joinLobby } = useLobby();
  const [roomId, setRoomId] = useState(null);
  const [loading, setLoading] = useState(false);
  const { isAddress, setIsAddress } = useGlobalContext();

  console.log(roomId);
 
  const { fetchAudioStream, stopAudioStream, error: micError, stream: audioStream  } = useAudio();
  const { fetchVideoStream, stopVideoStream, error: camError, stream: videoStream } = useVideo();
  const { joinRoom, leaveRoom } = useRoom();

  const { peerIds } = usePeers();

  console.log(camError);

  const createRoomHandler = async () => {
    const data = await getRoomId(isAddress, 'Huddle01-Test', (loading) => setLoading(loading));
    setRoomId(data)
    console.log(data);
  }

  useEffect(() => {
    // its preferable to use env vars to store projectId
    initialize('2pL_B8B13rvb1l27_tK-ZxWUpRkepEdQ');
  }, []);

  if(!isInitialized) return (
    <div>
      Please initialize
    </div>
  )
  return (
    <div>
      {roomId? <div >{roomId.roomId}</div>:<button onClick={createRoomHandler} className='homebutton' >
        Create Meeting
      </button>}
      <input placeholder='room id' onChange={(e) => setRoomId(e.target.value)}/>
      <button onClick={() => joinLobby(roomId)} className='homebutton'>
        Join Lobby
      </button>
      {/* Mic */} 
      <button disabled={!fetchAudioStream.isCallable} onClick={fetchAudioStream}>
        FETCH_AUDIO_STREAM
      </button>
 
      {/* Webcam */} 
      <button disabled={!fetchVideoStream.isCallable} onClick={fetchVideoStream}>
        FETCH_VIDEO_STREAM
      </button>
      <Video peerId={meId} stream={videoStream} />
      <Audio peerId={meId} stream={audioStream} />
    </div>
  )
}

export default Timing