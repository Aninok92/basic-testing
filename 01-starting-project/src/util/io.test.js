import { path } from 'path';
import { expect, it, vi} from 'vitest'
import { promises as fs } from 'fs';

import writeData from "./io";

vi.mock('fs')
vi.mock('path', () => {
    return {
        default: {
            join: (...args) => {
                return args[args.length - 1]
            }
        }
    }
})

it('should execute the writeFile method', () => {
 const data = 'myData'
 const fileName = 'myData.txt'

 writeData(data, fileName)

 //return expect(writeData(data, fileName)).resolves.toBeUndefined();
 expect(fs.writeFile).toBeCalled()
 expect(fs.writeFile).toBeCalledWith(fileName, data)
})
