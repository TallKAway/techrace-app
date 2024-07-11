import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface WebSocketContextProps {
    socket: WebSocket | null;
}

const SOCKET_URL = process.env.EXPO_PUBLIC_SOCKET_URL || '';

const WebSocketContext = createContext<WebSocketContextProps>({ socket: null });

export const SocketProvider = ({ children }: { children: ReactNode }) => {
    const [socket, setSocket] = useState<WebSocket | null>(null);

    useEffect(() => {
        const newSocket = new WebSocket(SOCKET_URL);

        newSocket.onopen = () => {
            console.log('WebSocket connection established');
        };

        newSocket.onclose = () => {
            console.log('WebSocket connection closed');
        };

        newSocket.onerror = (error) => {
            console.error('WebSocket error', error);
            console.log('Car stop');
            const speedData = {
                cmd: '1',
                data: [0, 0, 0, 0],
            };
            socket?.send(JSON.stringify(speedData));
        };

        setSocket(newSocket);
    }, []);

    return <WebSocketContext.Provider value={{ socket }}>{children}</WebSocketContext.Provider>;
};

export const useSocket = () => {
    return useContext(WebSocketContext);
};
