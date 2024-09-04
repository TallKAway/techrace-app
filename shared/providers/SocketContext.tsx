import React, { ReactNode, createContext, useContext } from 'react';

interface WebSocketContextProps extends WebSocket {
    speed?: number | null;
    battery?: number | null;
    video_url?: string | null;
}
const SOCKET_URL = process.env.EXPO_PUBLIC_SOCKET_URL;

const socket = new WebSocket(String(SOCKET_URL)) as WebSocketContextProps;

const WebSocketContext = createContext<WebSocketContextProps>(socket);

export const useSocket = () => {
    const context = useContext(WebSocketContext);
    if (context === undefined) {
        throw new Error('useSocket must be used within a SocketProvider');
    }

    return context;
};

export const SocketProvider = ({ children }: { children: ReactNode }) => {
    socket.onopen = () => {
        console.log('WebSocket connection established');
    };



    socket.onmessage = ({ data }) => {
        const { speed, battery, videoUrl } = JSON.parse(data);
        socket.speed = speed;
        socket.battery = battery;
        socket.video_url = videoUrl;
    };

    socket.onerror = (error) => {
        console.error('WebSocket error:', error);
    };

    socket.onclose = () => {
        console.log('WebSocket connection closed');
    };

    return <WebSocketContext.Provider value={socket}>{children}</WebSocketContext.Provider>;
};
