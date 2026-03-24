import {CourseMapper} from './CourseMapper';
import { expect, it } from 'vitest';

it('should convert CourseApi to CourseDomains', () => {
    const course = CourseMapper.toDomain({
        course: {
            name: 'Teste de conversão'
        }
    })

    expect(course).toEqual({
        name: 'Teste de conversão',
    })
})