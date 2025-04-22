export default async function handler(req, res) {
    try {
      const response = await fetch('http://192.168.43.15/data');
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch from ESP8266' });
    }
  }
  