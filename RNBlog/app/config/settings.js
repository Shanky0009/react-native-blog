let METEOR_URL = 'ws://192.168.0.110:3000/websocket';
if (process.env.NODE_ENV === 'production') {
  METEOR_URL = ''; 
}

export const settings = {
  env: process.env.NODE_ENV,
  METEOR_URL,
};

export default settings;