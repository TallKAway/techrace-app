/** eslint-disable react-hooks/exhaustive-deps */
import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';

interface WebSocketContextProps {
    socket: WebSocket | null;
    speed: number | null;
    battery: number | null;
    video_url: string | null;
}
const SOCKET_URL = process.env.EXPO_PUBLIC_SOCKET_URL;

const WebSocketContext = createContext<WebSocketContextProps>({
    socket: null,
    speed: null,
    battery: null,
    video_url: null,
});

export const SocketProvider = ({ children }: { children: ReactNode }) => {
    const [socket, setSocket] = useState<WebSocket | null>(null);

    const [speed, setSpeed] = useState<number | null>(null);
    const [battery, setBattery] = useState<number | null>(null);
    const [video_url, setVideoUrl] = useState<string | null>(null);

    useEffect(() => {
        if (SOCKET_URL) {
            const newSocket = new WebSocket(SOCKET_URL);

            newSocket.onclose = () => {
                console.log('WebSocket connection closed');
            };

            newSocket.onmessage = (message) => {
                console.log('WebSocket message received:', message.data);
                try {
                    const data = JSON.parse(message.data);

                    if (data.speed !== undefined && data.battery !== undefined) {
                        setSpeed(Math.round(data.speed));
                        setBattery(data.battery);
                        setVideoUrl(data.videoUrl);
                    } else {
                        console.error('Invalid data format:', data);
                    }
                } catch (error) {
                    console.error('Failed to parse message data:', error);
                }
            };

            newSocket.onclose = () => {
                console.log('WebSocket connection closed');
            };

            newSocket.onerror = (error) => {
                console.error('WebSocket error', error);
                const speedData = {
                    cmd: '1',
                    data: [0, 0, 0, 0],
                };
                socket?.send(JSON.stringify(speedData));
            };

            setSocket(newSocket);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [socket]);

    return (
        <WebSocketContext.Provider value={{ socket, speed, battery, video_url }}>
            {children}
        </WebSocketContext.Provider>
    );
};

export const useSocket = () => {
    return useContext(WebSocketContext);
};
