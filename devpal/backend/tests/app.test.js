const request = require('supertest');
const app = require('../src/app');

describe('DevPal Backend API', () => {
  describe('GET /health', () => {
    it('should return health status', async () => {
      const res = await request(app).get('/health');
      
      expect(res.status).toBe(200);
      expect(res.body.status).toBe('OK');
      expect(res.body.message).toBe('DevPal Backend API is running');
      expect(res.body.version).toBe('1.0.0');
    });
  });

  describe('GET /api', () => {
    it('should return welcome message', async () => {
      const res = await request(app).get('/api');
      
      expect(res.status).toBe(200);
      expect(res.body.message).toBe('Welcome to DevPal API');
      expect(res.body.version).toBe('1.0.0');
      expect(res.body.endpoints).toBeDefined();
    });
  });

  describe('GET /nonexistent', () => {
    it('should return 404 for non-existent routes', async () => {
      const res = await request(app).get('/nonexistent');
      
      expect(res.status).toBe(404);
      expect(res.body.status).toBe('error');
      expect(res.body.message).toBe('Route not found');
    });
  });
}); 