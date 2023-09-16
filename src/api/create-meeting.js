import axios from 'axios';

const getRoomId = async (address, title ,callback) => {
    try {
        callback?.(true);
        const response = await axios.post(
            'https://api.huddle01.com/api/v1/create-room',
            {
                title: title,
                hostWallets: [address],
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': `gFy6UuXAxA46TUGRU0fVbNaIjah2bJ3v`,
                },
            }
        );
        callback?.(false);
        return response.data;
    } catch (error) {
        callback?.(false);
        return error.response;
    }
};

export default getRoomId;