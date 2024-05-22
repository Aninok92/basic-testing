import { savePost, extractPostData } from './posts.js';
import { sendDataRequest } from '../util/http.js';
import { validateNotEmpty } from '../util/validation.js';
import { describe, it, expect, mockImport, beforeEach } from 'vitest';

const title = 'My title'
const content = 'My content'

let formData

describe('extractPostData', () => {
    beforeEach(() => {
        formData = {
            title,
            content,
            get(identifier) {
                return this[identifier]
            }
        }
    })

  it('should extract title and content from the provided form data', async () => {
    const data = extractPostData(formData)

    expect(data.title).toBe(title)
    expect(data.content).toBe(content)
  });

  it('should extract title and content from the provided form data', async () => {
    const data = extractPostData(formData);

    expect(data).toHaveProperty('title', title);
    expect(data).toHaveProperty('content', content);
});

it('should return an object with the correct properties', async () => {
    const data = extractPostData(formData);

    expect(data).toHaveProperty('title');
    expect(data).toHaveProperty('content');
    expect(Object.keys(data)).toHaveLength(2);
});
});

describe('savePost', () => {
    it('should add a created timestamp to the postData object (if not already set)', () => {
        const postData = {
          title: 'My new post',
          content: 'This is the content of my new post.',
        };
      
        const savedPost = savePost(postData);
      
        expect(savedPost.created).toBeInstanceOf(Date);
        // Check if timestamp was added, otherwise expect original object
        expect(savedPost).toEqual(postData)
      });
})

