import { extractPostData } from './posts.js';
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


