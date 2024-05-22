import { it, vi, expect, describe, beforeEach } from 'vitest'

import { sendDataRequest } from './http'
import { HttpError } from './errors';

// const responseData = { key: 'someData'}

// const testFetch = vi.fn((url, options) => {
//     return new Promise((resolve, reject) => {
//         if( typeof options.body !== 'string') {
//             return reject('Erros: it is not a string')
//         }

//         const testResponse = {
//             ok: true,
//             json() {
//                 return new Promise((resolve, reject) => {
//                     resolve(responseData)
//                 })
//             }
//         }
//         resolve(testResponse)
//     })
// }) 

// vi.stubGlobal('fetch', testFetch)

// it('should return any available response data', () => {
//     const testData = {
//         key: 'test'
//     }

//     return expect(sendDataRequest(testData)).resolves.toEqual(responseData)
// })

// it('should convert the provided data to JSON before sending the request', async () => {
//     const testData = {
//                 key: 'test'
//             }
//    let errorMessage;

//    try {
//     await sendDataRequest(testData)
//    } catch(err) {
//     errorMessage = err
//    }

//    expect(errorMessage).not.toBe('Not a string')
// })

describe('sendDataRequest', () => {
    beforeEach(() => {
      global.fetch = async () => ({
        ok: true,
        status: 200,
        json: async () => ({ success: true }),
      });
    });
  
    it('should send data request successfully', async () => {
      const data = { key: 'value' };
      const responseData = await sendDataRequest(data);
  
      expect(responseData).toEqual({ success: true });
    });
  
    it('should throw HttpError on unsuccessful request', async () => {
      global.fetch = async () => ({
        ok: false,
        status: 404,
        json: async () => ({ error: 'Not Found' }),
      });
  
      const data = { key: 'value' };
  
      await expect(async () => {
        await sendDataRequest(data);
      }).rejects.toThrow(HttpError);
    });

    it('should return any available response data', async () => {
        global.fetch = async () => ({
          ok: true,
          status: 200,
          json: async () => ({ success: true, additionalData: 'Some data' }),
        });
    
        const data = { key: 'value' };
        const responseData = await sendDataRequest(data);
    
        expect(responseData.additionalData).toBe('Some data');
      });

      it('should convert the provided data to JSON before sending the request', async () => {
        const data = { key: 'value' };
    
        // Spy on fetch to check if it's called with the correct data
        global.fetch = async (url, options) => {
          // Ensure data is stringified before sending the request
          expect(options.body).toBe(JSON.stringify(data));
          return Promise.resolve({
            ok: true,
            status: 200,
            json: async () => ({ success: true }),
          });
        };
    
        await sendDataRequest(data);
      });
  });